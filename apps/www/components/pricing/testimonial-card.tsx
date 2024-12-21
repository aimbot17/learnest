"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/types/pricing";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <Quote className="h-8 w-8 text-muted-foreground mb-4" />
          <blockquote className="text-lg mb-4">
            {testimonial.content}
          </blockquote>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">
                {testimonial.role} at {testimonial.company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
