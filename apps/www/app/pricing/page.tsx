"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Timer, Sparkles, ArrowRight, Shield, CheckCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PricingCard } from "@/components/pricing/pricing-card"
import { TrustBadges } from "@/components/pricing/trust-badges"
import { BillingSwitchButton } from "@/components/pricing/billing-switch-button"
import { createClient } from "@/utils/supabase/client"
import { PricingPlan } from "@/types/pricing"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true)
  const [plans, setPlans] = useState<PricingPlan[]>([])

  const supabase = createClient()

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
      `)

      if (error) {
        console.error("Error fetching plans:", error)
        return
      }

      const plansWithFeatures = (data || []).map((plan: any) => ({
        ...plan,
        features: plan.Feature,
      }))

      setPlans(plansWithFeatures)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const memoizedPlans = useMemo(() => plans, [plans])

  return (
    <div className="relative min-h-[100svh] flex flex-col items-center bg-gradient-to-br from-primary/5 via-background to-primary/10 w-full overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.02]" />
        <div
          className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-to-bl from-primary/10 to-transparent rounded-full transform rotate-45 animate-pulse"
          style={{ animationDuration: "15s" }}
        />
        <div
          className="absolute -bottom-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-primary/10 to-transparent rounded-full transform rotate-45 animate-pulse"
          style={{ animationDuration: "20s" }}
        />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl" />
      </div>

      <div className="container relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
        {/* Header Section */}
        <motion.section
          className="text-center mb-24"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeIn} className="mb-6">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-background/80"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Simple & Transparent
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed"
          >
            Choose the perfect plan for your organization. All plans include
            unlimited users and a risk-free trial period.
          </motion.p>
        </motion.section>

        {/* Limited Time Offer
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full mb-16"
        >
          <Alert className="bg-primary/10 border-primary shadow-lg hover:shadow-xl transition-all duration-300">
            <Timer className="h-5 w-5" />
            <AlertTitle className="text-lg font-semibold">Limited Time Offer</AlertTitle>
            <AlertDescription className="text-muted-foreground text-base">
              Get 20% off annual plans when you sign up before the end of the
              month. Save up to $1,200 on Enterprise plans!
            </AlertDescription>
          </Alert>
        </motion.section> */}

        {/* Billing Switch */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex justify-center mb-16"
        >
          <BillingSwitchButton isYearly={isYearly} onToggle={setIsYearly} />
        </motion.section>

        {/* Pricing Cards */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-24"
        >
          <AnimatePresence mode="wait">
            {memoizedPlans.length > 0 ? (
              memoizedPlans.map((plan: PricingPlan) => (
                <motion.div
                  key={plan.id}
                  variants={fadeIn}
                  layout
                >
                  <PricingCard plan={plan} isYearly={isYearly} />
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={fadeIn}
                className="col-span-3 flex items-center justify-center p-12"
              >
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-primary/10 rounded w-48 mx-auto" />
                  <div className="h-4 bg-primary/5 rounded w-32 mx-auto" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Trust Badges */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="py-16 border-y border-primary/10 w-full mb-24 bg-background/50 backdrop-blur-sm"
        >
          <TrustBadges />
        </motion.section>

        {/* FAQ and Support */}
        <motion.section
          className="text-center max-w-3xl mx-auto relative"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-primary/50 opacity-20" />
          </div>
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold mb-6 text-foreground"
          >
            Still have questions?
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-muted-foreground mb-12 leading-relaxed"
          >
            Our team is here to help you find the perfect plan for your needs.
          </motion.p>
          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

