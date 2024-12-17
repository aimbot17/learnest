"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, LogIn, BookOpen } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "./navbar";

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-primary/10 to-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 text-center"
        >
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
            Unlock Your Potential with{" "}
            <span className="text-primary">Free Learning Resources</span>
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
            Discover a world of knowledge at your fingertips. Start learning
            today with our curated collection of free resources.
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
              Get Started
              <Rocket className="ml-2 h-4 w-4" />
            </AnimatedButton>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-4 mt-8"
          >
            <AnimatedButton variant="outline" asChild>
              <Link href="/courses">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Courses
              </Link>
            </AnimatedButton>
            <AnimatedButton variant="ghost" asChild>
              <Link href="/sign-in">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Link>
            </AnimatedButton>
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
