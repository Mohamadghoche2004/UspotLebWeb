import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioProjects, portfolioCategories, type PortfolioCategory } from '@/data/portfolio'
import { PortfolioCard } from '@/components/portfolio/PortfolioCard'
import { PageHero } from '@/components/layout/PageHero'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | 'All'>('All')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filtered =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory)

  const selected = portfolioProjects.find((p) => p.id === selectedId)

  return (
    <>
      <PageHero
        title="Our Portfolio"
        description="Explore our work across web development, dashboards, landing pages, and e-commerce."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio' },
        ]}
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {(['All', ...portfolioCategories] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all',
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white'
                    : 'glass text-muted-foreground hover:text-foreground',
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <PortfolioCard
                  key={project.id}
                  project={project}
                  compact
                  onClick={() => setSelectedId(project.id)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overlay-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-title"
            >
              <div
                className={cn(
                  'mb-6 flex items-center justify-center rounded-xl p-10',
                  selected.logoBg === 'light' ? 'bg-white' : 'bg-black',
                )}
              >
                <img
                  src={selected.logo}
                  alt={selected.title}
                  className="max-h-28 w-auto max-w-full object-contain"
                />
              </div>
              <Badge variant="gradient" className="mb-3">
                {selected.category}
              </Badge>
              <h2 id="project-title" className="text-2xl font-bold">
                {selected.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{selected.description}</p>
              <p className="mt-4 font-semibold text-accent-cyan">{selected.results}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <Button className="mt-6" to="/contact" onClick={() => setSelectedId(null)}>
                Start a Similar Project
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="section-padding section-alt">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">Have a Project in Mind?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Let&apos;s create something exceptional together.
          </p>
          <Button to="/contact" size="lg" className="mt-8">
            Get In Touch
          </Button>
        </div>
      </section>
    </>
  )
}
