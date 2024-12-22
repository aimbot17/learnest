"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Sparkles, ArrowRight, Users, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendPostRequest } from "@/utils/api";
import { validateEmail } from "@/lib/validate";
import type { BetaResponse, AnimatedButtonProps } from "@/types/hero";
import type { ButtonProps } from "@/components/ui/button";

function AnimatedButton({
  children,
  loading,
  ...props
}: AnimatedButtonProps & ButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button disabled={loading} {...props}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          children
        )}
      </Button>
    </motion.div>
  );
}

const benefits = [
  { color: "bg-green-500", text: "Early Access" },
  { color: "bg-blue-500", text: "Priority Support" },
  { color: "bg-purple-500", text: "Founder Benefits" },
];

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const [touched, setTouched] = useState(false);

  const isValidEmail = validateEmail(email);
  const showEmailError = touched && email && !isValidEmail;

  const handleJoinBeta = async () => {
    if (!isValidEmail) {
      setMessage({ text: "Please enter a valid email address", type: "error" });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await sendPostRequest<BetaResponse>({
        url: "http://localhost:7000/api/beta-access",
      });

      setMessage({
        text:
          response.data.message ||
          "Welcome to our beta program! Check your email for next steps.",
        type: "success",
      });
      setEmail("");
      setTouched(false);
    } catch (error) {
      setMessage({
        text: "We couldn't process your request. Please try again in a few moments.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-background">
      {/* Background patterns - made responsive */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-to-bl from-primary/5 to-transparent transform rotate-45" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-primary/5 to-transparent transform rotate-45" />
      </div>

      <div className="container relative w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-[90rem] mx-auto"
          >
            {/* Badge - Responsive sizing and spacing */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-2 sm:mb-4"
            >
              <Badge
                variant="secondary"
                className="px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                Limited Beta Access
              </Badge>
            </motion.div>

            {/* Heading - Fluid typography and spacing */}
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: 0.2,
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] tracking-tight text-center px-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
            >
              Be Among the First to Experience Our{" "}
              <span className="text-primary whitespace-nowrap">
                Revolutionary Platform
              </span>
            </motion.h1>

            {/* Subheading - Responsive text and width */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: 0.4,
              }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-[85%] sm:max-w-[75%] lg:max-w-2xl text-center mx-auto px-4"
            >
              Join an exclusive group of early adopters shaping the future of
              learning.
            </motion.p>

            {/* Form section - Improved mobile layout */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-full max-w-[85%] sm:max-w-md mx-auto mt-4 sm:mt-6 space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="flex-1">
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    className="h-10 sm:h-12 text-sm sm:text-base w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(true)}
                    aria-label="Email address"
                    aria-invalid={showEmailError ? "true" : "false"}
                    aria-describedby={
                      showEmailError ? "email-error" : undefined
                    }
                  />
                  {showEmailError && (
                    <p
                      id="email-error"
                      className="text-xs sm:text-sm text-destructive mt-1"
                    >
                      Please enter a valid email address
                    </p>
                  )}
                </div>
                <AnimatedButton
                  onClick={handleJoinBeta}
                  size="lg"
                  className="h-10 sm:h-12 px-4 sm:px-8 whitespace-nowrap bg-primary text-primary-foreground hover:bg-primary/90"
                  loading={loading}
                >
                  <span className="text-sm sm:text-base">Join the Beta</span>
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </AnimatedButton>
              </div>
            </motion.div>

            {/* Users count - Responsive text and padding */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground bg-muted/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mt-4 sm:mt-6"
            >
              <Users className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">
                Join 1,000+ early adopters already signed up
              </span>
            </motion.div>

            {/* Benefits grid - Responsive layout and spacing */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8 w-full max-w-[85%] sm:max-w-2xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="flex items-center justify-center gap-1.5 sm:gap-2 bg-muted/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span
                    className={`h-1.5 w-1.5 sm:h-2 sm:w-2 ${benefit.color} rounded-full`}
                  />
                  {benefit.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
