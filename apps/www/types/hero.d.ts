import type { ButtonProps } from "@/components/ui/button" 

export interface BetaResponse {
  message: string
  success: boolean
}

export interface AnimatedButtonProps extends ButtonProps {
  loading?: boolean
}
