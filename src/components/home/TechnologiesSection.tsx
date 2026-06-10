import { motion } from 'framer-motion'
import { technologies } from '@/data/technologies'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function TechnologiesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies We Master"
          description="We leverage industry-leading tools and frameworks to build future-proof solutions."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {technologies.map((group) => (
            <motion.div key={group.category} variants={fadeUp} className="glass rounded-2xl p-6">
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-foreground/5 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-violet-500/20 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
