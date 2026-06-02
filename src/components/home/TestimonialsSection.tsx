import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { testimonials } from '@/data/testimonials'
import { ClientLogo } from '@/components/ui/ClientLogo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = () => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (prefersReducedMotion) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next, prefersReducedMotion])

  const testimonial = testimonials[current]

  return (
    <section className="section-padding bg-surface/30">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from businesses we've helped grow."
        />

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-8 md:p-12"
            >
              <p className="mb-8 text-lg leading-relaxed text-white/80 md:text-xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <ClientLogo
                  src={testimonial.logo}
                  alt={testimonial.company}
                  background={testimonial.logoBg}
                />
                <cite className="not-italic font-semibold text-white">{testimonial.company}</cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-white/70 hover:text-white"
            >
              <HiChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? 'w-8 bg-violet-500' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-white/70 hover:text-white"
            >
              <HiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
