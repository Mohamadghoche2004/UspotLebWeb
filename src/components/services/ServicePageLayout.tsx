import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { ServiceDetail } from '@/data/services'
import { homeServices } from '@/data/services'
import { PageHero } from '@/components/layout/PageHero'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { fadeUp, staggerContainer } from '@/lib/motion'

interface ServicePageLayoutProps {
  service: ServiceDetail
}

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const related = homeServices.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <PageHero
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.shortTitle },
        ]}
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center text-lg text-white/60"
          >
            {service.longDescription}
          </motion.p>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-2xl font-bold">What We Deliver</h2>
              <ul className="space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-2xl font-bold">Key Benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="mb-6 text-2xl font-bold">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <Badge key={tech} variant="gradient">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="mb-8 text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <motion.details
                  key={faq.question}
                  variants={fadeUp}
                  className="group glass rounded-xl p-6"
                >
                  <summary className="cursor-pointer list-none font-semibold text-white marker:content-none">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-white/60">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="mb-8 text-2xl font-bold">Related Services</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  to={s.href}
                  className="glass group rounded-xl p-6 transition-colors hover:border-violet-500/30"
                >
                  <ServiceIcon
                    name={s.icon}
                    className="mb-3 h-6 w-6 text-violet-400 transition-transform group-hover:scale-110"
                  />
                  <h3 className="font-semibold">{s.title}</h3>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Book a free consultation and let&apos;s discuss how we can help achieve your goals.
          </p>
          <Button to="/contact" size="lg" className="mt-8">
            Book Free Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
