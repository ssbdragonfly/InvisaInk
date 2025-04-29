
import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Camera, FileText, Building } from "lucide-react";

export function UseCaseSection() {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.use-case-card').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="w-full py-12 md:py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-invisaDark/50 to-muted/10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-invisaDark to-transparent pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block">
              <span className="group px-4 py-1.5 text-xs md:text-sm rounded-full bg-invisaPurple/20 text-invisaPurple font-medium hover:bg-invisaPurple/30 transition-all duration-300 cursor-pointer">
                Who Uses InvisaInk
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-invisaPurple/90 pb-2">
              Protection for Everyone Who Creates
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              InvisaInk protects visual content across industries and use cases.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          <Card className="use-case-card opacity-0 transform transition-all duration-500 backdrop-blur-sm border-muted overflow-hidden hover:shadow-lg hover:shadow-invisaPurple/10 hover:border-invisaPurple/30 hover:-translate-y-1 group relative" style={{transform: 'translateY(20px)'}}>
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-invisaBlue to-invisaPurple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-gradient-to-br from-invisaPurple/20 to-invisaPurple/5 group-hover:from-invisaPurple/30 group-hover:to-invisaPurple/10 transition-all duration-300">
                  <Palette className="h-5 w-5 text-invisaPurple" />
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:from-white group-hover:to-invisaPurple transition-colors duration-300">
                  Artists & Designers
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Protect your unique art style and visual creations from being copied or used in AI training without permission.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-card/50 border-invisaPurple/20 text-invisaPurple/80 group-hover:border-invisaPurple/40 group-hover:text-invisaPurple transition-colors duration-300">Style Protection</Badge>
              <Badge variant="outline" className="bg-card/50 border-invisaPurple/20 text-invisaPurple/80 group-hover:border-invisaPurple/40 group-hover:text-invisaPurple transition-colors duration-300">Portfolio Safeguard</Badge>
            </CardFooter>
          </Card>

          <Card className="use-case-card opacity-0 transform transition-all duration-500 backdrop-blur-sm border-muted overflow-hidden hover:shadow-lg hover:shadow-invisaPurple/10 hover:border-invisaPurple/30 hover:-translate-y-1 group relative" style={{transform: 'translateY(20px)'}}>
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-invisaBlue to-invisaPurple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-gradient-to-br from-invisaPurple/20 to-invisaPurple/5 group-hover:from-invisaPurple/30 group-hover:to-invisaPurple/10 transition-all duration-300">
                  <Camera className="h-5 w-5 text-invisaPurple" />
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:from-white group-hover:to-invisaPurple transition-colors duration-300">
                  Photographers
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Shield your visual compositions and professional work from unauthorized AI analysis and reproduction.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-card/50 border-invisaPurple/20 text-invisaPurple/80 group-hover:border-invisaPurple/40 group-hover:text-invisaPurple transition-colors duration-300">Image Protection</Badge>
              <Badge variant="outline" className="bg-card/50 border-invisaPurple/20 text-invisaPurple/80 group-hover:border-invisaPurple/40 group-hover:text-invisaPurple transition-colors duration-300">Metadata Tagging</Badge>
            </CardFooter>
          </Card>

          <Card className="use-case-card opacity-0 transform transition-all duration-500 backdrop-blur-sm border-muted overflow-hidden hover:shadow-lg hover:shadow-invisaPurple/10 hover:border-invisaPurple/30 hover:-translate-y-1 group relative" style={{transform: 'translateY(20px)'}}>
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-invisaBlue to-invisaPurple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-gradient-to-br from-invisaPurple/20 to-invisaPurple/5 group-hover:from-invisaPurple/30 group-hover:to-invisaPurple/10 transition-all duration-300">
                  <FileText className="h-5 w-5 text-invisaPurple" />
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:from-white group-hover:to-invisaPurple transition-colors duration-300">
                  Journalists & Activists
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Safeguard sensitive footage and documentary evidence from deepfake manipulation and misrepresentation.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-card/50 border-invisaPurple/20 text-invisaPurple/80 group-hover:border-invisaPurple/40 group-hover:text-invisaPurple transition-colors duration-300">Video Security</Badge>
              <Badge variant="outline" className="bg-card/50 border-invisaPurple/20 text-invisaPurple/80 group-hover:border-invisaPurple/40 group-hover:text-invisaPurple transition-colors duration-300">Anti-Deepfake</Badge>
            </CardFooter>
          </Card>

          <Card className="use-case-card opacity-0 transform transition-all duration-500 backdrop-blur-sm border-muted overflow-hidden hover:shadow-lg hover:shadow-invisaPurple/10 hover:border-invisaPurple/30 hover:-translate-y-1 group relative" style={{transform: 'translateY(20px)'}}>
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-invisaBlue to-invisaPurple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-gradient-to-br from-invisaPurple/20 to-invisaPurple/5 group-hover:from-invisaPurple/30 group-hover:to-invisaPurple/10 transition-all duration-300">
                  <Building className="h-5 w-5 text-invisaPurple" />
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:from-white group-hover:to-invisaPurple transition-colors duration-300">
                  Enterprises
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Defend branded visuals against AI-powered impersonation scams and unauthorized commercial use.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-card/50 border-invisaPurple/20 text-invisaPurple/80 group-hover:border-invisaPurple/40 group-hover:text-invisaPurple transition-colors duration-300">Brand Protection</Badge>
              <Badge variant="outline" className="bg-card/50 border-invisaPurple/20 text-invisaPurple/80 group-hover:border-invisaPurple/40 group-hover:text-invisaPurple transition-colors duration-300">Legal Compliance</Badge>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
