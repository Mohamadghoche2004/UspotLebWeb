import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiChevronRight } from 'react-icons/hi'
import { GradientOrb } from '@/components/ui/GradientOrb'
import { fadeUp } from '@/lib/motion'

interface PageHeroProps {
  title: string
  description: string
  breadcrumbs?: { label: string; href?: string }[]
}

export function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <GradientOrb className="-top-20 right-1/4" color="violet" size="md" />
      <GradientOrb className="bottom-0 left-1/4" color="cyan" size="sm" />

      <div className="container-custom relative z-10">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {i > 0 && <HiChevronRight className="h-3 w-3" />}
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/60 md:text-xl">{description}</p>
        </motion.div>
      </div>
    </section>
  )
}
