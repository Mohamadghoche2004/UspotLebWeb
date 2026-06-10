import { forwardRef, type ButtonHTMLAttributes, type Ref } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }

type ButtonAsLink = BaseProps & LinkProps & { to: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:from-violet-500 hover:to-cyan-400 shadow-lg shadow-violet-500/25',
  secondary: 'glass text-foreground hover:bg-foreground/10',
  ghost: 'text-muted-foreground hover:text-foreground hover:bg-foreground/5',
  outline:
    'border border-border-subtle text-foreground hover:border-violet-400/50 hover:bg-violet-500/10',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
      variants[variant],
      sizes[size],
      className,
    )

    if ('to' in props && props.to) {
      const { to, ...linkProps } = props as ButtonAsLink
      return (
        <Link ref={ref as Ref<HTMLAnchorElement>} to={to} className={classes} {...linkProps}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref as Ref<HTMLButtonElement>} className={classes} {...(props as ButtonAsButton)}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
