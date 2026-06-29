import React from "react";
import { motion } from "framer-motion";

export function Trust() {
  return (
    <section className="py-20 border-y border-border/40 bg-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">10M+</div>
            <div className="text-sm md:text-base text-muted-foreground">Patient Records Managed</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">99.99%</div>
            <div className="text-sm md:text-base text-muted-foreground">Platform Uptime</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">15+</div>
            <div className="text-sm md:text-base text-muted-foreground">Countries Deployed</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">50k+</div>
            <div className="text-sm md:text-base text-muted-foreground">Daily Active Users</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
