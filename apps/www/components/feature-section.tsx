"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Award, Globe, Zap, Heart } from "lucide-react";
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
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "1000+ Courses",
    description: "Access a vast library of courses across various subjects.",
    color: "bg-primary/10",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Vibrant Community",
    description: "Join a thriving community of learners and educators.",
    color: "bg-blue-500/10",
  },
  {
    icon: <Award className="h-8 w-8 text-yellow-500" />,
    title: "Earn Certificates",
    description: "Showcase your skills with recognized certifications.",
    color: "bg-yellow-500/10",
  },
  {
    icon: <Globe className="h-8 w-8 text-green-500" />,
    title: "Learn Anywhere",
    description: "Access your courses from anywhere in the world, anytime.",
    color: "bg-green-500/10",
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: "Interactive Learning",
    description: "Engage with hands-on projects and real-world applications.",
    color: "bg-purple-500/10",
  },
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Personalized Path",
    description: "Tailored learning experiences based on your goals and pace.",
    color: "bg-red-500/10",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock Your Potential
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover why thousands of learners choose our platform for their
            educational journey.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <CardHeader>
          <div className={`p-3 rounded-full ${color} w-fit`}>{icon}</div>
          <CardTitle className="text-xl font-semibold mt-4">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
