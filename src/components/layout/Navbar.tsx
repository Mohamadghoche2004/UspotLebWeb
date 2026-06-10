import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { navLinks } from '@/data/site.config'
import { useNavbarScroll } from '@/hooks/useNavbarScroll'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/lib/cn'
import { useEffect } from 'react'

function ScrollLock({ open }: { open: boolean }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])
  return null
}

export function Navbar() {
  const scrolled = useNavbarScroll()

  return (
    <Disclosure as="header" className="fixed top-0 right-0 left-0 z-50">
      {({ open }) => {
        const showSolid = open || scrolled

        return (
          <>
            <ScrollLock open={open} />

            <div className="relative">
              {/* Background layer — opacity only, no blur toggle */}
              <div
                aria-hidden
                className={cn(
                  'pointer-events-none absolute inset-0 border-b transition-[background-color,border-color,box-shadow] duration-300 ease-out',
                  showSolid
                    ? 'border-border-subtle bg-background/95 shadow-lg shadow-[var(--nav-shadow)]'
                    : 'border-transparent bg-transparent shadow-none',
                )}
              />

              <div className="container-custom relative">
                <div className="relative flex h-16 items-center lg:h-[4.5rem]">
                  <div className="min-w-0 flex-1 pr-14 lg:pr-0">
                    <Logo
                      staticImage
                      className="max-w-[min(55vw,200px)] lg:max-w-none"
                    />
                  </div>

                  <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.href}
                        to={link.href}
                        className={({ isActive }) =>
                          cn(
                            'relative text-sm font-medium transition-colors hover:text-foreground',
                            isActive ? 'text-foreground' : 'text-muted-foreground',
                          )
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {link.label}
                            {isActive && (
                              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                            )}
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>

                  <div className="ml-4 hidden items-center gap-3 lg:flex">
                    <ThemeToggle />
                    <Button to="/contact" size="sm">
                      Book Consultation
                    </Button>
                  </div>

                  <div className="absolute inset-y-0 right-0 flex items-center gap-2 lg:hidden">
                    <ThemeToggle />
                    <DisclosureButton
                      className="group inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-foreground/10 text-foreground hover:bg-foreground/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                    >
                      <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
                      <HiMenuAlt3
                        aria-hidden
                        className="size-6 group-data-open:hidden"
                      />
                      <HiX aria-hidden className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel
              transition
              className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border-subtle bg-surface transition duration-200 ease-out data-closed:pointer-events-none data-closed:opacity-0 lg:hidden"
            >
              <nav className="container-custom flex flex-col gap-2 py-8" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <DisclosureButton
                    key={link.href}
                    as={NavLink}
                    to={link.href}
                    className={({ isActive }: { isActive: boolean }) =>
                      cn(
                        'block w-full rounded-xl px-4 py-3 text-left text-lg font-medium transition-colors',
                        isActive
                          ? 'bg-foreground/15 text-foreground'
                          : 'text-foreground hover:bg-foreground/10',
                      )
                    }
                  >
                    {link.label}
                  </DisclosureButton>
                ))}
                <DisclosureButton
                  as={NavLink}
                  to="/contact"
                  className="mt-4 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 text-base font-medium text-white shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:to-cyan-400"
                >
                  Book Consultation
                </DisclosureButton>
              </nav>
            </DisclosurePanel>
          </>
        )
      }}
    </Disclosure>
  )
}
