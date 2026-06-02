import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { PageTransition } from './PageTransition'
import { SEOHead } from '@/components/seo/SEOHead'
import { JsonLd } from '@/components/seo/JsonLd'

export function Layout() {
  const location = useLocation()

  return (
    <>
      <SEOHead />
      <JsonLd />
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </>
  )
}
