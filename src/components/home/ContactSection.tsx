import { motion } from 'framer-motion'
import { ContactForm } from '@/components/contact/ContactForm'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeUp } from '@/lib/motion'

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Ready to Start Your Project?"
          description="Tell us about your vision. We'll respond within 24 hours with a tailored proposal."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <ContactForm compact />
        </motion.div>
      </div>
    </section>
  )
}
