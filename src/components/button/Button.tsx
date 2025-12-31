import styles from './Button.module.css'
import type { ButtonProps } from './Button.types'
import clsx from 'clsx'

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size]
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}