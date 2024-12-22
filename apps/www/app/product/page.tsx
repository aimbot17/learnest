"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ProductPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-background">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-to-bl from-primary/5 to-transparent transform rotate-45" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-primary/5 to-transparent transform rotate-45" />
      </div>

      <div className="container relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.section
          className="mb-16 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-4"
          >
            <Badge
              variant="secondary"
              className="px-3 py-1 text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Revolutionary CMS/LMS
            </Badge>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            Learnest: Empowering Education
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your educational institution with our cutting-edge CMS/LMS
            solution.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-semibold mb-8 text-center text-foreground"
          >
            Core Features
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
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
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <feature.icon className="mr-2" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-semibold mb-8 text-center text-foreground"
          >
            How It Works
          </motion.h2>
          <div className="space-y-4">
            {[
              "Sign Up: Create your account and set up your organization's profile.",
              "Customize: Tailor the platform to your specific needs with our flexible configuration options.",
              "Import Data: Easily import existing student and course data into the system.",
              "Set Up Classes: Create virtual classrooms and upload course materials.",
              "Invite Users: Add faculty, staff, and students to the platform with role-based access control.",
              "Start Managing: Begin using the full suite of tools to manage your educational processes efficiently.",
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-background/80 backdrop-blur-sm p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <strong className="text-primary">Step {index + 1}:</strong>{" "}
                <span className="text-muted-foreground">{step}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-semibold mb-8 text-center text-foreground"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-start"
              >
                <feature.icon className="mr-4 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            Ready to Transform Your Educational Management?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Join thousands of satisfied educational institutions and experience
            the power of EduManage.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Start Your Free Trial Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
