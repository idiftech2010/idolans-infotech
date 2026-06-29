import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/Landing";
import ProductPage from "@/pages/ProductPage";
import StaticPage from "@/pages/StaticPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/about" component={() => <StaticPage title="About Us" summary="Idolans Info-Tech builds secure, elegant digital platforms for organizations that need operational clarity, better service delivery, and a strong technology foundation." sections={[{ title: "Our mission", body: "We help schools, hospitals, and enterprises modernize their operations with thoughtful software, reliable delivery, and long-term support." }, { title: "What we believe", body: "Technology should raise performance without creating unnecessary complexity. We design with simplicity, trust, and measurable impact in mind." }, { title: "How we work", body: "We combine strategy, engineering, and implementation expertise so every solution is practical, secure, and ready to scale." }]} />} />
      <Route path="/careers" component={() => <StaticPage title="Careers" summary="Join a team building impactful technology for mission-driven institutions across education, healthcare, and enterprise." sections={[{ title: "Why join us", body: "We work on products that matter, solve real-world problems, and improve the way people operate every day." }, { title: "What we value", body: "Curiosity, craftsmanship, accountability, and a strong sense of service guide the way we build and support our work." }, { title: "Current opportunities", body: "We welcome engineers, product designers, project leaders, and domain specialists who want to shape the next generation of digital services." }]} />} />
      <Route path="/blog" component={() => <StaticPage title="Blog" summary="Insights on digital transformation, secure operations, product strategy, and practical guidance for modern organizations." sections={[{ title: "What you'll find", body: "Thoughtful articles on technology adoption, implementation best practices, and the future of digital operations." }, { title: "Our perspective", body: "We write with a practical lens, focusing on what leaders and teams need to know to move forward with confidence." }, { title: "Stay connected", body: "Subscribe to our updates to receive trends, case studies, and implementation insights directly from our team." }]} />} />
      <Route path="/contact" component={() => <StaticPage title="Contact" summary="We are ready to discuss your goals, answer questions, and recommend the right solution for your organization." sections={[{ title:"Reach us", body:"Email us at hello@idolans.com or call +234 814 000 0000. We respond quickly and are happy to arrange a discovery conversation." }, { title:"Visit", body:"Our team is based in Abuja, Nigeria, and supports clients across the continent and beyond." }]} cta={{ label: "Book a discovery call", href: "/", description: "Share your goals and we will help you choose the best pathway forward." }} />} />
      <Route path="/privacy" component={() => <StaticPage title="Privacy Policy" summary="We handle personal data responsibly and align our practices with modern privacy expectations and trust requirements." sections={[{ title:"Data we collect", body:"We may collect contact, product interest, and service-related information when you engage with our team." }, { title:"How we use it", body:"We use your information to respond to your questions, support your requests, and improve our products and services." }, { title:"Your rights", body:"You can ask to access, correct, or delete your information where applicable, and we will respond in line with applicable law." }]} />} />
      <Route path="/terms" component={() => <StaticPage title="Terms of Service" summary="These terms define how you may use our website, products, and services and how we support your engagement with Idolans Info-Tech." sections={[{ title:"Use of our services", body:"You agree to use our platforms and communications responsibly, lawfully, and in a manner that respects the rights of others." }, { title:"Service expectations", body:"We strive to provide dependable support and transparent communication, while acknowledging that delivery depends on scope, timelines, and agreed terms." }, { title:"Changes", body:"We may update these terms over time to reflect legal, operational, or product changes." }]} />} />
      <Route path="/sla" component={() => <StaticPage title="Service Level Agreement" summary="Our service commitments are designed to provide dependable support, clear response expectations, and a strong partnership foundation." sections={[{ title:"Support commitment", body:"We provide structured support for implementation, maintenance, and issue resolution according to agreed scope and service levels." }, { title:"Response expectations", body:"Critical issues receive priority handling, while standard requests are addressed within agreed timeframes based on the engagement." }, { title:"Continuous improvement", body:"We review service outcomes regularly and work with clients to refine support quality and operational reliability." }]} />} />
      <Route path="/products/:slug" component={ProductPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
