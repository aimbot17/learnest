"use client";

import { useState, useEffect, useMemo } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    <div className="relative min-h-[100svh] flex flex-col items-center bg-gradient-to-br from-primary/5 via-background to-primary/10 w-full overflow-hidden">
      <div className="container relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
        {/* Header Section */}
        <section className="text-center mb-24 animate-fadeIn">
          <div className="mb-6 animate-slideDown">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-background/80"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Simple & Transparent
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 animate-slideUp">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed animate-fadeIn">
            Choose the perfect plan for your organization. All plans include
            unlimited users and a risk-free trial period.
          </p>
        </section>

        {/* Billing Switch */}
        <section className="flex justify-center mb-16 animate-fadeIn">
          <BillingSwitchButton isYearly={isYearly} onToggle={setIsYearly} />
        </section>

        {/* Pricing Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {memoizedPlans.length > 0 ? (
            memoizedPlans.map((plan: PricingPlan, index: number) => (
              <div
                key={plan.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PricingCard plan={plan} isYearly={isYearly} />
              </div>
            ))
          ) : (
            <div className="col-span-3 flex items-center justify-center p-12 animate-fadeIn">
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-primary/10 rounded w-48 mx-auto" />
                <div className="h-4 bg-primary/5 rounded w-32 mx-auto" />
              </div>
            </div>
          )}
        </section>

        {/* Trust Badges */}
        <section className="py-16 border-y border-primary/10 w-full mb-24 bg-background/50 backdrop-blur-sm animate-fadeIn">
          <TrustBadges />
        </section>

        {/* FAQ and Support */}
        <section className="text-center max-w-3xl mx-auto relative animate-fadeIn">
          <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-primary/50 opacity-20" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground animate-slideUp">
            Still have questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fadeIn">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <div className="inline-block transition-transform duration-300 hover:scale-105 active:scale-95">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
