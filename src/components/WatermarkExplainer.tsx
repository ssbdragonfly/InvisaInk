
import * as React from "react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Shield, Download, EyeOff, BadgeCheck, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sampleImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158";

export function WatermarkExplainer() {
  const [activeTab, setActiveTab] = useState("original");
  const [isWatermarked, setIsWatermarked] = useState(false);
  const [showInfoBox, setShowInfoBox] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    if (isWatermarked) return;
    
    const timer = setTimeout(() => {
      if (animationStep < 3) {
        setAnimationStep(animationStep + 1);
      } else {
        setAnimationStep(0);
        setIsWatermarked(true);
        setActiveTab("watermarked");
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [animationStep, isWatermarked]);
  
  useEffect(() => {
    if (activeTab === "original") {
      setIsWatermarked(false);
      setAnimationStep(0);
    }
  }, [activeTab]);

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Invisible Watermarking Technology
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Our proprietary LSB steganography embeds invisible, AI-resistant watermarks in your content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <Tabs 
              defaultValue="original" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="original">Original Image</TabsTrigger>
                <TabsTrigger value="watermarked">Watermarked Image</TabsTrigger>
              </TabsList>
              <TabsContent value="original" className="relative">
                <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                  <img 
                    src={sampleImage} 
                    alt="Original image without watermark" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Original
                  </div>
                  
                  {/* Watermarking animation overlay */}
                  {animationStep > 0 && (
                    <div className="absolute inset-0 bg-grid-white/5 bg-black/10 backdrop-blur-[1px] flex items-center justify-center">
                      {animationStep === 1 && (
                        <div className="flex flex-col items-center gap-2 animate-fade-in">
                          <div className="bg-muted/30 backdrop-blur-md p-3 rounded-full">
                            <Shield className="h-8 w-8 text-invisaBlue animate-pulse" />
                          </div>
                          <span className="text-sm font-medium bg-black/50 text-white px-3 py-1 rounded-full">
                            Analyzing image...
                          </span>
                        </div>
                      )}
                      
                      {animationStep === 2 && (
                        <div className="flex flex-col items-center gap-2 animate-fade-in">
                          <div className="bg-muted/30 backdrop-blur-md p-3 rounded-full">
                            <EyeOff className="h-8 w-8 text-invisaPurple animate-pulse" />
                          </div>
                          <span className="text-sm font-medium bg-black/50 text-white px-3 py-1 rounded-full">
                            Embedding watermark...
                          </span>
                        </div>
                      )}
                      
                      {animationStep === 3 && (
                        <div className="flex flex-col items-center gap-2 animate-fade-in">
                          <div className="bg-muted/30 backdrop-blur-md p-3 rounded-full">
                            <BadgeCheck className="h-8 w-8 text-green-500 animate-pulse" />
                          </div>
                          <span className="text-sm font-medium bg-black/50 text-white px-3 py-1 rounded-full">
                            Watermark applied!
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <Button 
                  onClick={() => {
                    setAnimationStep(1);
                  }} 
                  className="w-full mt-4 bg-invisaBlue hover:bg-opacity-90"
                  disabled={animationStep > 0}
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Apply Invisible Watermark
                </Button>
              </TabsContent>
              
              <TabsContent value="watermarked">
                <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                  <img 
                    src={sampleImage} 
                    alt="Watermarked image" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2 bg-green-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Protected
                  </div>
                  
                  <div className="absolute bottom-4 right-4">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="bg-card/80 backdrop-blur-sm border shadow-lg hover:bg-card"
                      onClick={() => setShowInfoBox(!showInfoBox)}
                    >
                      <Info className="h-4 w-4 mr-1" /> Watermark Info
                    </Button>
                  </div>
                  
                  {showInfoBox && (
                    <div className="absolute bottom-16 right-4 w-64 bg-card/95 backdrop-blur-md p-4 rounded-lg border shadow-xl animate-fade-in">
                      <h4 className="text-sm font-medium mb-2 flex items-center">
                        <Shield className="h-4 w-4 text-green-500 mr-1" />
                        Watermark Details
                      </h4>
                      <div className="space-y-1 text-xs">
                        <p className="flex justify-between">
                          <span className="text-muted-foreground">Creator ID:</span>
                          <span className="font-mono">ac6e929fa8</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-muted-foreground">Timestamp:</span>
                          <span className="font-mono">2025-04-29</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-muted-foreground">Protection:</span>
                          <span className="font-mono text-green-500">Active</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-muted-foreground">Method:</span>
                          <span className="font-mono">LSB Steganography</span>
                        </p>
                        <button 
                          onClick={() => setShowInfoBox(false)}
                          className="w-full text-xs text-center mt-2 text-muted-foreground hover:text-foreground"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button 
                    className="w-full bg-invisaPurple hover:bg-opacity-90"
                    onClick={() => {
                      setActiveTab("original");
                      setIsWatermarked(false);
                    }}
                  >
                    Try Again
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">How Our Watermarking Works</h3>
              <p className="text-muted-foreground mb-6">
                InvisaInk uses advanced LSB steganography techniques to embed invisible watermarks that protect your visual content from AI exploitation.
              </p>
            </div>
            
            <div className="grid gap-4">
              <Card className="p-4 bg-card/60 backdrop-blur-sm border border-muted/40">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-invisaBlue/20">
                    <Shield className="h-5 w-5 text-invisaBlue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Imperceptible to Humans</h4>
                    <p className="text-sm text-muted-foreground">
                      The watermark is completely invisible to the human eye, preserving the visual quality of your content.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/60 backdrop-blur-sm border border-muted/40">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-invisaPurple/20">
                    <EyeOff className="h-5 w-5 text-invisaPurple" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">AI-Resistant Encoding</h4>
                    <p className="text-sm text-muted-foreground">
                      Our proprietary encoding disrupts AI training models while maintaining full visual fidelity.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/60 backdrop-blur-sm border border-muted/40">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-green-500/20">
                    <BadgeCheck className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Tamper-Evident</h4>
                    <p className="text-sm text-muted-foreground">
                      Any attempt to remove the watermark creates detectable artifacts, ensuring content integrity.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-invisaBlue to-invisaPurple hover:bg-opacity-90 text-white shadow-lg shadow-invisaPurple/20"
              onClick={() => {
                setActiveTab("original");
                setIsWatermarked(false);
                setAnimationStep(0);
              }}
            >
              <Upload className="mr-2 h-4 w-4" />
              Try With Your Own Image
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
