"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
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

const FALLBACK_TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    content:
      "The beta version has exceeded my expectations. The interface is intuitive and the features are revolutionary.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    content:
      "Being part of the beta program has been amazing. I love how the team implements our feedback quickly.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    content:
      "The platform's innovative approach to learning has completely transformed how I study.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const controls = useAnimation();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.from("Testimonial").select("*");

        if (error) {
          console.error("Error fetching testimonials:", error.message);
          setTestimonials(FALLBACK_TESTIMONIALS);
        } else {
          setTestimonials(data?.length ? data : FALLBACK_TESTIMONIALS);
        }
      } catch (error) {
        setTestimonials(FALLBACK_TESTIMONIALS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Duplicate testimonials multiple times to ensure smooth scrolling
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section
      className="py-12 md:py-24 bg-gradient-to-b from-background to-muted/50 overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <Star className="h-3 w-3 mr-1 fill-primary" />
            Beta Feedback
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            What Our Beta Users Are Saying
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our growing community of satisfied beta testers
          </p>
        </motion.div>

        {!isLoading && (
          <div className="relative mx-auto max-w-[100vw] space-y-8">
            {/* First Row - Left to Right */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
              <motion.div
                className="flex gap-6"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`row1-${testimonial.name}-${index}`}
                    {...testimonial}
                  />
                ))}
              </motion.div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
              <motion.div
                className="flex gap-6"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`row2-${testimonial.name}-${index}`}
                    {...testimonial}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ name, content, avatar }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-[280px] sm:w-[300px] md:w-[320px] flex-shrink-0"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-4 md:p-6">
          <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src={avatar}
                alt={name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm md:text-base">{name}</h3>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 md:h-3.5 md:w-3.5 fill-primary text-primary"
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm md:text-base text-muted-foreground line-clamp-3 md:line-clamp-4">
            {content}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
