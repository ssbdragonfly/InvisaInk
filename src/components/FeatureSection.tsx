
import * as React from "react";
import {
  ShieldCheck,
  Layers,
  RefreshCw,
  Share2,
  MousePointer,
  Film,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-invisaBlue" />,
    title: "AI-Disruptive Perturbations",
    description:
      "Applies imperceptible pixel-level noise to fool AI models while maintaining visual quality for human viewers.",
  },
  {
    icon: <Layers className="h-6 w-6 text-invisaBlue" />,
    title: "Multi-Layer Security",
    description:
      "Combines style cloaking, metadata tagging, and blockchain-based provenance for redundant protection.",
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-invisaBlue" />,
    title: "Dynamic Defense Updates",
    description:
      "Auto-refreshes perturbation algorithms to counter evolving AI scraping techniques.",
  },
  {
    icon: <Share2 className="h-6 w-6 text-invisaBlue" />,
    title: "Cross-Platform Opt-Out",
    description:
      "Automatically submits protected media to AI opt-out registries via API integrations.",
  },
  {
    icon: <MousePointer className="h-6 w-6 text-invisaBlue" />,
    title: "User-Friendly Interface",
    description:
      "One-click protection with adjustable intensity sliders and sandbox testing.",
  },
  {
    icon: <Film className="h-6 w-6 text-invisaBlue" />,
    title: "Video-Specific Tools",
    description:
      "Temporal perturbations and frame masking to disrupt AI's ability to track objects across frames.",
  },
];

export function FeatureSection() {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.feature-card').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-12 md:py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-invisaDark to-muted/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-10 pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block" data-aos="fade-up">
              <span className="group px-4 py-1.5 text-xs md:text-sm rounded-full bg-gradient-to-r from-invisaBlue/20 to-invisaBlue/10 text-invisaBlue font-medium hover:from-invisaBlue/30 hover:to-invisaBlue/20 transition-all duration-300 cursor-pointer">
                Key Features
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-invisaBlue/90" data-aos="fade-up" data-aos-delay="100">
              Advanced Protection for Your Visual Content
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" data-aos="fade-up" data-aos-delay="200">
              InvisaInk deploys cutting-edge adversarial techniques to keep your images and videos safe from AI misuse.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="feature-card opacity-0 transition-all duration-500 bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-sm border-muted hover:shadow-lg hover:shadow-invisaBlue/5 hover:border-invisaBlue/30 hover:-translate-y-1 transform transition-all duration-300"
              style={{transitionDelay: `${index * 100}ms`, transform: 'translateY(20px)'}}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 group-hover:from-invisaBlue/20 group-hover:to-muted/50 transition-colors">
                  <div className="relative">
                    <div className="absolute inset-0 bg-conic-gradient opacity-0 group-hover:opacity-30 rounded-lg blur-xl transition-opacity duration-500"></div>
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
