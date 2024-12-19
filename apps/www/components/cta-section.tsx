"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Timer, Users, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary/95 text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full rotate-12 bg-primary-foreground/5 transform" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full -rotate-12 bg-primary-foreground/5 transform" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <Badge
              variant="secondary"
              className="px-4 py-1 text-lg font-medium"
            >
              <Timer className="mr-2 h-4 w-4 animate-pulse" />
              Limited Time Offer
            </Badge>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Be Part of Something{" "}
            <span className="relative">
              Revolutionary
              <motion.div
                className="absolute -right-1 -top-1"
                initial={{ rotate: -20, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Sparkles className="h-6 w-6 text-yellow-300" />
              </motion.div>
            </span>
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Only 100 beta spots remaining. Join our exclusive group of early
            adopters and help shape the future of learning.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 relative group overflow-hidden"
              asChild
            >
              <Link href="/beta-signup">
                <span className="relative z-10 flex items-center">
                  Join Beta Access
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-secondary-foreground/10"
                  initial={false}
                  whileHover={{ scale: 1.5, x: 10 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </Button>

            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Users className="h-5 w-5" />
              <span className="text-sm">Joined by 1,000+ early adopters</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-sm text-primary-foreground/70"
          >
            Limited beta access. No credit card required.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
