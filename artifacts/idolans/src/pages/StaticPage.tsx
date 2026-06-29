import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export interface StaticPageSection {
  title: string;
  body: string;
  bullets?: string[];
}

export interface StaticPageContent {
  title: string;
  summary: string;
  sections: StaticPageSection[];
  cta?: {
    label: string;
    href: string;
    description?: string;
  };
}

export default function StaticPage({ title, summary, sections, cta }: StaticPageContent) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-1 w-full pt-16 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_28%)] bg-background text-foreground">
        <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:px-8 lg:px-10 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/85 shadow-[0_25px_80px_-24px_rgba(15,23,42,0.25)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/80"
        >
          <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-10 lg:p-12">
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                Idolans Info-Tech
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                {summary}
              </p>

              {cta ? (
                <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-800/70 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Ready to talk?</p>
                    {cta.description ? (
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{cta.description}</p>
                    ) : null}
                  </div>
                  <Link
                    href={cta.href}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {cta.label}
                  </Link>
                </div>
              ) : null}
            </div>

            <div className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50/80 p-6 dark:border-slate-700/70 dark:bg-slate-800/70">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why it matters</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-3xl font-semibold text-slate-900 dark:text-white">Built for impact</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Every page is designed to communicate clearly, build trust, and guide visitors toward the right next step.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900/70">
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">Secure</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Trust-first design and dependable delivery.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900/70">
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">Scalable</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Built to grow with your organization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.5rem] border border-slate-200/70 bg-white/85 p-7 shadow-sm backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70"
            >
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{section.body}</p>
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="rounded-[1.75rem] border border-slate-200/70 bg-white/85 p-8 shadow-sm backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why choose us</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                A thoughtful partner for growth, trust, and execution.
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                We combine strategic clarity, technical depth, and hands-on support so your team can move forward with confidence and lasting value.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Clarity", "We simplify complex challenges into practical, measurable progress."],
                ["Delivery", "We build with rigor, accountability, and a strong implementation mindset."],
                ["Support", "We stay close after launch so your systems keep performing well."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                  <p className="font-semibold text-slate-900 dark:text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
