"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, CalendarRange, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BillingSwitchButtonProps {
  isYearly: boolean;
  onToggle: (checked: boolean) => void;
}

export function BillingSwitchButton({
  isYearly,
  onToggle,
}: BillingSwitchButtonProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        variant="outline"
        size="lg"
        onClick={() => onToggle(!isYearly)}
        className="relative group"
      >
        <span className="flex items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={isYearly ? "yearly" : "monthly"}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-center gap-2"
            >
              {isYearly ? (
                <>
                  <CalendarDays className="h-4 w-4" />
                  Switch to Monthly
                </>
              ) : (
                <>
                  <CalendarRange className="h-4 w-4" />
                  Switch to Yearly
                </>
              )}
            </motion.span>
          </AnimatePresence>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Button>
      <AnimatePresence mode="wait">
        <motion.div
          key={isYearly ? "yearly" : "monthly"}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="text-sm text-muted-foreground"
        >
          {isYearly ? (
            <span className="text-primary">Save 20% when billed annually</span>
          ) : (
            "Billed monthly"
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
