"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

interface TestimonialCardProps {
  name: string;
  content: string;
  avatar: string;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialCardProps[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("Testimonial").select("*");

      if (error) {
        console.error("Error fetching testimonials:", error.message);
      } else {
        setTestimonials(data || []);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
            User Feedback
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Beta Users Are Saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our platform is transforming learning experiences.
          </p>
        </motion.div>
        <div className="relative">
          <TestimonialRow testimonials={testimonials} direction="left" />
          <TestimonialRow testimonials={testimonials} direction="right" />
        </div>
      </div>
    </section>
  );
}

function TestimonialRow({
  testimonials,
  direction,
}: {
  testimonials: TestimonialCardProps[];
  direction: "left" | "right";
}) {
  return (
    <div
      className={`flex ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"} mb-8`}
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
}

function TestimonialCard({ name, content, avatar }: TestimonialCardProps) {
  return (
    <div className="w-[300px] flex-shrink-0 mx-4">
      <Card className="h-full relative overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="absolute top-0 right-0 w-16 h-16">
          <div className="absolute transform rotate-45 bg-primary/10 w-24 h-8 -right-6 top-6" />
        </div>
        <CardContent className="p-6 relative">
          <div className="absolute text-primary/10 -top-1 -left-1">
            <Star className="h-8 w-8" />
          </div>
          <div className="flex items-center space-x-4 mb-4 relative z-10">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src={avatar}
                alt={name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{name}</h3>
            </div>
          </div>
          <p className="text-muted-foreground relative z-10">{content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
