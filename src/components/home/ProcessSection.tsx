import { motion } from 'framer-motion'
import { processSteps } from '@/data/process'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Bring Your Vision to Life"
          description="A proven four-step process that ensures clarity, quality, and results at every stage."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          <div className="absolute top-8 left-8 hidden h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-violet-500/50 to-cyan-500/50 lg:hidden" />

          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
            <div className="absolute top-12 right-0 left-0 mx-auto h-0.5 w-[calc(100%-8rem)] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-cyan-500/30" />
            {processSteps.map((step, index) => (
              <motion.div key={step.step} variants={fadeUp} className="relative">
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 text-xl font-bold text-white shadow-lg shadow-violet-500/30">
                  {step.step}
                </div>
                <h3 className="mb-3 text-center text-xl font-bold">{step.title}</h3>
                <p className="text-center text-sm text-muted-foreground">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="absolute top-8 -right-3 hidden h-0.5 w-6 bg-cyan-400/50 lg:block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <div className="space-y-8 lg:hidden">
            {processSteps.map((step) => (
              <motion.div key={step.step} variants={fadeUp} className="relative pl-20">
                <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 text-xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
