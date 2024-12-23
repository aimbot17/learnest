"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PricingCard } from "@/components/pricing/pricing-card";
import { TrustBadges } from "@/components/pricing/trust-badges";
import { BillingSwitchButton } from "@/components/pricing/billing-switch-button";
import { createClient } from "@/utils/supabase/client";
import { PricingPlan } from "@/types/pricing";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [plans, setPlans] = useState<PricingPlan[]>([]);

  const supabase = createClient();

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("PricingPlan").select(`
          id,
          name,
          monthlyPrice,
          yearlyPrice,
          description,
          trialDays,
          badge,
          highlighted,
          Feature (
            id,
            name,
            included,
            tooltip
          )
        `);

      if (error) {
        console.error("Error fetching plans:", error);
        return;
      }

      const plansWithFeatures = (data || []).map((plan: any) => ({
        ...plan,
        features: plan.Feature,
      }));

      setPlans(plansWithFeatures);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const memoizedPlans = useMemo(() => plans, [plans]);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gradient-to-b from-primary/10 via-primary/5 to-background w-full">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mt-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the perfect plan for your organization. All plans include
            unlimited users and a risk-free trial period.
          </p>
        </motion.div>
      </div>

      {/* Limited Time Offer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full px-4 mb-12"
      >
        <Alert className="bg-primary/10 border-primary">
          <Timer className="h-4 w-4" />
          <AlertTitle>Limited Time Offer</AlertTitle>
          <AlertDescription>
            Get 20% off annual plans when you sign up before the end of the
            month. Save up to $1,200 on Enterprise plans!
          </AlertDescription>
        </Alert>
      </motion.div>

      {/* Billing Switch */}
      <div className="flex justify-center mb-12">
        <BillingSwitchButton isYearly={isYearly} onToggle={setIsYearly} />
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full px-4">
        {memoizedPlans.length > 0 ? (
          memoizedPlans.map((plan: PricingPlan) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
          ))
        ) : (
          <p className="text-center col-span-3">Loading pricing plans...</p>
        )}
      </div>

      {/* Trust Badges */}
      <div className="py-12 border-y w-full px-4">
        <TrustBadges />
      </div>

      {/* FAQ and Support */}
      <div className="text-center w-full px-4 mb-16">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-6">
          Our team is here to help you find the perfect plan for your needs.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Schedule a Demo
          </a>
        </motion.div>
      </div>
    </div>
  );
}
