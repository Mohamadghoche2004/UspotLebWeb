import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { siteConfig } from '@/data/site.config'
import { PageHero } from '@/components/layout/PageHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { fadeUp } from '@/lib/motion'

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a project in mind? Get in touch for a free consultation and custom proposal."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="mb-6 text-2xl font-bold">Get In Touch</h2>
              <p className="mb-8 text-white/60">
                Fill out the form and our team will respond within 24 hours. Or reach us directly
                using the contact details below.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                    <HiMail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                    <HiPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                    <HiLocationMarker className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-white/60">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.region}{' '}
                      {siteConfig.address.postalCode}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 glass rounded-2xl p-6">
                <p className="text-sm font-medium text-violet-400">Business Hours</p>
                <p className="mt-2 text-white/60">Monday – Friday: 9:00 AM – 6:00 PM PST</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
