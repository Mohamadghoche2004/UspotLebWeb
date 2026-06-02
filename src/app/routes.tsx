import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const Home = lazy(() => import('@/pages/Home'))
const Services = lazy(() => import('@/pages/Services'))
const WebDevelopment = lazy(() => import('@/pages/WebDevelopment'))
const MobileDevelopment = lazy(() => import('@/pages/MobileDevelopment'))
const UiUxDesign = lazy(() => import('@/pages/UiUxDesign'))
const GraphicDesign = lazy(() => import('@/pages/GraphicDesign'))
const DigitalMarketing = lazy(() => import('@/pages/DigitalMarketing'))
const Branding = lazy(() => import('@/pages/Branding'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />
    </div>
  )
}

function withSuspense(Component: React.ComponentType) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: 'services', element: withSuspense(Services) },
      { path: 'services/web-development', element: withSuspense(WebDevelopment) },
      { path: 'services/mobile-development', element: withSuspense(MobileDevelopment) },
      { path: 'services/ui-ux-design', element: withSuspense(UiUxDesign) },
      { path: 'services/graphic-design', element: withSuspense(GraphicDesign) },
      { path: 'services/digital-marketing', element: withSuspense(DigitalMarketing) },
      { path: 'services/branding', element: withSuspense(Branding) },
      { path: 'portfolio', element: withSuspense(Portfolio) },
      { path: 'about', element: withSuspense(About) },
      { path: 'contact', element: withSuspense(Contact) },
    ],
  },
])
