import { useEffect, useState } from 'react'

/** Become solid after scrolling down past this (px) */
const SCROLL_SOLID = 48
/** Become transparent only when near the top (px) */
const SCROLL_TOP = 8

/**
 * Hysteresis + rAF: avoids flicker when scrollY bounces around a single threshold.
 */
export function useNavbarScroll() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    let rafId = 0

    const update = () => {
      const y = window.scrollY
      setSolid((prev) => {
        if (y > SCROLL_SOLID) return true
        if (y < SCROLL_TOP) return false
        return prev
      })
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return solid
}
