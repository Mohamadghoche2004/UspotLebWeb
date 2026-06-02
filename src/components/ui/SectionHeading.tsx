import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { fadeUp } from '@/lib/motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'mx-auto max-w-3xl text-center',
        align === 'left' && 'max-w-2xl text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-violet-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-white/60 md:text-xl">{description}</p>
      )}
    </motion.div>
  )
}
