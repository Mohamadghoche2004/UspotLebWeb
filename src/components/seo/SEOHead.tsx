import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { getSEOForPath } from '@/data/seo.meta'
import { siteConfig } from '@/data/site.config'

export function SEOHead() {
  const { pathname } = useLocation()
  const seo = getSEOForPath(pathname)
  const canonicalUrl = `${siteConfig.url}${pathname === '/' ? '' : pathname}`
  const ogImage = `${siteConfig.url}/og-default.svg`

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={seo.ogType ?? 'website'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
