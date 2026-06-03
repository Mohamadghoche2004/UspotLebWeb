import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site.config'
import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  imageClassName?: string
  variant?: 'light' | 'dark'
  linkToHome?: boolean
  onClick?: () => void
}

export function Logo({
  className,
  imageClassName,
  variant = 'light',
  linkToHome = true,
  onClick,
}: LogoProps) {
  const src = variant === 'light' ? siteConfig.logo.light : siteConfig.logo.dark

  const image = (
    <motion.img
      src={src}
      alt={siteConfig.name}
      className={cn(
        'h-8 w-auto max-w-[160px] object-contain sm:h-9 sm:max-w-none md:h-11',
        imageClassName,
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    />
  )

  if (!linkToHome) {
    return <div className={cn('inline-flex items-center', className)}>{image}</div>
  }

  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn('inline-flex items-center transition-opacity hover:opacity-90', className)}
      aria-label={`${siteConfig.name} — Home`}
    >
      {image}
    </Link>
  )
}
