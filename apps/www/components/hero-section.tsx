"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "./navbar";

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="px-4 py-1 text-sm font-medium"
            >
              <Sparkles className="mr-1 h-3 w-3" />
              Limited Beta Access
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.2,
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl"
          >
            Be Among the First to Experience Our{" "}
            <span className="text-primary">Revolutionary Platform</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.4,
            }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
          >
            Join an exclusive group of early adopters shaping the future of
            learning. 
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
          >
            <Input
              placeholder="Enter your email"
              type="email"
              className="text-base"
            />
            <AnimatedButton
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Join the Beta
              <ArrowRight className="ml-2 h-4 w-4" />
            </AnimatedButton>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <Users className="h-4 w-4" />
            <span className="text-sm">
              Join 1,000+ early adopters already signed up
            </span>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="h-2 w-2 bg-green-500 rounded-full" />
              Early Access
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="h-2 w-2 bg-blue-500 rounded-full" />
              Priority Support
            </div>
            <div className="flex items-center justify-center gap-2 md:col-span-1 col-span-2">
              <span className="h-2 w-2 bg-purple-500 rounded-full" />
              Founder Benefits
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function AnimatedButton({ children, ...props }: AnimatedButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button {...props}>{children}</Button>
    </motion.div>
  );
}
