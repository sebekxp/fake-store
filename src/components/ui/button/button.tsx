import type { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'icon' | 'default';
}

export function Button({
  className = '',
  children,
  disabled,
  style,
  variant = 'default',
  ...props
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    disabled && styles.disabled,
    variant === 'icon' && styles.iconButton,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={buttonClasses} disabled={disabled} style={style} {...props}>
      {children}
    </button>
  );
}

Button.displayName = 'Button';
