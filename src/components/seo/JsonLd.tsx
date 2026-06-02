import { useLocation } from 'react-router-dom'
import { getSEOForPath } from '@/data/seo.meta'
import { siteConfig } from '@/data/site.config'
import { getServiceBySlug } from '@/data/services'
import { teamMembers } from '@/data/team'

export function JsonLd() {
  const { pathname } = useLocation()
  const seo = getSEOForPath(pathname)
  const schemas: Record<string, unknown>[] = []

  if (seo.schemaTypes.includes('Organization')) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.logo.light}`,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      sameAs: Object.values(siteConfig.social),
    })
  }

  if (seo.schemaTypes.includes('LocalBusiness')) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
    })
  }

  if (seo.schemaTypes.includes('Service') && seo.serviceSlug) {
    const service = getServiceBySlug(seo.serviceSlug)
    if (service) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: 'Worldwide',
        serviceType: service.shortTitle,
      })
    }
  }

  if (seo.schemaTypes.includes('FAQPage') && seo.serviceSlug) {
    const service = getServiceBySlug(seo.serviceSlug)
    if (service?.faqs.length) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      })
    }
  }

  if (seo.schemaTypes.includes('Person')) {
    teamMembers.forEach((member) => {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role,
        worksFor: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
      })
    })
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
