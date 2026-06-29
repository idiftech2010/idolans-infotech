import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const TIERS = [
  {
    name: "Growth",
    price: "Custom",
    description: "For mid-sized institutions ready to digitize their workflows.",
    features: ["Core modules access", "Standard support", "Daily backups", "Up to 1,000 users"],
    highlighted: false
  },
  {
    name: "Enterprise",
    price: "Volume",
    description: "Full-suite access with dedicated infrastructure and SLA.",
    features: ["All modules & APIs", "24/7 Priority support", "Real-time replication", "Unlimited users", "Custom deployment"],
    highlighted: true
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Scale</h2>
          <p className="text-muted-foreground text-lg">
            We don't believe in nickel-and-diming. Our enterprise models are built to scale with your institution without unpredictable spikes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className={`relative h-full flex flex-col ${tier.highlighted ? "border-primary shadow-2xl shadow-primary/10" : "border-border/50"}`}>
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4 mt-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full h-12 text-lg" 
                    variant={tier.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <a href="#request-demo">Contact Sales</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
