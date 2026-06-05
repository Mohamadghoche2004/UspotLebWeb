import { useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { PageTransition } from './PageTransition'
import { AnimatedOutlet } from './AnimatedOutlet'
import { SEOHead } from '@/components/seo/SEOHead'
import { JsonLd } from '@/components/seo/JsonLd'

export function Layout() {
  const location = useLocation()

  return (
    <>
      <SEOHead />
      <JsonLd />
      <Navbar />
      <PageTransition pageKey={location.pathname}>
        <AnimatedOutlet />
      </PageTransition>
      <Footer />
    </>
  )
}
