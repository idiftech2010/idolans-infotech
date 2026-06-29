import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useCreateLead } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  schoolName: z.string().optional(),
  facilitySize: z.string().optional(),
  appCategory: z.enum([
    "SCHOLARLY",
    "ApexCare HMS",
    "EduAI",
    "Integritest",
    "Idolans Services",
    "General"
  ]),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadCapture() {
  const { toast } = useToast();
  const { mutate: createLead, isPending } = useCreateLead();

  const storedProduct = typeof window !== "undefined" ? window.sessionStorage.getItem("inquiry-product") : null;
  const defaultProduct = storedProduct === "SCHOLARLY" || storedProduct === "ApexCare HMS" || storedProduct === "EduAI" || storedProduct === "Integritest" || storedProduct === "Idolans Services" || storedProduct === "General"
    ? (storedProduct as FormValues["appCategory"])
    : "General";

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      schoolName: "",
      facilitySize: "",
      appCategory: defaultProduct,
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    createLead({ data }, {
      onSuccess: () => {
        toast({
          title: "Demo Request Received",
          description: "Our team will reach out to you shortly to schedule your personalized demo.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your request. Please try again.",
          variant: "destructive"
        });
      }
    });
  }

  return (
    <section id="request-demo" className="py-24 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 bg-primary/5" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Transform Your Institution?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of top-tier schools, hospitals, and enterprises leveraging Idolans Info-Tech to power their future.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-foreground font-medium">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">1</div>
                Personalized walkthrough of your chosen platform
              </li>
              <li className="flex items-center gap-3 text-foreground font-medium">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">2</div>
                Custom deployment architecture review
              </li>
              <li className="flex items-center gap-3 text-foreground font-medium">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">3</div>
                Clear pricing and SLA commitments
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 shadow-2xl border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@institution.edu" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="schoolName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institution / Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Academy" {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="appCategory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a product" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="SCHOLARLY">SCHOLARLY</SelectItem>
                            <SelectItem value="ApexCare HMS">ApexCare HMS</SelectItem>
                            <SelectItem value="EduAI">EduAI</SelectItem>
                            <SelectItem value="Integritest">Integritest</SelectItem>
                            <SelectItem value="Idolans Services">Idolans Services</SelectItem>
                            <SelectItem value="General">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="facilitySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Size (Users/Patients)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 500-1000" {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your current challenges..."
                          className="resize-none h-24"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-12 text-lg mt-4" disabled={isPending}>
                  {isPending ? "Submitting..." : "Schedule Demo"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
