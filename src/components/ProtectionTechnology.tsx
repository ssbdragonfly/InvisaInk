
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Shield, Code, Database, Server } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function ProtectionTechnology() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
            Advanced Protection Technology
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            InvisaInk uses cutting-edge adversarial techniques to protect your visual content from AI exploitation.
          </p>
          <Separator className="bg-gradient-to-r from-invisaBlue to-invisaPurple max-w-sm mx-auto my-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-muted/30 p-6 rounded-lg border border-muted">
              <h3 className="text-xl font-medium flex items-center gap-2 mb-3">
                <Shield className="text-invisaBlue h-5 w-5" /> Pixel-Level Protection
              </h3>
              <p className="text-muted-foreground">
                We apply imperceptible adversarial perturbations at the pixel level that specifically target and disrupt AI model interpretation
                while remaining virtually invisible to the human eye.
              </p>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border border-muted">
              <h3 className="text-xl font-medium flex items-center gap-2 mb-3">
                <Code className="text-invisaBlue h-5 w-5" /> Adversarial Machine Learning
              </h3>
              <p className="text-muted-foreground">
                Our protection leverages advanced adversarial machine learning techniques to generate subtle patterns that confuse AI models
                during the feature extraction and interpretation phases.
              </p>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border border-muted">
              <h3 className="text-xl font-medium flex items-center gap-2 mb-3">
                <Database className="text-invisaBlue h-5 w-5" /> Multi-Model Defense
              </h3>
              <p className="text-muted-foreground">
                InvisaInk's algorithm is trained against multiple AI architectures to provide broad-spectrum protection against various
                types of models including CNNs, Vision Transformers, and Diffusion Models.
              </p>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border border-muted">
              <h3 className="text-xl font-medium flex items-center gap-2 mb-3">
                <Server className="text-invisaBlue h-5 w-5" /> Adaptive Defense System
              </h3>
              <p className="text-muted-foreground">
                Our protection constantly evolves through regular updates to counter new AI techniques and models, ensuring
                long-term effectiveness against emerging threats.
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-muted/10 to-muted/30 p-8 rounded-xl">
            <div className="absolute inset-0 bg-grid-white/5 rounded-xl" />
            <div className="relative backdrop-blur-sm bg-muted/10 rounded-lg p-6 border border-muted">
              <code className="text-xs md:text-sm text-muted-foreground font-mono block whitespace-pre overflow-x-auto py-4">
{`// Example of adversarial perturbation application
function applyInvisaInkProtection(image) {
  // Generate adversarial pattern
  const pattern = generateAdversarialPattern(
    image, 
    targetModels,
    protectionStrength
  );

  // Apply to original image with minimal visual impact
  const protectedImage = addPerturbation(image, pattern);

  // Validate protection effectiveness
  const protectionScore = testAgainstAIModels(
    protectedImage, 
    benchmarkSuite
  );

  return {
    protectedImage,
    protectionScore,
    metadata: generateProtectionMetadata()
  };
}`}
              </code>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-medium">Protection Algorithm</h4>
                  <p className="text-xs text-muted-foreground mt-1">Simplified representation of our approach</p>
                </div>
                <Button size="sm" className="bg-invisaPurple">View Technical Paper</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
