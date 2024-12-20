"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  Shield,
  Wrench,
  MessageSquare,
  Gift,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}

const features = [
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Early Access Features",
    description:
      "Be the first to try groundbreaking features before public release.",
    color: "bg-primary/10",
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Founder Status",
    description:
      "Secure lifetime benefits and recognition as a founding member.",
    color: "bg-blue-500/10",
  },
  {
    icon: <Wrench className="h-8 w-8 text-yellow-500" />,
    title: "Shape the Product",
    description:
      "Direct influence on feature development and platform direction.",
    color: "bg-yellow-500/10",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-green-500" />,
    title: "Priority Support",
    description:
      "Direct line to our development team for immediate assistance.",
    color: "bg-green-500/10",
  },
  {
    icon: <Rocket className="h-8 w-8 text-purple-500" />,
    title: "Exclusive Updates",
    description:
      "Weekly insider previews of upcoming features and improvements.",
    color: "bg-purple-500/10",
  },
  {
    icon: <Gift className="h-8 w-8 text-red-500" />,
    title: "Beta Perks",
    description:
      "Special rewards and discounts exclusive to beta participants.",
    color: "bg-red-500/10",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6 sm:px-4">
        {" "}
        {/* Update 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pioneer the Future of Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our beta program and help shape the next generation of online
            education while enjoying exclusive benefits.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {" "}
          {/* Update 3 */}
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  color,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-4 md:p-6">
          {" "}
          {/* Update 1 */}
          <div className={`p-3 rounded-full ${color} w-fit`}>{icon}</div>
          <CardTitle className="text-xl font-semibold mt-4">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6 pt-0">
          {" "}
          {/* Update 1 */}
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
