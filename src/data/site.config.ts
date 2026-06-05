export const siteConfig = {
  name: 'UspotLeb',
  tagline: 'Transforming Ideas Into Powerful Digital Experiences',
  description:
    'Full-service digital agency specializing in custom websites, mobile apps, UI/UX design, branding, and digital marketing for startups and businesses worldwide.',
  url: import.meta.env.VITE_SITE_URL || 'https://yourdomain.com',
  logo: {
    light: '/logo-white.png',
    dark: '/logo-dark.png',
  },
  email: 'uspotleb@gmail.com',
  phone: '+961 76646946',
  address: {
    street: 'Beirut Digital District',
    city: 'Beirut',
    region: 'Beirut',
    postalCode: '1107',
    country: 'LB',
  },
  social: {
    twitter: 'https://twitter.com/uspotleb',
    linkedin: 'https://linkedin.com/company/uspotleb',
    instagram: 'https://instagram.com/uspotleb',
    facebook: 'https://facebook.com/uspotleb',
  },
  stats: {
    projects: 50,
    clients: 40,
    years: 5,
    team: 4,
  },
} as const

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export const serviceOptions = [
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Graphic Design',
  'Branding',
  'Digital Marketing',
  'SEO Optimization',
  'E-Commerce Solutions',
  'Business Automation',
  'Other',
] as const

export const budgetOptions = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
  'Not sure yet',
] as const
