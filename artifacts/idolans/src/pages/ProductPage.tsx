import React from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getProductBySlug } from "@/data/products";
import { Button } from "@/components/ui/button";

export default function ProductPage() {
  const [location] = useLocation();
  const slug = location.split("/").filter(Boolean).pop();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="container mx-auto px-6 py-24">
          <div className="max-w-2xl rounded-3xl border border-border/60 bg-card/70 p-10 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Product not found</p>
            <h1 className="mt-4 text-4xl font-semibold">This product experience is not available yet.</h1>
            <p className="mt-4 text-muted-foreground">Return to the suite and choose a product to explore.</p>
            <Button asChild className="mt-8">
              <Link href="/">Return home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/40 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_45%)]">
          <div className={`absolute inset-0 bg-gradient-to-br ${product.heroAccent} opacity-80`} />
          <div className="container relative mx-auto grid gap-10 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/90 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                {product.label}
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/80">
                {product.tagline}
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                {product.overview}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-white/90">
                  <Link href="#contact">{product.ctaLabel}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <Link href="/">Back to suite</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[2rem] border border-white/15 bg-slate-950/70 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/70">Signature experience</p>
                  <p className="mt-1 text-xl font-semibold text-white">{product.description}</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <Icon className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {product.outcomes.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-white/65">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Why it matters</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Designed for teams that want performance, beauty, and trust.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {product.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {product.highlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-border/50 bg-card/70 p-7 shadow-sm">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border/40 bg-card/40 py-20">
          <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Best for</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Built to support ambitious teams and modern institutions.</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Whether you are scaling a school network, improving hospital operations, or launching a next-generation learning experience, this platform is tailored for impact.
              </p>
            </div>
            <div className="rounded-[2rem] border border-border/50 bg-background/70 p-8 shadow-lg">
              <ul className="grid gap-4 sm:grid-cols-2">
                {product.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-3 rounded-2xl border border-border/40 bg-card/60 p-4 text-sm text-muted-foreground">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-6 py-20">
          <div className="rounded-[2rem] border border-border/50 bg-gradient-to-br from-primary/10 via-card to-background p-10 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Let’s build something exceptional</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Ready to see how {product.name} can elevate your organization?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Schedule a tailored walkthrough and discover how Idolans Info-Tech can turn ambition into dependable digital infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/">Request a demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/#products">Explore the suite</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
