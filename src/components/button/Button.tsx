import styles from './Button.module.css'
import type { ButtonProps } from './Button.types'
import { buttonPadding } from './button.tokens'
import { buttonVariantClass } from './button.classes'
import clsx from 'clsx'

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      style={{ padding: buttonPadding[size] }}
      className={clsx(styles['axiom-button'], buttonVariantClass[variant])}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
