
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How does InvisaInk actually protect my content from AI?",
      answer: "InvisaInk applies specially designed, imperceptible adversarial patterns to your images and videos that specifically target and disrupt AI model interpretation. These patterns exploit vulnerabilities in how AI processes visual data, causing misclassification or confusion while remaining invisible to human viewers."
    },
    {
      question: "Will the protection affect how my content looks?",
      answer: "No. InvisaInk's protection is designed to be imperceptible to humans. The pixel-level changes we apply are calculated precisely to target AI systems while staying below the threshold of human perception, preserving the visual quality and artistic integrity of your content."
    },
    {
      question: "How effective is InvisaInk against different AI models?",
      answer: "InvisaInk is effective against a wide range of AI models including convolutional neural networks (CNNs), vision transformers, and diffusion models used in generative AI. Our protection is regularly tested against leading commercial AI systems and updated to maintain effectiveness as AI technology evolves."
    },
    {
      question: "Does the protection work for all types of images and videos?",
      answer: "Yes, InvisaInk works effectively for photographs, digital art, illustrations, paintings, and videos of all common formats. The protection is optimized based on the specific characteristics of your content for maximum effectiveness."
    },
    {
      question: "How long does the protection last?",
      answer: "The protection is permanent and embedded directly into the pixel data of your content. We also provide free protection updates if advancements in AI begin to reduce effectiveness. These updates are applied automatically for content registered with our blockchain provenance system."
    },
    {
      question: "What makes InvisaInk better than using watermarks or metadata?",
      answer: "Traditional watermarks visibly alter your content and can be removed by AI systems. Metadata can be easily stripped when content is uploaded to social platforms. InvisaInk's protection works at the pixel level, is invisible to humans, and remains effective even after content is shared, resized, or moderately edited."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about InvisaInk's protection technology
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted">
                <AccordionTrigger className="text-lg font-medium hover:text-invisaBlue transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground py-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 bg-gradient-to-r from-invisaBlue/20 to-invisaPurple/20 p-8 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Our team of protection experts is ready to help you understand how InvisaInk can safeguard your specific content needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="px-4 py-2 bg-invisaBlue rounded-md font-medium text-white hover:bg-opacity-90 transition-colors">
              Contact Support
            </a>
            <a href="#" className="px-4 py-2 bg-muted/30 border border-muted rounded-md font-medium hover:bg-muted/50 transition-colors">
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
