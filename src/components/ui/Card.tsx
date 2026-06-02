import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function Card({ children, className, hover = true, glow = false }: CardProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const classes = cn('glass rounded-2xl p-6', glow && 'glow', className)

  if (!hover || prefersReducedMotion) {
    return <div className={classes}>{children}</div>
  }

  return (
    <motion.div
      className={classes}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
