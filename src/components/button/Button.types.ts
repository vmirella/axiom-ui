export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
}