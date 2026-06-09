import { HiArrowDown } from 'react-icons/hi'
import { siteConfig } from '@/data/site.config'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const orbColors = {
  violet: 'bg-violet-600/30',
  cyan: 'bg-cyan-500/25',
  fuchsia: 'bg-fuchsia-500/20',
}

const orbSizes = {
  sm: 'h-48 w-48',
  md: 'h-72 w-72',
  lg: 'h-96 w-96',
}

function StaticOrb({
  className,
  color,
  size,
}: {
  className?: string
  color: keyof typeof orbColors
  size: keyof typeof orbSizes
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute rounded-full blur-3xl opacity-50',
        orbColors[color],
        orbSizes[size],
        className,
      )}
    />
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <StaticOrb className="-top-20 left-1/4" color="violet" size="lg" />
      <StaticOrb className="top-1/3 -right-20" color="cyan" size="md" />
      <StaticOrb className="bottom-0 left-1/2" color="fuchsia" size="sm" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-block rounded-full glass px-4 py-2 text-sm font-medium text-violet-300">
            Full-Service Digital Agency
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {siteConfig.tagline.split(' ').slice(0, 3).join(' ')}{' '}
            <span className="gradient-text">
              {siteConfig.tagline.split(' ').slice(3).join(' ')}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
            Custom websites, mobile apps, branding, UI/UX design, and digital marketing
            solutions that help businesses grow.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/contact" size="lg">
              Book Free Consultation
            </Button>
            <Button to="/portfolio" variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="#services"
            aria-label="Scroll to services"
            className="flex h-12 w-12 items-center justify-center rounded-full glass text-white/60 hover:text-white"
          >
            <HiArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
