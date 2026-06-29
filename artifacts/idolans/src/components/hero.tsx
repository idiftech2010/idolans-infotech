import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { PRODUCT_CATALOG } from "@/data/products";
import { Link } from "wouter";

const PRODUCTS = PRODUCT_CATALOG;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-[1.05fr_1.2fr] gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium dark:text-white mb-6">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Command Center for African Institutions
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight font-sans">
            The Future of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-in">Enterprise Software</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Idolans Info-Tech builds world-class digital infrastructure for schools, hospitals, and forward-thinking organizations. Precision, power, and seamless operations.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#products">
                Explore Suite
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-border/50 bg-background/50 backdrop-blur-sm">
              Request Demo
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-border/40">
            <div>
              <div className="text-3xl font-bold text-foreground">5</div>
              <div className="text-sm text-muted-foreground mt-1">Flagship Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">300+</div>
              <div className="text-sm text-muted-foreground mt-1">Institutions Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Dedicated Support</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[680px] flex items-center justify-center"
        >
          {/* Ambient Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${PRODUCTS[activeIndex].color} blur-3xl opacity-50 transition-colors duration-1000`} />
          
          {/* Floating Device Frame */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full max-w-[720px] aspect-[16/10] rounded-xl border border-border/50 bg-card/40 backdrop-blur-xl shadow-2xl overflow-hidden shadow-primary/5"
          >
            {/* Browser Chrome */}
            <div className="h-8 border-b border-border/50 bg-background/50 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="mx-auto text-xs text-muted-foreground font-mono flex items-center gap-2">
                idolans.com / {PRODUCTS[activeIndex].id}
              </div>
            </div>

            {/* Screen Content */}
            <div className="relative w-full h-[calc(100%-2rem)] bg-background">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={PRODUCTS[activeIndex].image}
                  alt={PRODUCTS[activeIndex].name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Product Selector Carousel */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex w-[min(92%,700px)] items-center justify-between gap-2 rounded-full border border-border/50 bg-background/80 p-2.5 shadow-lg backdrop-blur-md">
            {PRODUCTS.map((prod, idx) => (
              <Link
                key={prod.id}
                href={`/products/${prod.slug}`}
                className={`min-w-[110px] flex-1 px-4 py-2 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-300 text-center ${
                  idx === activeIndex 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/10"
                }`}
              >
                {prod.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
