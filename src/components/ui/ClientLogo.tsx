import { cn } from '@/lib/cn'

interface ClientLogoProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  background?: 'light' | 'dark'
  className?: string
}

const sizes = {
  sm: { box: 'h-14 w-14 p-2', img: 'max-h-10 max-w-10' },
  md: { box: 'h-16 w-16 p-2.5', img: 'max-h-12 max-w-12' },
  lg: { box: 'h-28 w-full max-w-[220px] p-6', img: 'max-h-20 max-w-full' },
}

export function ClientLogo({
  src,
  alt,
  size = 'md',
  background = 'dark',
  className,
}: ClientLogoProps) {
  const s = sizes[size]

  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center rounded-xl ring-2 ring-violet-500/20',
        background === 'light' ? 'bg-white' : 'bg-black',
        s.box,
        className,
      )}
    >
      <img src={src} alt={alt} className={cn(s.img, 'object-contain')} loading="lazy" />
    </div>
  )
}
