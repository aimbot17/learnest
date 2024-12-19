"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  date: string;
  index: number;
}

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Beta Tester - Wave 1",
    content:
      "Being part of the beta has been incredible. The team is super responsive to feedback, and I've already seen my suggestions implemented in updates.",
    avatar: "/placeholder.svg?height=100&width=100",
    date: "2 weeks in beta",
  },
  {
    name: "David Park",
    role: "Early Access Member",
    content:
      "The exclusive features we get to test are game-changing. It's exciting to be part of shaping a platform that's going to revolutionize online learning.",
    avatar: "/placeholder.svg?height=100&width=100",
    date: "1 month in beta",
  },
  {
    name: "Rachel Chen",
    role: "Founding Member",
    content:
      "The beta community is amazing. We get sneak peeks at new features and direct access to the development team. It feels like being part of something special.",
    avatar: "/placeholder.svg?height=100&width=100",
    date: "3 weeks in beta",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <Star className="h-3 w-3 mr-1 fill-primary" />
            Beta Feedback
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hear from Our Beta Pioneers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Early adopters are already experiencing the future of learning. Join
            them in shaping our platform.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  role,
  content,
  avatar,
  date,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16">
          <div className="absolute transform rotate-45 bg-primary/10 w-24 h-8 -right-6 top-6" />
        </div>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src={avatar}
                alt={name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">{name}</CardTitle>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-primary font-medium">{role}</p>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <Quote className="absolute text-primary/10 h-8 w-8 -left-1 -top-1" />
          <p className="text-muted-foreground relative z-10 pt-2">{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
