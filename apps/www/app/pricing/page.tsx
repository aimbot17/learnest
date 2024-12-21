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
import TestimonialsSection from "@/components/testimonials-section";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [plans, setPlans] = useState<PricingPlan[]>([]);

  const supabase = createClient();

  const fetchData = async () => {
    try {
      // Fetching the data from the Supabase table
      const plansQuery = supabase.from("PricingPlan").select(`
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

      // Destructuring the result to access data and error
      const { data, error } = await plansQuery;

      // Handle error if present
      if (error) {
        console.error("Error fetching plans:", error);
        return; // Early return on error
      }

      // Map through the data and include the features
      const plansWithFeatures = (data || []).map((plan: any) => ({
        ...plan,
        features: plan.Feature, // Adding Feature as features
      }));

      // Set the fetched data into state
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
    <div className="container mx-auto py-16 px-4 space-y-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">
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
      >
        <Alert className="bg-primary/10 border-primary max-w-2xl mx-auto">
          <Timer className="h-4 w-4" />
          <AlertTitle>Limited Time Offer</AlertTitle>
          <AlertDescription>
            Get 20% off annual plans when you sign up before the end of the
            month. Save up to $1,200 on Enterprise plans!
          </AlertDescription>
        </Alert>
      </motion.div>

      {/* Billing Switch */}
      <div className="flex justify-center">
        <BillingSwitchButton isYearly={isYearly} onToggle={setIsYearly} />
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memoizedPlans.length > 0 ? (
          memoizedPlans.map((plan: PricingPlan) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
          ))
        ) : (
          <p>Loading pricing plans...</p>
        )}
      </div>

      {/* Trust Badges */}
      <div className="py-12 border-y">
        <TrustBadges />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Leading Organizations
        </h2>
        {/* Assuming your testimonials component handles the rendering of testimonials */}
        <TestimonialsSection />
      </div>

      {/* FAQ and Support */}
      <div className="text-center max-w-2xl mx-auto">
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
