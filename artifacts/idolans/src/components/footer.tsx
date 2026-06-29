import React, { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUp, Mail, MessageCircle, Phone, MapPin, X } from "lucide-react";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
};

const inquiryOptions = [
  { label: "SCHOLARLY", value: "SCHOLARLY" },
  { label: "ApexCare HMS", value: "ApexCare HMS" },
  { label: "EduAI", value: "EduAI" },
  { label: "Integritest", value: "Integritest" },
  { label: "Idolans Services", value: "Idolans Services" },
  { label: "General Inquiry", value: "General" },
];

export function Footer() {
  const footerFont = { fontFamily: '"Cormorant Garamond", serif' };
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      text: "Welcome to Idolans Info-Tech. How may I help you today?",
    },
  ]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetChat = () => {
    setSelectedProduct(null);
    setMessages([
      {
        id: 1,
        role: "bot",
        text: "Welcome to Idolans Info-Tech. How may I help you today?",
      },
    ]);
  };

  const openInquiry = () => {
    if (isChatOpen) {
      setIsChatOpen(false);
      return;
    }

    resetChat();
    setIsChatOpen(true);
  };

  const handleOptionSelect = (option: { label: string; value: string }) => {
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, role: "user", text: option.label },
      {
        id: prev.length + 2,
        role: "bot",
        text: `Thanks for your interest in ${option.label}. I can help you explore the right solution, compare features, or schedule a tailored demo.`,
      },
    ]);
    setSelectedProduct(option.value);
  };

  const continueInquiry = () => {
    if (selectedProduct && typeof window !== "undefined") {
      window.sessionStorage.setItem("inquiry-product", selectedProduct);
    }

    const target = document.getElementById("request-demo") ?? document.getElementById("contact");

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsChatOpen(false);
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <button
        onClick={openInquiry}
        className="fixed bottom-24 right-6 z-50 flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-3 text-sm font-medium text-primary shadow-lg transition-transform duration-300 hover:scale-105"
        aria-label="Open inquiry chat"
      >
        <MessageCircle className="h-5 w-5" />
        <span>Inquiry</span>
      </button>

      {isChatOpen && (
        <div className="fixed bottom-40 right-6 z-[60] w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
          <div className="flex items-start justify-between border-b border-slate-200 p-4 dark:border-slate-700">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Welcome to Idolans Info-Tech</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">How may I help you today?</p>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="rounded-full p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              aria-label="Close inquiry chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[360px] space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 shadow-sm ${message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100"}`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {!selectedProduct && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <p className="mb-2 font-medium">Choose a product to continue.</p>
                <div className="flex flex-wrap gap-2">
                  {inquiryOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleOptionSelect(option)}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 transition-colors hover:border-primary/40 hover:text-primary dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedProduct && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <p className="mb-2 font-medium">I can help with your selected product.</p>
                <button
                  onClick={continueInquiry}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Continue to inquiry form
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="bg-slate-950 text-white border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center overflow-hidden">
                  <img src="/logo.png" alt="Idolans Info-Tech" className="h-full w-full object-contain p-1" />
                </div>
                <span className="font-semibold text-xl tracking-[0.2em] uppercase text-white" style={footerFont}>
                  Idolans Info-Tech
                </span>
              </Link>
              <p className="text-white/75 mb-4 max-w-sm leading-5 text-sm" style={footerFont}>
                Building the digital infrastructure for Africa's most ambitious schools, hospitals, and enterprises.
              </p>
              <div className="space-y-2 text-sm text-white/75" style={footerFont}>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>12, Herbert Macaulay Way, Abuja, Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+2348140000000" className="hover:text-white transition-colors">+234 814 000 0000</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:hello@idolans.com" className="hover:text-white transition-colors">hello@idolans.com</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white uppercase tracking-[0.2em] text-sm" style={footerFont}>Products</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>SCHOLARLY</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>ApexCare HMS</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>EduAI</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Integritest</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>App Engine</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white uppercase tracking-[0.2em] text-sm" style={footerFont}>Company</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>About Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Careers</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Blog</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white uppercase tracking-[0.2em] text-sm" style={footerFont}>Legal</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Privacy Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Terms of Service</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Service Level Agreement</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60" style={footerFont}>
              © {new Date().getFullYear()} Idolans Info-Tech. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors" style={footerFont}>
                In
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors" style={footerFont}>
                X
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
