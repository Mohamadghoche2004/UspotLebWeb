import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site.config'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  imageClassName?: string
  variant?: 'light' | 'dark'
  linkToHome?: boolean
  onClick?: () => void
  /** Disable Framer Motion on the image (use in navbar to prevent scroll flicker) */
  staticImage?: boolean
}

export function Logo({
  className,
  imageClassName,
  variant,
  linkToHome = true,
  onClick,
  staticImage = false,
}: LogoProps) {
  const { theme } = useTheme()
  const resolvedVariant = variant ?? (theme === 'dark' ? 'light' : 'dark')
  const src =
    resolvedVariant === 'light' ? siteConfig.logo.light : siteConfig.logo.dark
  const imgClass = cn(
    'h-8 w-auto max-w-[160px] object-contain sm:h-9 sm:max-w-none md:h-11',
    imageClassName,
  )

  const image = staticImage ? (
    <img src={src} alt={siteConfig.name} className={imgClass} />
  ) : (
    <motion.img
      src={src}
      alt={siteConfig.name}
      className={imgClass}
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
