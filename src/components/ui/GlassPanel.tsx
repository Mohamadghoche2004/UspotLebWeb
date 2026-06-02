import { cn } from '@/lib/cn'

interface GlassPanelProps {
  children: React.ReactNode
  className?: string
  strong?: boolean
}

export function GlassPanel({ children, className, strong = false }: GlassPanelProps) {
  return (
    <div className={cn(strong ? 'glass-strong' : 'glass', 'rounded-2xl', className)}>
      {children}
    </div>
  )
}
