import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { siteConfig } from '@/data/site.config'
import { Button } from '@/components/ui/Button'
import { GradientOrb } from '@/components/ui/GradientOrb'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <GradientOrb className="-top-20 left-1/4" color="violet" size="lg" />
      <GradientOrb className="top-1/3 -right-20" color="cyan" size="md" />
      <GradientOrb className="bottom-0 left-1/2" color="fuchsia" size="sm" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-violet-400/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="mb-6 inline-block rounded-full glass px-4 py-2 text-sm font-medium text-violet-300">
              Full-Service Digital Agency
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            {siteConfig.tagline.split(' ').slice(0, 3).join(' ')}{' '}
            <span className="gradient-text">
              {siteConfig.tagline.split(' ').slice(3).join(' ')}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl"
          >
            Custom websites, mobile apps, branding, UI/UX design, and digital marketing
            solutions that help businesses grow.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button to="/contact" size="lg">
              Book Free Consultation
            </Button>
            <Button to="/portfolio" variant="outline" size="lg">
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex justify-center"
        >
          <motion.a
            href="#services"
            aria-label="Scroll to services"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex h-12 w-12 items-center justify-center rounded-full glass text-white/60 hover:text-white"
          >
            <HiArrowDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
