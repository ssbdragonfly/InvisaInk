
import * as React from "react";
import { Star, Quote, Shield } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "InvisaInk has been a game-changer for my photography business. I can share my work online without worrying about AI companies using it without permission.",
      author: "Sarah Chen",
      title: "Professional Photographer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
      stars: 5
    },
    {
      quote: "As a digital artist, I was constantly finding my style being copied by AI. With InvisaInk, my artwork remains uniquely mine and protected from AI training.",
      author: "Marcus Johnson",
      title: "Digital Artist & Illustrator",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=faces",
      stars: 5
    },
    {
      quote: "Our media company needed a solution for protecting video content from deepfake creation. InvisaInk's video protection has been incredibly effective.",
      author: "Elena Rodriguez",
      title: "Media Production Director",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
      stars: 4
    },
    {
      quote: "The watermarking feature gives me peace of mind knowing there's proof that I'm the original creator of my work. Simple yet effective protection.",
      author: "David Park",
      title: "Freelance Content Creator",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
      stars: 5
    }
  ];

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.testimonials-section').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-16 md:py-24 testimonials-section opacity-0 transform transition-all duration-700" style={{transform: 'translateY(20px)'}}>
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <div className="inline-block">
            <span className="group px-4 py-1.5 text-xs md:text-sm rounded-full bg-gradient-to-r from-invisaPurple/20 to-invisaPurple/10 text-invisaPurple font-medium hover:from-invisaPurple/30 hover:to-invisaPurple/20 transition-all duration-300 cursor-pointer">
              Customer Stories
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-invisaPurple/90">Creators Trust InvisaInk</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what content creators and businesses are saying about our protection technology
          </p>
        </div>

        <div className="mx-auto max-w-5xl relative">
          {/* Background glow */}
          <div className="absolute -inset-10 bg-conic-gradient opacity-5 blur-3xl rounded-full"></div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-6 bg-gradient-to-br from-card/60 to-muted/30 backdrop-blur-sm border rounded-xl h-full flex flex-col hover:shadow-lg hover:shadow-invisaBlue/10 hover:border-invisaBlue/20 transform transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-4 flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full overflow-hidden w-12 h-12 border bg-gradient-to-br from-invisaBlue/10 to-invisaPurple/10 p-0.5">
                          <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                          <h4 className="font-medium">{testimonial.author}</h4>
                          <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 relative">
                      <Quote className="absolute text-muted/10 h-8 w-8 top-0 left-0 -translate-x-2 -translate-y-2" />
                      <p className="text-muted-foreground relative z-10 italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-muted flex items-center">
                      <div className="flex items-center gap-1 bg-gradient-to-r from-invisaBlue/20 to-invisaPurple/20 text-invisaBlue text-xs rounded-full px-2 py-1">
                        <Shield className="h-3 w-3" /> Protected User
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative h-8 w-8 inset-0 translate-x-0 translate-y-0 bg-card/60 backdrop-blur-sm hover:bg-card border border-muted hover:border-invisaBlue/30 transition-all duration-300" />
              <CarouselNext className="relative h-8 w-8 inset-0 translate-x-0 translate-y-0 bg-card/60 backdrop-blur-sm hover:bg-card border border-muted hover:border-invisaBlue/30 transition-all duration-300" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-1 text-sm bg-gradient-to-r from-card/60 to-muted/30 backdrop-blur-sm border border-muted px-4 py-2 rounded-full">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="font-medium">4.9/5</span> based on <span className="font-medium">230+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
