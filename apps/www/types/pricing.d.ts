export interface PricingFeature {
  name: string;
  included: boolean;
  tooltip?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
  badge?: string;
  trialDays?: number;
}
