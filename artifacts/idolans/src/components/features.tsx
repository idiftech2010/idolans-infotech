import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import scholarlyImg from "@/assets/images/scholarly.png";
import apexcareImg from "@/assets/images/apexcare.png";
import eduaiImg from "@/assets/images/eduai.png";
import integritestImg from "@/assets/images/integritest.png";
import servicesImg from "@/assets/images/services.png";

const FEATURES = {
  scholarly: {
    title: "Complete Institutional Control",
    image: scholarlyImg,
    stats: [
      { label: "Time Saved", value: "40%" },
      { label: "Automated", value: "Payroll" },
      { label: "Parent", value: "Portal" }
    ],
    highlights: ["Real-time attendance tracking", "Instant result generation", "Comprehensive fee management"]
  },
  apexcare: {
    title: "Clinical Precision & Flow",
    image: apexcareImg,
    stats: [
      { label: "Patient Wait", value: "-60%" },
      { label: "PACS", value: "Ready" },
      { label: "Billing", value: "Smart" }
    ],
    highlights: ["Unified Electronic Medical Records", "Integrated Radiology Viewer", "Intelligent queue management"]
  },
  eduai: {
    title: "Intelligence Augmented",
    image: eduaiImg,
    stats: [
      { label: "AI Grading", value: "10x" },
      { label: "Proctoring", value: "Active" },
      { label: "Classes", value: "Live" }
    ],
    highlights: ["Contextual smart summarizers", "Tab-switch detection & prevention", "Automated subjective grading"]
  },
  integritest: {
    title: "Zero-Trust Assessment",
    image: integritestImg,
    stats: [
      { label: "Uptime", value: "99.9%" },
      { label: "Biometric", value: "Auth" },
      { label: "Fraud", value: "0%" }
    ],
    highlights: ["Live biometric candidate verification", "Encrypted locked-browser environment", "Advanced CBT infrastructure"]
  },
  services: {
    title: "Expert-Led Professional Services",
    image: servicesImg,
    stats: [
      { label: "Disciplines", value: "5" },
      { label: "Mentorship", value: "Ph.D." },
      { label: "Certified", value: "Experts" }
    ],
    highlights: [
      "Custom web, mobile & hybrid software development",
      "Full-spectrum cybersecurity — Red Team, Blue Team & GRC compliance",
      "IT consultation, digital transformation & professional training programs",
      "Academic mentorship from B.Sc. to Ph.D. by industry-leading experts",
      "Industry certifications in cybersecurity and web development"
    ]
  }
};

export function Features() {
  const [activeTab, setActiveTab] = useState("scholarly");

  return (
    <section id="solutions" className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Deep-Dive Capabilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Go beyond the surface. Each platform and service division is packed with enterprise-grade features designed to solve specific industry bottlenecks.
          </p>
        </div>

        <Tabs defaultValue="scholarly" onValueChange={setActiveTab} className="w-full">
          <div className="flex overflow-x-auto pb-4 scrollbar-hide mb-8">
            <TabsList className="bg-card/50 border border-border/50 h-auto p-1">
              <TabsTrigger value="scholarly" className="py-3 px-6 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">SCHOLARLY</TabsTrigger>
              <TabsTrigger value="apexcare" className="py-3 px-6 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">ApexCare HMS</TabsTrigger>
              <TabsTrigger value="eduai" className="py-3 px-6 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">EduAI</TabsTrigger>
              <TabsTrigger value="integritest" className="py-3 px-6 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Integritest</TabsTrigger>
              <TabsTrigger value="services" className="py-3 px-6 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Idolans Services</TabsTrigger>
            </TabsList>
          </div>

          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {Object.entries(FEATURES).map(([key, data]) => (
                activeTab === key && (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid lg:grid-cols-2 gap-12 absolute inset-0 w-full"
                  >
                    <div className="flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-8">{data.title}</h3>
                      
                      <div className="space-y-6 mb-10">
                        {data.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <div className="mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-secondary">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <p className="text-lg text-foreground">{highlight}</p>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4 border-t border-border/50 pt-8">
                        {data.stats.map((stat, i) => (
                          <div key={i}>
                            <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                      <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
