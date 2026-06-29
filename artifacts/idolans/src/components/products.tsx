import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PRODUCT_CATALOG } from "@/data/products";

const PRODUCTS = PRODUCT_CATALOG.map((product) => ({
  ...product,
  color: product.id === "scholarly" ? "text-blue-500" : product.id === "apexcare" ? "text-emerald-500" : product.id === "eduai" ? "text-purple-500" : product.id === "integritest" ? "text-red-500" : "text-amber-500",
  bg: product.id === "scholarly" ? "bg-blue-500/10" : product.id === "apexcare" ? "bg-emerald-500/10" : product.id === "eduai" ? "bg-purple-500/10" : product.id === "integritest" ? "bg-red-500/10" : "bg-amber-500/10",
  border: product.id === "scholarly" ? "group-hover:border-blue-500/50" : product.id === "apexcare" ? "group-hover:border-emerald-500/50" : product.id === "eduai" ? "group-hover:border-purple-500/50" : product.id === "integritest" ? "group-hover:border-red-500/50" : "group-hover:border-amber-500/50",
  shadow: product.id === "scholarly" ? "group-hover:shadow-blue-500/20" : product.id === "apexcare" ? "group-hover:shadow-emerald-500/20" : product.id === "eduai" ? "group-hover:shadow-purple-500/20" : product.id === "integritest" ? "group-hover:shadow-red-500/20" : "group-hover:shadow-amber-500/20"
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Products() {
  return (
    <section id="products" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">The Suite</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Engineered for Excellence</h3>
          <p className="text-muted-foreground text-lg">
            Four specialized platforms and a full professional services division — built on a unified foundation of security, performance, and intuitive design.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PRODUCTS.map((product, idx) => (
            <motion.div key={product.id} variants={itemVariants} className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
              <Card className={`group h-full bg-background border-border/50 transition-all duration-500 hover:shadow-xl ${product.border} ${product.shadow}`}>
                <CardContent className="p-8 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl ${product.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                    <product.icon className={`w-7 h-7 ${product.color}`} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                  <p className={`text-sm font-medium ${product.color} mb-4`}>{product.tagline}</p>
                  <p className="text-muted-foreground mb-6 flex-1">
                    {product.description}
                  </p>
                  {"subItems" in product && product.subItems && (
                    <ul className="mb-6 space-y-1.5">
                      {product.subItems.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full ${product.bg} border ${product.color.replace("text-", "border-")}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button asChild variant="ghost" className="w-full justify-between group/btn hover:bg-transparent hover:text-foreground p-0 h-auto font-semibold">
                    <Link href={`/products/${product.slug}`}>
                      Explore Platform
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
