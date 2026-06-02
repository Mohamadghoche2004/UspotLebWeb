import { siteConfig } from './site.config'

export interface PageSEO {
  path: string
  title: string
  description: string
  ogType?: string
  schemaTypes: ('Organization' | 'LocalBusiness' | 'Service' | 'FAQPage' | 'Person')[]
  serviceSlug?: string
}

export const seoPages: PageSEO[] = [
  {
    path: '/',
    title: `${siteConfig.name} | Full-Service Digital Agency`,
    description: siteConfig.description,
    ogType: 'website',
    schemaTypes: ['Organization', 'LocalBusiness'],
  },
  {
    path: '/services',
    title: `Our Services | ${siteConfig.name}`,
    description:
      'Explore our full range of digital services including web development, mobile apps, UI/UX design, branding, and digital marketing.',
    schemaTypes: ['Organization'],
  },
  {
    path: '/services/web-development',
    title: `Custom Web Development | ${siteConfig.name}`,
    description:
      'Enterprise-grade custom websites and full-stack web applications built with React, Node.js, and modern technologies.',
    schemaTypes: ['Organization', 'Service', 'FAQPage'],
    serviceSlug: 'web-development',
  },
  {
    path: '/services/mobile-development',
    title: `Mobile App Development | ${siteConfig.name}`,
    description:
      'Premium iOS and Android app development with React Native and Flutter. Cross-platform excellence from concept to launch.',
    schemaTypes: ['Organization', 'Service', 'FAQPage'],
    serviceSlug: 'mobile-development',
  },
  {
    path: '/services/ui-ux-design',
    title: `UI/UX Design Services | ${siteConfig.name}`,
    description:
      'Research-driven UI/UX design that creates intuitive, beautiful, and conversion-focused digital experiences.',
    schemaTypes: ['Organization', 'Service', 'FAQPage'],
    serviceSlug: 'ui-ux-design',
  },
  {
    path: '/services/graphic-design',
    title: `Graphic Design Services | ${siteConfig.name}`,
    description:
      'Premium graphic design for marketing, social media, print, and digital assets that capture attention.',
    schemaTypes: ['Organization', 'Service', 'FAQPage'],
    serviceSlug: 'graphic-design',
  },
  {
    path: '/services/digital-marketing',
    title: `Digital Marketing Services | ${siteConfig.name}`,
    description:
      'Full-funnel digital marketing including SEO, paid ads, social media, and content strategy for measurable growth.',
    schemaTypes: ['Organization', 'Service', 'FAQPage'],
    serviceSlug: 'digital-marketing',
  },
  {
    path: '/services/branding',
    title: `Branding & Identity Design | ${siteConfig.name}`,
    description:
      'Strategic brand identity systems including logo design, brand guidelines, and visual language for market differentiation.',
    schemaTypes: ['Organization', 'Service', 'FAQPage'],
    serviceSlug: 'branding',
  },
  {
    path: '/portfolio',
    title: `Portfolio & Case Studies | ${siteConfig.name}`,
    description:
      'Explore our portfolio of successful web, mobile, branding, and marketing projects with measurable results.',
    schemaTypes: ['Organization'],
  },
  {
    path: '/about',
    title: `About Us | ${siteConfig.name}`,
    description:
      'Meet the team behind UspotLeb. Learn about our mission, values, and approach to building exceptional digital products.',
    schemaTypes: ['Organization', 'Person'],
  },
  {
    path: '/contact',
    title: `Contact Us | ${siteConfig.name}`,
    description:
      'Get in touch for a free consultation. Tell us about your project and let us help you achieve your digital goals.',
    schemaTypes: ['Organization', 'LocalBusiness'],
  },
]

export function getSEOForPath(pathname: string): PageSEO {
  const normalized = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname
  return seoPages.find((p) => p.path === normalized) ?? seoPages[0]
}
