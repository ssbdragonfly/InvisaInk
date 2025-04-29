
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIAdvisor } from "@/components/AIAdvisor";

const AIAdvisorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-invisaDark">
      <Header />
      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8 text-center">AI Protection Advisor</h1>
          <AIAdvisor />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIAdvisorPage;
