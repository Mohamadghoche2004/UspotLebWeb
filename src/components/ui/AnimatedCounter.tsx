import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
}

export function AnimatedCounter({ value, suffix = '+', label }: AnimatedCounterProps) {
  const { ref, count } = useAnimatedCounter(value)

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="block text-4xl font-bold gradient-text md:text-5xl lg:text-6xl"
      >
        {count}
        {suffix}
      </span>
      <span className="mt-2 block text-sm text-muted-foreground md:text-base">{label}</span>
    </div>
  )
}
