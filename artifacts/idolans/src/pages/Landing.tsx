import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Features } from "@/components/features";
import { Trust } from "@/components/trust";
import { Pricing } from "@/components/pricing";
import { LeadCapture } from "@/components/lead-capture";
import { Footer } from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-1 w-full pt-16">
        <Hero />
        <Products />
        <Features />
        <Trust />
        <Pricing />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
