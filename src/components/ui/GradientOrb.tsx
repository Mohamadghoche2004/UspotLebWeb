import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface GradientOrbProps {
  className?: string
  color?: 'violet' | 'cyan' | 'fuchsia'
  size?: 'sm' | 'md' | 'lg'
}

const colors = {
  violet: 'bg-violet-600/30',
  cyan: 'bg-cyan-500/25',
  fuchsia: 'bg-fuchsia-500/20',
}

const sizes = {
  sm: 'h-48 w-48',
  md: 'h-72 w-72',
  lg: 'h-96 w-96',
}

export function GradientOrb({ className, color = 'violet', size = 'md' }: GradientOrbProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      className={cn(
        'pointer-events-none absolute rounded-full blur-3xl',
        colors[color],
        sizes[size],
        className,
      )}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }
      }
    />
  )
}
