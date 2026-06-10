import { HiMoon, HiSun } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/cn'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'inline-flex size-10 items-center justify-center rounded-xl border border-border-subtle bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400',
        className,
      )}
    >
      {isDark ? <HiSun className="size-5" /> : <HiMoon className="size-5" />}
    </button>
  )
}
