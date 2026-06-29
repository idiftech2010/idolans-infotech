import React, { useState } from "react";
import { Link } from "wouter";
import { ArrowUp, Mail, MessageCircle, Phone, MapPin, SendHorizontal, X } from "lucide-react";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
};

const chatTopics = [
  { label: "Products", value: "products" },
  { label: "Services", value: "services" },
  { label: "Pricing", value: "pricing" },
  { label: "About us", value: "about" },
  { label: "Support", value: "support" },
];

const productOptions = [
  { label: "SCHOLARLY", value: "SCHOLARLY" },
  { label: "ApexCare HMS", value: "ApexCare HMS" },
  { label: "EduAI", value: "EduAI" },
  { label: "Integritest", value: "Integritest" },
  { label: "Idolans Services", value: "Idolans Services" },
];

export function Footer() {
  const footerFont = { fontFamily: '"Cormorant Garamond", serif' };
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [draft, setDraft] = useState("");
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
    setShowProducts(false);
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
    let response = "";

    switch (option.value) {
      case "products":
        response = "Idolans Info-Tech offers a complete product suite for education, healthcare, and enterprise operations, including SCHOLARLY, ApexCare HMS, EduAI, Integratest, and Idolans Services.";
        setShowProducts(true);
        break;
      case "services":
        response = "We provide implementation, training, integration, support, and digital transformation consulting so your team can adopt and scale with confidence.";
        setShowProducts(false);
        break;
      case "pricing":
        response = "Pricing is tailored to your size, deployment model, and scope of use. We recommend a discovery conversation so we can propose the right package for your goals.";
        setShowProducts(false);
        break;
      case "about":
        response = "We build intelligent, secure, and future-ready digital platforms for ambitious schools, hospitals, and organizations that need better operations and better experiences.";
        setShowProducts(false);
        break;
      case "support":
        response = "Our support team helps with onboarding, technical guidance, optimization, and ongoing care so your systems stay reliable and effective.";
        setShowProducts(false);
        break;
      default:
        response = `Thanks for your interest in ${option.label}. We can walk you through the product fit, capabilities, and next steps in a conversational way.`;
        setShowProducts(false);
        break;
    }

    setMessages((prev) => {
      const next = [
        ...prev,
        { id: prev.length + 1, role: "user", text: option.label },
        { id: prev.length + 2, role: "bot", text: response },
      ];
      return next;
    });
  };

  const handleSendMessage = () => {
    const trimmed = draft.trim();

    if (!trimmed) {
      return;
    }

    const lower = trimmed.toLowerCase();
    let response = "";

    if (lower.includes("product") || lower.includes("products")) {
      response = "We offer SCHOLARLY, ApexCare HMS, EduAI, Integratest, and Idolans Services, each designed for different needs across education, healthcare, and enterprise operations.";
      setShowProducts(true);
    } else if (lower.includes("price") || lower.includes("pricing")) {
      response = "Pricing depends on your size, deployment model, and scope of use. We can tailor the right package after a short discovery conversation.";
      setShowProducts(false);
    } else if (lower.includes("service") || lower.includes("services")) {
      response = "We support implementation, system integration, training, support, and digital transformation consulting to help you deploy confidently.";
      setShowProducts(false);
    } else if (lower.includes("about") || lower.includes("company")) {
      response = "Idolans Info-Tech builds secure, intelligent digital platforms for schools, hospitals, and ambitious organizations that want better operational performance.";
      setShowProducts(false);
    } else if (lower.includes("demo") || lower.includes("schedule")) {
      response = "We would be happy to arrange a tailored demo. Share a bit more about your goals and we can guide the next steps.";
      setShowProducts(false);
    } else {
      response = "Thanks for reaching out. I can help with product details, services, pricing, implementation, or support. If you tell me what you need, I can guide you further.";
      setShowProducts(false);
    }

    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, role: "user", text: trimmed },
      { id: prev.length + 2, role: "bot", text: response },
    ]);
    setDraft("");
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
        <div className="fixed bottom-40 right-6 z-[60] w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white shadow-2xl backdrop-blur">
          <div className="flex items-center justify-end border-b border-slate-200 p-3">
            <button
              onClick={() => setIsChatOpen(false)}
              className="rounded-full p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close inquiry chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[380px] space-y-3 overflow-y-auto bg-white p-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 shadow-sm ${message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-slate-100 text-slate-800"}`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <p className="mb-2 font-medium">Ask about anything we offer.</p>
              <div className="flex flex-wrap gap-2">
                {(showProducts ? productOptions : chatTopics).map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleOptionSelect(option)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white p-3">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
              <button
                onClick={handleSendMessage}
                className="rounded-full bg-primary p-2 text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label="Send message"
              >
                <SendHorizontal className="h-4 w-4" />
              </button>
            </div>
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
                  <a href="tel:+2348125191913" className="hover:text-white transition-colors">+234 812 519 1913</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:info@idiftech.com" className="hover:text-white transition-colors">info@idiftech.com</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white uppercase tracking-[0.2em] text-sm" style={footerFont}>Products</h4>
              <ul className="space-y-1.5">
                <li><Link href="/products/scholarly" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>SCHOLARLY</Link></li>
                <li><Link href="/products/apexcare" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>ApexCare HMS</Link></li>
                <li><Link href="/products/eduai" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>EduAI</Link></li>
                <li><Link href="/products/integritest" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Integritest</Link></li>
                <li><Link href="/products/idolans-services" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Idolans Services</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white uppercase tracking-[0.2em] text-sm" style={footerFont}>Company</h4>
              <ul className="space-y-1.5">
                <li><Link href="/about" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>About Us</Link></li>
                <li><Link href="/careers" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Careers</Link></li>
                <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Blog</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white uppercase tracking-[0.2em] text-sm" style={footerFont}>Legal</h4>
              <ul className="space-y-1.5">
                <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Terms of Service</Link></li>
                <li><Link href="/sla" className="text-white/70 hover:text-white transition-colors leading-5 text-sm" style={footerFont}>Service Level Agreement</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60" style={footerFont}>
              © {new Date().getFullYear()} Idolans Info-Tech. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/idiftech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors"
                style={footerFont}
                aria-label="Visit Idiftech on LinkedIn"
              >
                In
              </a>
              <a
                href="https://x.com/idiftech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors"
                style={footerFont}
                aria-label="Visit Idiftech on X"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
