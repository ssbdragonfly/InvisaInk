
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  Shield, 
  LineChart, 
  ArrowRight, 
  Download,
  Check,
  Zap
} from "lucide-react";

export function ProcessExplainer() {
  const [currentStep, setCurrentStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: "Upload Content",
      icon: <Upload className="h-8 w-8" />,
      description: "Upload your images or videos that you want to protect from AI exploitation."
    },
    {
      id: 2,
      title: "Analysis",
      icon: <LineChart className="h-8 w-8" />,
      description: "Our system analyzes your content and identifies optimal protection parameters."
    },
    {
      id: 3,
      title: "Protection Applied",
      icon: <Shield className="h-8 w-8" />,
      description: "InvisaInk applies the invisible adversarial perturbations to disrupt AI interpretation."
    },
    {
      id: 4,
      title: "Download Protected Content",
      icon: <Download className="h-8 w-8" />,
      description: "Download your protected content, visually identical but now resistant to AI exploitation."
    }
  ];

  const goToNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(1);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-invisaDark to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">How InvisaInk Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Protecting your visual content is simple with our 4-step process
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Progress value={(currentStep / steps.length) * 100} className="h-2" />
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>Upload</span>
              <span>Analysis</span>
              <span>Protection</span>
              <span>Download</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-card/60 backdrop-blur-sm rounded-lg border p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="inline-flex items-center justify-center rounded-full bg-invisaPurple/20 text-invisaPurple px-2.5 py-0.5 text-xs font-medium">
                  Step {currentStep} of {steps.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round((currentStep / steps.length) * 100)}% Complete
                </span>
              </div>
              
              <div className="flex flex-col items-center text-center mb-6">
                <div className="p-4 rounded-full bg-muted/30 mb-4 text-invisaBlue">
                  {steps[currentStep - 1].icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{steps[currentStep - 1].title}</h3>
                <p className="text-muted-foreground">{steps[currentStep - 1].description}</p>
              </div>

              <Button 
                onClick={goToNextStep} 
                className="w-full bg-invisaBlue hover:bg-opacity-90"
              >
                {currentStep === steps.length ? (
                  <>Restart Demo <Zap className="ml-2 h-4 w-4" /></>
                ) : (
                  <>Continue <ArrowRight className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </div>

            <div className="relative bg-muted/20 rounded-lg aspect-square flex items-center justify-center p-6">
              {/* Visual representation for each step */}
              {currentStep === 1 && (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <div className="w-48 h-48 border-2 border-dashed border-muted-foreground/50 rounded-lg flex items-center justify-center">
                    <Upload className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                  <p className="text-sm text-muted-foreground">Drag & drop your files here</p>
                </div>
              )}

              {currentStep === 2 && (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="relative w-48 h-48 bg-muted/30 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <LineChart className="h-12 w-12 text-invisaBlue animate-pulse" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-invisaBlue animate-scanning"></div>
                  </div>
                  <div className="mt-4 space-y-2 w-48">
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div className="h-full bg-invisaPurple w-2/3 animate-pulse"></div>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div className="h-full bg-invisaBlue w-3/4 animate-pulse"></div>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div className="h-full bg-invisaPurple w-1/2 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="relative w-48 h-48 bg-gradient-to-r from-muted/30 to-muted/50 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="h-12 w-12 text-invisaPurple" />
                    </div>
                    <div className="absolute inset-0 bg-grid-white/5"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-invisaBlue/10 to-transparent animate-scanning"></div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm bg-muted/20 px-3 py-1 rounded-full">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Protection applied successfully</span>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <div className="relative w-48 h-48 bg-muted/40 rounded-lg overflow-hidden">
                    <div className="absolute inset-0">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                        alt="Protected content ready for download"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-invisaBlue/20 to-invisaPurple/20 pointer-events-none"></div>
                    <div className="absolute bottom-2 right-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      Protected
                    </div>
                  </div>
                  <Button size="sm" className="bg-invisaBlue gap-2">
                    <Download className="h-4 w-4" /> Download Protected File
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-card/60 backdrop-blur-sm rounded-lg border">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-invisaBlue/20 text-invisaBlue mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-medium mb-2">Fast Processing</h4>
              <p className="text-muted-foreground text-sm">
                Protection is applied in seconds with optimized algorithms that run efficiently.
              </p>
            </div>
            
            <div className="p-6 bg-card/60 backdrop-blur-sm rounded-lg border">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-invisaPurple/20 text-invisaPurple mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-medium mb-2">99.7% Effective</h4>
              <p className="text-muted-foreground text-sm">
                Tested against leading AI models with a 99.7% protection success rate.
              </p>
            </div>
            
            <div className="p-6 bg-card/60 backdrop-blur-sm rounded-lg border">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-invisaBlue/20 text-invisaBlue mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-medium mb-2">Quality Preserved</h4>
              <p className="text-muted-foreground text-sm">
                No visible quality loss - your content remains pristine to human viewers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
