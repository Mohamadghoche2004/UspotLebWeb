export type PortfolioCategory =
  | 'Dashboard'
  | 'Landing Page'
  | 'Restaurant'
  | 'E-Commerce'
  | 'Education'

export type LogoBackground = 'light' | 'dark'

export interface PortfolioProject {
  id: string
  title: string
  category: PortfolioCategory
  description: string
  logo: string
  logoBg: LogoBackground
  technologies: string[]
  results: string
  featured?: boolean
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'easy-tek',
    title: 'Easy Tek',
    category: 'Dashboard',
    description:
      'A custom rental management dashboard for a gaming shop — built with Next.js full-stack (frontend and backend). Track inventory, bookings, returns, and daily operations in one streamlined interface.',
    logo: '/clients/easy-tek.png',
    logoBg: 'dark',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    results: 'Smoother game rentals & shop operations',
    featured: true,
  },
  {
    id: 'gleam',
    title: 'Gleam',
    category: 'Landing Page',
    description:
      'An elegant landing page for a boutique shop selling handcrafted candles and macramé — designed to showcase products beautifully and convert visitors into customers.',
    logo: '/clients/gleam.png',
    logoBg: 'dark',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    results: 'Client highly satisfied with the result',
    featured: true,
  },
  {
    id: 'street-bites',
    title: 'Street Bites',
    category: 'Restaurant',
    description:
      'A modern digital menu for Street Bites with QR code access — guests scan, browse the full menu on their phones, and enjoy a fast, contactless dining experience.',
    logo: '/clients/street-bites.png',
    logoBg: 'dark',
    technologies: ['React', 'Responsive Design', 'QR Integration'],
    results: 'Very satisfied — seamless menu access',
    featured: true,
  },
  {
    id: 'powerontop',
    title: 'Powerontop',
    category: 'E-Commerce',
    description:
      'A full e-commerce website for an electronics and gadgets shop — product catalog, cart, checkout, and a polished shopping experience built for growth.',
    logo: '/clients/powerontop.png',
    logoBg: 'light',
    technologies: ['React', 'Node.js', 'E-Commerce', 'Payment Integration'],
    results: 'Fully satisfied — ready to sell online',
    featured: true,
  },
  {
    id: 'unique-minds',
    title: 'Unique Minds',
    category: 'Education',
    description:
      'Unique Minds was founded with a clear mission: to bridge the gap between traditional education and the skills required for the future. We empower the next generation by providing schools, universities, and technical institutes with advanced international curricula, teaching methods, and hands-on tools. Specializing in technology, engineering, computer science, and Artificial Intelligence (AI), we go beyond theory to deliver end-to-end solutions — including professional educator training, cutting-edge AI software, and robust infrastructure. By bringing world-class educational resources to Lebanon and the broader Arab region, we ensure academic institutions are fully equipped to prepare students for the global digital economy.',
    logo: '/clients/unique-minds.png',
    logoBg: 'light',
    technologies: ['React', 'TypeScript', 'Node.js', 'AI Integration'],
    results: 'Empowering institutions for the digital economy',
    featured: false,
  },
]

export const portfolioCategories: PortfolioCategory[] = [
  'Dashboard',
  'Landing Page',
  'Restaurant',
  'E-Commerce',
  'Education',
]
