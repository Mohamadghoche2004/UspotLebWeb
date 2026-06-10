import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { allServices } from '@/data/services'
import { PageHero } from '@/components/layout/PageHero'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { Button } from '@/components/ui/Button'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Comprehensive digital solutions tailored to your business needs — from concept to launch and beyond."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-6 md:grid-cols-2"
          >
            {allServices.map((service) => (
              <motion.article key={service.slug} variants={fadeUp}>
                <Link
                  to={service.href}
                  className="group block h-full glass rounded-2xl p-8 transition-all hover:border-violet-500/30"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 text-accent">
                    <ServiceIcon name={service.icon} className="h-7 w-7" />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold">{service.shortTitle}</h2>
                  <p className="mb-6 text-muted-foreground">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.deliverables.slice(0, 3).map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:text-accent-cyan">
                    View Details
                    <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">Not Sure Where to Start?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Schedule a free consultation and we&apos;ll help you identify the best solution for your business.
          </p>
          <Button to="/contact" size="lg" className="mt-8">
            Book Free Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
