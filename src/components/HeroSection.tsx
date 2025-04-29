
import * as React from "react";
import { ArrowRight, Shield, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-24 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none"></div>
      <div className="absolute -left-1/3 top-1/4 w-96 h-96 bg-invisaBlue/10 rounded-full blur-3xl animate-pulse-subtle pointer-events-none"></div>
      <div className="absolute -right-1/3 bottom-1/4 w-96 h-96 bg-invisaPurple/10 rounded-full blur-3xl animate-pulse-subtle pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="inline-block animate-on-scroll opacity-0 transition-all duration-700 delay-100" style={{transform: 'translateY(20px)'}}>
              <span className="group px-4 py-1.5 text-xs md:text-sm rounded-full bg-gradient-to-r from-invisaPurple/20 to-invisaBlue/20 text-invisaPurple font-medium hover:from-invisaPurple/30 hover:to-invisaBlue/30 transition-all duration-300 cursor-pointer">
                Visual Content Protection
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-on-scroll opacity-0 transition-all duration-700 delay-200" style={{transform: 'translateY(20px)'}}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-invisaBlue via-white to-invisaPurple animate-gradient-shift bg-[length:200%_auto]">
                  Protect Your Visual Content
                </span> from AI Exploitation
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl animate-on-scroll opacity-0 transition-all duration-700 delay-300" style={{transform: 'translateY(20px)'}}>
                InvisaInk disrupts AI interpretation at the pixel level while preserving human visibility.
                Secure your images and videos against unauthorized AI training and misuse.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-on-scroll opacity-0 transition-all duration-700 delay-400" style={{transform: 'translateY(20px)'}}>
              <Button className="bg-gradient-to-r from-invisaBlue to-invisaPurple hover:bg-opacity-90 text-white shadow-lg shadow-invisaPurple/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-invisaBlue/30">
                Start Protecting <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/how-it-works">
                <Button variant="outline" className="border-invisaBlue/30 hover:border-invisaBlue transform transition-all duration-300 hover:scale-105">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative mx-auto animate-fade-in animate-on-scroll opacity-0 transition-all duration-700 delay-500" style={{transform: 'translateY(20px)'}}>
            <div className="absolute inset-0 rounded-lg border-2 border-invisaBlue/20 -m-2 blur-sm animate-pulse-subtle"></div>
            <div className="relative w-full aspect-video rounded-lg border overflow-hidden bg-muted/30 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 aspect-video rounded bg-gradient-to-b from-invisaPurple/20 to-invisaBlue/20 shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 backdrop-blur-[1px] bg-muted/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -inset-10 bg-conic-gradient opacity-30 blur-3xl animate-gradient-shift rounded-full"></div>
                      <Shield className="h-16 w-16 text-invisaBlue animate-shield-rotate relative z-10" />
                    </div>
                  </div>
                  <div className="absolute h-1/4 w-full bg-gradient-to-r from-transparent via-invisaBlue/40 to-transparent animate-scanning"></div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 flex gap-2">
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-card/80 shadow-md hover:bg-card/60 transition-colors backdrop-blur-sm border border-muted/30 group">
                  <Lock className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">Protected</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-card/80 shadow-md hover:bg-card/60 transition-colors backdrop-blur-sm border border-muted/30 group">
                  <Eye className="h-4 w-4 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">AI Blocked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
