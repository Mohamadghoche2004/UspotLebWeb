import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site.config'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeUp } from '@/lib/motion'

export function StatsSection() {
  const stats = [
    { value: siteConfig.stats.projects, label: 'Projects Completed' },
    { value: siteConfig.stats.clients, label: 'Happy Clients' },
    { value: siteConfig.stats.years, label: 'Years Experience' },
    { value: siteConfig.stats.team, label: 'Team Members' },
  ]

  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <SectionHeading
          eyebrow="By The Numbers"
          title="Results That Speak"
          description="Our track record demonstrates consistent delivery and client satisfaction."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
