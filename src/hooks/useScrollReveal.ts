import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useScrollReveal() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return {
    initial: prefersReducedMotion ? 'visible' : 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-80px' },
  }
}
