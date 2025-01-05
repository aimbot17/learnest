"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  BookOpen,
  HardDrive,
  BarChart,
  Shield,
  Zap,
  ThumbsUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { fadeIn, stagger, buttonHover, slideIn } from "@/lib/animation";
import type { Feature } from "@/types/product";

const coreFeatures: Feature[] = [
  {
    icon: Users,
    title: "Student Data Management",
    description:
      "Efficiently manage student profiles, attendance, grades, and more in one centralized system.",
  },
  {
    icon: BookOpen,
    title: "Online Classes",
    description:
      "Host and manage virtual classrooms, assignments, and discussions with our integrated online learning tools.",
  },
  {
    icon: HardDrive,
    title: "File Storage",
    description:
      "Securely store and organize course materials, student submissions, and administrative documents in the cloud.",
  },
  {
    icon: BarChart,
    title: "Analytics",
    description:
      "Gain valuable insights into student performance, engagement, and overall institutional effectiveness with our powerful analytics tools.",
  },
];

const steps = [
  "Sign Up: Create your account and set up your organization's profile.",
  "Customize: Tailor the platform to your specific needs with our flexible configuration options.",
  "Import Data: Easily import existing student and course data into the system.",
  "Set Up Classes: Create virtual classrooms and upload course materials.",
  "Invite Users: Add faculty, staff, and students to the platform with role-based access control.",
  "Start Managing: Begin using the full suite of tools to manage your educational processes efficiently.",
];

const benefits: Feature[] = [
  {
    icon: Shield,
    title: "Robust Security",
    description:
      "Your data is protected with state-of-the-art encryption and security measures, ensuring compliance with educational data protection regulations.",
  },
  {
    icon: Zap,
    title: "Scalability",
    description:
      "Our platform grows with you, capable of handling everything from small classes to entire university systems without compromising performance.",
  },
  {
    icon: ThumbsUp,
    title: "User-Friendly Interface",
    description:
      "Intuitive design ensures that both administrators and students can navigate the platform with ease, minimizing the learning curve.",
  },
  {
    icon: CheckCircle,
    title: "Comprehensive Solution",
    description:
      "All the tools you need in one place, eliminating the need for multiple software subscriptions and simplifying your IT infrastructure.",
  },
];

export default function ProductPage() {
  return (
    <div className="relative min-h-[100svh] flex flex-col text-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.section
          className="mb-32 text-center relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          aria-labelledby="product-title"
        >
          <div
            className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20" />
          </div>
          <motion.div variants={slideIn} className="mb-6">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-background/80"
            >
              <Sparkles className="mr-2 h-4 w-4" aria-hidden="true" />
              Revolutionary CMS/LMS
            </Badge>
          </motion.div>
          <h1
            id="product-title"
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
          >
            Learnest: Empowering Education
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your educational institution with our cutting-edge CMS/LMS
            solution.
          </p>
          <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </motion.div>
        </motion.section>

        {/* Core Features */}
        <motion.section
          className="mb-32"
          initial="hidden"
          animate="visible"
          variants={stagger}
          aria-labelledby="features-title"
        >
          <motion.h2
            id="features-title"
            variants={fadeIn}
            className="text-4xl font-bold mb-16 text-center text-foreground"
          >
            Core Features
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeIn}
                className="h-full"
              >
                <Card className="h-full bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/20 group">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary text-2xl group-hover:scale-105 transition-transform duration-300">
                      <feature.icon
                        className="mr-3 h-6 w-6"
                        aria-hidden="true"
                      />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          className="mb-32 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={stagger}
          aria-labelledby="steps-title"
        >
          <motion.h2
            id="steps-title"
            variants={fadeIn}
            className="text-4xl font-bold mb-16 text-center text-foreground"
          >
            How It Works
          </motion.h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-background/80 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/20 transform hover:-translate-y-1"
              >
                <strong className="text-primary text-lg block mb-2">
                  Step {index + 1}
                </strong>
                <span className="text-muted-foreground text-lg leading-relaxed">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          className="mb-32"
          initial="hidden"
          animate="visible"
          variants={stagger}
          aria-labelledby="benefits-title"
        >
          <motion.h2
            id="benefits-title"
            variants={fadeIn}
            className="text-4xl font-bold mb-16 text-center text-foreground"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeIn}
                className="flex items-start group"
              >
                <benefit.icon
                  className="mr-6 text-primary shrink-0 h-8 w-8 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          className="text-center relative py-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          aria-labelledby="cta-title"
        >
          <div
            className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-20" />
          </div>
          <h2
            id="cta-title"
            className="text-4xl font-bold mb-6 text-foreground"
          >
            Ready to Transform Your Educational Management?
          </h2>
          <p className="text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied educational institutions and experience
            the power of Learnest.
          </p>
          <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Free Trial Today
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
