import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { homeServices } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="What We Do"
          title="Premium Digital Services"
          description="End-to-end solutions designed to elevate your brand and accelerate growth."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {homeServices.map((service) => (
            <motion.div key={service.slug} variants={fadeUp}>
              <Link
                to={service.href}
                className="group relative block h-full overflow-hidden rounded-2xl glass p-8 transition-all duration-300 hover:border-violet-500/30 hover:bg-foreground/[0.07]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-violet-600/5 group-hover:to-cyan-500/5" />
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 text-accent transition-transform duration-300 group-hover:scale-110">
                    <ServiceIcon name={service.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="mb-6 text-sm text-muted-foreground">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors group-hover:text-accent-cyan">
                    Learn More
                    <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
