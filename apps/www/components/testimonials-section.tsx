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

  // Calculate animation duration based on screen size
  const getAnimationDuration = () => {
    if (typeof window === "undefined") return 20;
    return window.innerWidth < 640 ? 15 : window.innerWidth < 1024 ? 20 : 25;
  };

  // Duplicate testimonials multiple times to ensure smooth scrolling
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section
      className="relative py-6 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-b from-background to-muted/50"
      ref={containerRef}
    >
      {/* Main container with proper max-width constraints */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <Badge variant="secondary" className="mb-2 sm:mb-3">
            <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1 fill-primary" />
            <span className="text-xs sm:text-sm">Beta Feedback</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 sm:mb-3">
            What Our Beta Users Are Saying
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-[min(85%,40rem)] mx-auto">
            Join our growing community of satisfied beta testers
          </p>
        </motion.div>

        {!isLoading && (
          <div className="space-y-6 sm:space-y-8 overflow-hidden">
            {/* First Row - Left to Right */}
            <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-l from-background to-transparent z-10" />
              <motion.div
                className="flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: getAnimationDuration(),
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
            <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-l from-background to-transparent z-10" />
              <motion.div
                className="flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: getAnimationDuration(),
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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400 }}
      className="w-[180px] xs:w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] flex-shrink-0"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-3 sm:p-4 lg:p-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src={avatar}
                alt={name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-xs sm:text-sm truncate">
                {name}
              </h3>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-primary text-primary"
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
            {content}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
