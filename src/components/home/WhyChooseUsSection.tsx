import { motion } from 'framer-motion'
import { whyChooseUs } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function WhyChooseUsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The UspotLeb Advantage"
          description="We combine creativity, technology, and strategy to deliver exceptional results."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className={`glass rounded-2xl p-8 transition-colors hover:border-violet-500/20 ${
                index === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-1' : ''
              }`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 text-accent">
                <ServiceIcon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
