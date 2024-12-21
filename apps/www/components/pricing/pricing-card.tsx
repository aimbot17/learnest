"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, HelpCircle, X } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import type { PricingPlan } from "@/types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
}

export function PricingCard({ plan, isYearly }: PricingCardProps) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const formattedPrice = price === 0 ? "Custom" : `$${price}`;
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        className={`flex flex-col h-full ${
          plan.highlighted ? "border-primary shadow-lg" : "border-border"
        }`}
      >
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="min-h-[50px] mt-2">
                {plan.description}
              </CardDescription>
            </div>
            {plan.badge && (
              <Badge
                variant="default"
                className="bg-primary w-32 h-8 flex justify-center text-center"
              >
                {plan.badge}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={formattedPrice}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{formattedPrice}</span>
                  {formattedPrice !== "Custom" && (
                    <span className="text-muted-foreground">
                      /{isYearly ? "year" : "month"}
                    </span>
                  )}
                </div>
                {isYearly && formattedPrice !== "Custom" && (
                  <div className="text-sm text-muted-foreground mt-1">
                    ${plan.monthlyPrice}/mo when billed monthly
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <ul className="space-y-3">
            {Array.isArray(plan.features) && plan.features.length > 0 ? (
              plan.features.map((feature) => (
                <li key={feature.name} className="flex items-center gap-3">
                  {feature.included ? (
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                  <span
                    className={
                      feature.included
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    {feature.name}
                  </span>
                  {feature.tooltip && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{feature.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </li>
              ))
            ) : (
              <p>No features available for this plan.</p>
            )}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            className="w-full"
            variant={plan.highlighted ? "default" : "outline"}
            size="lg"
          >
            {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
          </Button>
          {plan.trialDays && (
            <p className="text-sm text-muted-foreground text-center">
              {plan.trialDays}-day free trial, no credit card required
            </p>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
