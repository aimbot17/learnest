import { PricingPlan, Testimonial } from "@/types/pricing";

export const plans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    monthlyPrice: 60,
    yearlyPrice: 600,
    description:
      "Perfect for small organizations getting started with e-learning",
    trialDays: 14,
    features: [
      { name: "Mobile app access", included: true },
      { name: "Web platform access", included: true },
      { name: "Computer platform access", included: true },
      {
        name: "0-100GB file storage",
        included: true,
        tooltip: "Secure cloud storage for your learning materials",
      },
      { name: "Basic course management tools", included: true },
      {
        name: "Unlimited users",
        included: true,
        tooltip: "No per-user fees, ever",
      },
      { name: "Video storage", included: false },
      { name: "Reporting & analytics", included: false },
      { name: "Customization & branding", included: false },
      { name: "Priority support", included: false },
    ],
  },
  {
    id: "standard",
    name: "Standard",
    monthlyPrice: 120,
    yearlyPrice: 1200,
    description: "Advanced features for growing organizations",
    badge: "Most Popular",
    trialDays: 14,
    features: [
      { name: "Mobile app access", included: true },
      { name: "Web platform access", included: true },
      { name: "Computer platform access", included: true },
      {
        name: "100GB-500GB file storage",
        included: true,
        tooltip: "5x more storage than Basic",
      },
      { name: "Advanced course management tools", included: true },
      { name: "Video storage (50GB)", included: true },
      { name: "Basic reporting & analytics", included: true },
      {
        name: "Unlimited users",
        included: true,
        tooltip: "No per-user fees, ever",
      },
      { name: "Customization & branding", included: false },
      { name: "Third-party integrations", included: false },
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Fully customizable solution for large organizations",
    features: [
      { name: "Mobile app access", included: true },
      { name: "Web platform access", included: true },
      { name: "Computer platform access", included: true },
      {
        name: "500GB-1TB file storage",
        included: true,
        tooltip: "Expandable storage options available",
      },
      { name: "Advanced course management tools", included: true },
      { name: "Video storage (500GB)", included: true },
      { name: "Advanced reporting & analytics", included: true },
      { name: "Customization & branding", included: true },
      { name: "Third-party integrations", included: true },
      {
        name: "Priority support",
        included: true,
        tooltip: "24/7 dedicated support team",
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Head of Learning",
    company: "TechCorp Inc.",
    content:
      "Implementing this LMS has transformed our training process. The unlimited users feature and comprehensive analytics have made it incredibly easy to track progress across our organization.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "HR Director",
    company: "Global Edu Ltd",
    content:
      "The platform's customization options and third-party integrations have allowed us to create a truly unique learning experience for our team. The support team is exceptional!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Training Manager",
    company: "Learn Co",
    content:
      "We've seen a 40% increase in course completion rates since switching to this platform. The mobile accessibility and video storage features are game-changers.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
];
