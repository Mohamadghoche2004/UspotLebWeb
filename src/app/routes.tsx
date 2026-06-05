import { lazy } from 'react'
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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'services/web-development', element: <WebDevelopment /> },
      { path: 'services/mobile-development', element: <MobileDevelopment /> },
      { path: 'services/ui-ux-design', element: <UiUxDesign /> },
      { path: 'services/graphic-design', element: <GraphicDesign /> },
      { path: 'services/digital-marketing', element: <DigitalMarketing /> },
      { path: 'services/branding', element: <Branding /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])
