import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface PageTransitionProps {
  children: React.ReactNode
  pageKey: string
}

export function PageTransition({ children, pageKey }: PageTransitionProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return <main>{children}</main>
  }

  return (
    <motion.main
      key={pageKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}
