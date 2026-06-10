import { motion } from 'framer-motion'
import { teamMembers, values } from '@/data/team'
import { siteConfig } from '@/data/site.config'
import { PageHero } from '@/components/layout/PageHero'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function About() {
  const stats = [
    { value: siteConfig.stats.projects, label: 'Projects Completed' },
    { value: siteConfig.stats.clients, label: 'Happy Clients' },
    { value: siteConfig.stats.years, label: 'Years Experience' },
    { value: siteConfig.stats.team, label: 'Team Members' },
  ]

  return (
    <>
      <PageHero
        title="About Us"
        description="We're a passionate team of developers, designers, and marketers dedicated to building exceptional digital experiences."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              To empower businesses of all sizes with premium digital solutions that drive growth,
              build trust, and create lasting impact. We believe great design and technology should
              be accessible to every ambitious brand.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeUp} className="glass rounded-2xl p-6 text-center">
                <h3 className="mb-2 font-display text-lg font-bold text-accent">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-custom">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold"
          >
            Meet Our Team
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {teamMembers.map((member) => (
              <motion.article key={member.name} variants={fadeUp} className="glass rounded-2xl overflow-hidden">
                <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-violet-600/30 to-cyan-500/20">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-display text-5xl font-bold text-foreground">{member.initials}</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="font-bold">{member.name}</h3>
                    {member.isOwner && (
                      <Badge variant="gradient" className="text-[10px]">
                        Owner
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-accent">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Ready to bring your vision to life? We&apos;d love to hear from you.
          </p>
          <Button to="/contact" size="lg" className="mt-8">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
