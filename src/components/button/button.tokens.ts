import { spacing } from '@tokens'

export const buttonPadding = {
  sm: `${spacing.xs} ${spacing.sm}`,
  md: `${spacing.sm} ${spacing.md}`,
  lg: `${spacing.md} ${spacing.lg}`,
} as const

export type ButtonSize = keyof typeof buttonPadding
