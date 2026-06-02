import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { portfolioProjects } from '@/data/portfolio'
import { PortfolioCard } from '@/components/portfolio/PortfolioCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { staggerContainer } from '@/lib/motion'

const featured = portfolioProjects.filter((p) => p.featured).slice(0, 4)

export function PortfolioSection() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Projects"
          description="Real results for real businesses. Explore a selection of our recent work."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 md:grid-cols-2"
        >
          {featured.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button to="/portfolio" variant="outline">
            View All Projects
            <HiArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
