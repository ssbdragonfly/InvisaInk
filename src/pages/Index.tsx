
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { ProtectionDemo } from "@/components/ProtectionDemo";
import { UseCaseSection } from "@/components/UseCaseSection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ProcessExplainer } from "@/components/ProcessExplainer";
import { WatermarkExplainer } from "@/components/WatermarkExplainer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.9) {
          el.classList.add('visible');
        }
      });
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-invisaDark relative">
      <AnimatedBackground variant="subtle" />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <ProcessExplainer />
        <WatermarkExplainer />
        <ProtectionDemo />
        <UseCaseSection />
        <TestimonialsSection />
      </main>
      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          
          .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .feature-card.visible {
            opacity: 1;
            transform: translateY(0);
          }

          @keyframes shield-rotate {
            0% {
              transform: rotate(0deg) scale(1);
            }
            50% {
              transform: rotate(10deg) scale(1.05);
            }
            100% {
              transform: rotate(0deg) scale(1);
            }
          }

          @keyframes scanning {
            0% {
              transform: translateY(-100%);
              opacity: 0.7;
            }
            100% {
              transform: translateY(100%);
              opacity: 0;
            }
          }

          @keyframes pulse-subtle {
            0% {
              opacity: 0.5;
              transform: scale(0.98);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.03);
            }
            100% {
              opacity: 0.5;
              transform: scale(0.98);
            }
          }

          @keyframes gradient-shift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animate-shield-rotate {
            animation: shield-rotate 3s ease-in-out infinite;
          }

          .animate-scanning {
            animation: scanning 3s linear infinite;
          }

          .animate-pulse-subtle {
            animation: pulse-subtle 6s ease-in-out infinite;
          }

          .animate-gradient-shift {
            animation: gradient-shift 8s ease-in-out infinite;
          }

          .bg-grid-pattern {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          }

          .bg-radial-gradient {
            background-image: radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
          }

          .bg-conic-gradient {
            background: conic-gradient(
              from 0deg at 50% 50%,
              #33C3F0 0%,
              #8B5CF6 25%,
              #EC4899 50%,
              #F97316 75%,
              #33C3F0 100%
            );
          }

          .bg-grid-white_5 {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `
      }} />
    </div>
  );
};
export default Index;
