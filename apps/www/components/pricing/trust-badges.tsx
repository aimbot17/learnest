"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Award, Clock } from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      icon: Lock,
      title: "Secure Platform",
      description: "256-bit SSL encryption",
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "GDPR Compliant",
    },
    {
      icon: Award,
      title: "Money-back Guarantee",
      description: "30-day refund policy",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always here to help",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center text-center p-4"
        >
          <badge.icon className="h-8 w-8 mb-2 text-primary" />
          <h3 className="font-semibold mb-1">{badge.title}</h3>
          <p className="text-sm text-muted-foreground">{badge.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
