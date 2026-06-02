import { motion } from 'framer-motion'
import type { PortfolioProject } from '@/data/portfolio'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/cn'
import { fadeUp } from '@/lib/motion'

interface PortfolioCardProps {
  project: PortfolioProject
  onClick?: () => void
  compact?: boolean
}

export function PortfolioCard({ project, onClick, compact = false }: PortfolioCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        'overflow-hidden rounded-2xl glass',
        onClick && 'group cursor-pointer transition-colors hover:border-violet-500/30',
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          'flex items-center justify-center',
          project.logoBg === 'light' ? 'bg-white' : 'bg-black',
          compact ? 'aspect-[16/10] p-8' : 'aspect-[16/10] p-10 md:p-12',
        )}
      >
        <img
          src={project.logo}
          alt={project.title}
          loading="lazy"
          className="max-h-20 w-auto max-w-[200px] object-contain md:max-h-24"
        />
      </div>
      <div className={cn('border-t border-white/10', compact ? 'p-5' : 'p-6')}>
        <Badge variant="gradient" className="mb-3">
          {project.category}
        </Badge>
        <h3 className={cn('font-bold text-white', compact ? 'text-xl' : 'text-2xl')}>
          {project.title}
        </h3>
        {!compact && (
          <p className="mt-2 line-clamp-2 text-sm text-white/70">{project.description}</p>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.slice(0, compact ? 2 : 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm font-semibold text-cyan-400">{project.results}</p>
      </div>
    </motion.article>
  )
}
