
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProtectionTechnology } from "@/components/ProtectionTechnology";
import { ProcessExplainer } from "@/components/ProcessExplainer";
import { ProtectionComparison } from "@/components/ProtectionComparison";
import { FAQSection } from "@/components/FAQSection";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col bg-invisaDark">
      <Header />
      <main className="flex-1">
        <ProtectionTechnology />
        <ProcessExplainer />
        <ProtectionComparison />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
