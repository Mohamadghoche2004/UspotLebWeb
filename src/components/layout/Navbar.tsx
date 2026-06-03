import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks } from '@/data/site.config'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  const headerOpaque = mobileOpen || scrolled

  const mobileMenu =
    typeof document !== 'undefined' ? (
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm lg:hidden"
              aria-label="Close menu"
              onClick={closeMobile}
            />

            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 top-16 bottom-0 z-[70] overflow-y-auto bg-surface lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="container-custom flex flex-col gap-2 py-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.href}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-xl px-4 py-3 text-lg font-medium transition-colors',
                          isActive
                            ? 'bg-white/15 text-white'
                            : 'text-white/90 hover:bg-white/10',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-4"
                >
                  <Button to="/contact" className="w-full" onClick={closeMobile}>
                    Book Consultation
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    ) : null

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-[80] transition-all duration-300',
          headerOpaque
            ? 'border-b border-white/10 bg-background/95 py-3 shadow-lg shadow-black/20 backdrop-blur-xl'
            : 'bg-transparent py-5',
        )}
      >
        <nav
          className="container-custom flex w-full min-w-0 items-center justify-between gap-3 overflow-x-hidden"
          aria-label="Main navigation"
        >
          <div className="min-w-0 max-w-[min(55vw,200px)] shrink">
            <Logo onClick={closeMobile} className="max-w-full" />
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'relative text-sm font-medium transition-colors hover:text-white',
                    isActive ? 'text-white' : 'text-white/60',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-violet-400 to-cyan-400"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button to="/contact" size="sm">
              Book Consultation
            </Button>
          </div>

          <button
            type="button"
            className="relative z-[81] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {mobileMenu && createPortal(mobileMenu, document.body)}
    </>
  )
}
