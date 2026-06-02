import { motion } from 'framer-motion'
import { aboutPillars } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function AboutSection() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Crafting Digital Excellence Since Day One"
              description=""
              align="left"
            />
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 text-white/60"
            >
              <p>
                We are a full-service digital agency passionate about transforming ideas into
                powerful digital experiences. Our mission is to help startups, small businesses,
                and enterprises achieve their goals through exceptional design, development, and
                marketing.
              </p>
              <p>
                With expertise spanning custom web development, mobile applications, UI/UX design,
                branding, and digital marketing, we deliver end-to-end solutions that drive
                measurable results. Our approach combines strategic thinking with creative
                execution and technical excellence.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
          >
            {aboutPillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="glass rounded-2xl p-6 text-center lg:text-left xl:text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400 lg:mx-0 xl:mx-auto">
                  <ServiceIcon name={pillar.icon} className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">{pillar.title}</h3>
                <p className="text-sm text-white/60">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
