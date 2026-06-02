export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceDetail {
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  icon: string
  href: string
  deliverables: string[]
  benefits: string[]
  technologies: string[]
  faqs: ServiceFAQ[]
}

export const homeServices = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description:
      'Custom, high-performance websites and web applications built with modern frameworks and scalable architecture.',
    icon: 'code',
    href: '/services/web-development',
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Development',
    description:
      'Native-quality iOS and Android apps with React Native and Flutter for seamless cross-platform experiences.',
    icon: 'mobile',
    href: '/services/mobile-development',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'User-centered design that combines research, wireframing, and premium visuals to maximize engagement and conversions.',
    icon: 'design',
    href: '/services/ui-ux-design',
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    description:
      'Stunning visual assets, marketing materials, and creative designs that elevate your brand presence.',
    icon: 'graphic',
    href: '/services/graphic-design',
  },
  {
    slug: 'branding',
    title: 'Branding',
    description:
      'Complete brand identity systems including logos, guidelines, and visual language that define your market position.',
    icon: 'brand',
    href: '/services/branding',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description:
      'Data-driven marketing strategies including SEO, social advertising, and content that drives measurable growth.',
    icon: 'marketing',
    href: '/services/digital-marketing',
  },
] as const

export const allServices: ServiceDetail[] = [
  {
    slug: 'web-development',
    title: 'Custom Website Development',
    shortTitle: 'Web Development',
    description:
      'Enterprise-grade websites and full-stack web applications tailored to your business goals.',
    longDescription:
      'We build custom websites and full-stack web applications that combine stunning design with robust engineering. From marketing sites to complex SaaS platforms, our development team delivers scalable, secure, and performance-optimized solutions that drive real business results.',
    icon: 'code',
    href: '/services/web-development',
    deliverables: [
      'Custom website design & development',
      'Full-stack web applications',
      'E-commerce platforms',
      'CMS integration & customization',
      'API development & third-party integrations',
      'Performance optimization & security',
    ],
    benefits: [
      'Lightning-fast load times for better SEO and UX',
      'Scalable architecture that grows with your business',
      'Mobile-first responsive design on every device',
      'Clean, maintainable code following best practices',
      'Ongoing support and maintenance options',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS'],
    faqs: [
      {
        question: 'How long does a custom website take to build?',
        answer:
          'Timeline varies by scope. A marketing website typically takes 4-8 weeks, while complex web applications may take 3-6 months. We provide a detailed timeline during discovery.',
      },
      {
        question: 'Do you provide hosting and maintenance?',
        answer:
          'Yes. We offer managed hosting on AWS, regular updates, security monitoring, and ongoing maintenance packages to keep your site running smoothly.',
      },
      {
        question: 'Can you redesign my existing website?',
        answer:
          'Absolutely. We specialize in website redesigns that improve UX, performance, and conversions while preserving or migrating your existing content and SEO equity.',
      },
    ],
  },
  {
    slug: 'mobile-development',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Development',
    description:
      'Premium iOS and Android applications built with React Native and Flutter for cross-platform excellence.',
    longDescription:
      'Our mobile development team creates native-quality applications for iOS and Android using React Native and Flutter. We handle everything from concept to App Store launch, delivering apps that users love and businesses rely on.',
    icon: 'mobile',
    href: '/services/mobile-development',
    deliverables: [
      'iOS & Android app development',
      'Cross-platform React Native apps',
      'Flutter application development',
      'App Store & Google Play deployment',
      'Push notifications & offline support',
      'Backend API integration',
    ],
    benefits: [
      'Single codebase for iOS and Android saves time and cost',
      'Native performance and platform-specific UX patterns',
      'Seamless integration with existing systems and APIs',
      'App Store optimization for maximum visibility',
      'Post-launch analytics and iteration support',
    ],
    technologies: ['React Native', 'Flutter', 'Node.js', 'Firebase', 'AWS'],
    faqs: [
      {
        question: 'React Native or Flutter — which do you recommend?',
        answer:
          'It depends on your project. React Native excels when you have a web team familiar with React. Flutter offers exceptional UI consistency. We recommend the best fit during strategy.',
      },
      {
        question: 'Do you handle App Store submissions?',
        answer:
          'Yes. We manage the entire submission process for both Apple App Store and Google Play, including assets, descriptions, and compliance requirements.',
      },
      {
        question: 'Can you update an existing mobile app?',
        answer:
          'We regularly take over and modernize existing apps, whether built by another team or needing feature additions and performance improvements.',
      },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design Services',
    shortTitle: 'UI/UX Design',
    description:
      'Research-driven design that creates intuitive, beautiful, and conversion-focused digital experiences.',
    longDescription:
      'Great products start with great design. Our UI/UX team combines user research, information architecture, wireframing, and high-fidelity prototyping to create interfaces that delight users and achieve business objectives.',
    icon: 'design',
    href: '/services/ui-ux-design',
    deliverables: [
      'User research & persona development',
      'Information architecture & user flows',
      'Wireframes & interactive prototypes',
      'High-fidelity UI design',
      'Design systems & component libraries',
      'Usability testing & iteration',
    ],
    benefits: [
      'Reduced development costs through validated designs',
      'Higher conversion rates with optimized user flows',
      'Consistent brand experience across all touchpoints',
      'Accessible designs meeting WCAG standards',
      'Developer-ready Figma files and specifications',
    ],
    technologies: ['Figma', 'Adobe XD', 'Principle', 'Maze', 'Hotjar'],
    faqs: [
      {
        question: 'What is your UI/UX design process?',
        answer:
          'We follow a research-first approach: discovery, user research, wireframing, prototyping, visual design, and usability testing before handoff to development.',
      },
      {
        question: 'Do you design for existing development teams?',
        answer:
          'Yes. We deliver comprehensive design systems and developer-ready specs that integrate seamlessly with your in-house or external development team.',
      },
      {
        question: 'Can you improve an existing product\'s UX?',
        answer:
          'UX audits and redesigns are a core service. We identify friction points, propose improvements, and validate changes through testing before implementation.',
      },
    ],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design Services',
    shortTitle: 'Graphic Design',
    description:
      'Premium visual design for marketing, print, and digital assets that capture attention and communicate your message.',
    longDescription:
      'From social media graphics to comprehensive marketing campaigns, our graphic design team creates visually compelling assets that strengthen your brand and drive engagement across every channel.',
    icon: 'graphic',
    href: '/services/graphic-design',
    deliverables: [
      'Marketing & advertising creatives',
      'Social media content design',
      'Print materials & packaging design',
      'Presentation & pitch deck design',
      'Infographics & data visualization',
      'Email template design',
    ],
    benefits: [
      'Consistent visual identity across all materials',
      'Professional assets that build credibility',
      'Fast turnaround for campaign launches',
      'Print-ready and digital-optimized deliverables',
      'Unlimited revision rounds within scope',
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma'],
    faqs: [
      {
        question: 'Do you offer ongoing design support?',
        answer:
          'Yes. We offer monthly retainer packages for businesses that need consistent design support for marketing, social media, and campaign assets.',
      },
      {
        question: 'Can you match our existing brand guidelines?',
        answer:
          'We work within your established brand guidelines or help expand them to cover new channels and use cases while maintaining consistency.',
      },
      {
        question: 'What file formats do you deliver?',
        answer:
          'We deliver in all standard formats: AI, PSD, PDF, PNG, SVG, and web-optimized assets. Source files are always included.',
      },
    ],
  },
  {
    slug: 'branding',
    title: 'Branding & Identity Design',
    shortTitle: 'Branding',
    description:
      'Strategic brand identity systems that define who you are and differentiate you in the market.',
    longDescription:
      'Your brand is more than a logo. We develop comprehensive brand identities that communicate your values, resonate with your audience, and create lasting impressions across every touchpoint.',
    icon: 'brand',
    href: '/services/branding',
    deliverables: [
      'Brand strategy & positioning',
      'Logo design & visual identity',
      'Brand guidelines & style guide',
      'Typography & color systems',
      'Brand voice & messaging framework',
      'Business stationery & collateral',
    ],
    benefits: [
      'Stand out in competitive markets with a distinctive identity',
      'Build trust and recognition with consistent branding',
      'Attract your ideal customers with targeted positioning',
      'Scale your brand confidently across new channels',
      'Comprehensive guidelines for internal and partner use',
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Adobe InDesign'],
    faqs: [
      {
        question: 'How is branding different from logo design?',
        answer:
          'Logo design is one element of branding. Our branding service includes strategy, visual identity, messaging, guidelines, and applications across all touchpoints.',
      },
      {
        question: 'Can you rebrand an existing business?',
        answer:
          'Rebranding is one of our specialties. We manage the transition carefully to preserve brand equity while refreshing your identity for growth.',
      },
      {
        question: 'Do you provide brand guidelines?',
        answer:
          'Every branding project includes comprehensive brand guidelines covering logo usage, colors, typography, imagery, tone of voice, and application examples.',
      },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing Services',
    shortTitle: 'Digital Marketing',
    description:
      'Full-funnel digital marketing strategies that generate leads, drive sales, and maximize ROI.',
    longDescription:
      'Our digital marketing team combines SEO, paid advertising, social media, and content strategy to create integrated campaigns that deliver measurable results. We focus on data, optimization, and continuous improvement.',
    icon: 'marketing',
    href: '/services/digital-marketing',
    deliverables: [
      'SEO audit & optimization',
      'Google Ads & Meta advertising',
      'Social media strategy & management',
      'Content marketing & blog strategy',
      'Email marketing campaigns',
      'Analytics & conversion tracking',
    ],
    benefits: [
      'Data-driven campaigns with transparent reporting',
      'Integrated strategy across all digital channels',
      'Continuous A/B testing and optimization',
      'Scalable campaigns that grow with your budget',
      'Dedicated account management and strategy calls',
    ],
    technologies: ['Google Analytics', 'Google Ads', 'Meta Business Suite', 'SEMrush', 'Mailchimp'],
    faqs: [
      {
        question: 'What results can I expect from digital marketing?',
        answer:
          'Results vary by industry and budget. We set realistic KPIs during onboarding and provide monthly reports showing traffic, leads, conversions, and ROAS.',
      },
      {
        question: 'Do you manage social media accounts?',
        answer:
          'Yes. We offer full social media management including content creation, scheduling, community engagement, and paid social campaigns.',
      },
      {
        question: 'How long before SEO shows results?',
        answer:
          'SEO is a long-term strategy. Most clients see meaningful improvements in 3-6 months, with compounding returns over 12+ months.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return allServices.find((s) => s.slug === slug)
}

export const whyChooseUs = [
  {
    title: 'End-to-End Solutions',
    description: 'From strategy to design, development, and marketing — one team, one vision, seamless delivery.',
    icon: 'layers',
  },
  {
    title: 'Experienced Team',
    description: 'Senior specialists across development, design, and marketing with proven track records.',
    icon: 'team',
  },
  {
    title: 'Modern Technologies',
    description: 'We use cutting-edge tools and frameworks to build future-proof digital products.',
    icon: 'tech',
  },
  {
    title: 'Fast Delivery',
    description: 'Agile workflows and efficient processes ensure rapid turnaround without compromising quality.',
    icon: 'speed',
  },
  {
    title: 'Ongoing Support',
    description: 'Post-launch maintenance, updates, and optimization to keep your digital assets performing.',
    icon: 'support',
  },
  {
    title: 'Business-Focused Strategy',
    description: 'Every decision is driven by your business goals, ROI, and measurable outcomes.',
    icon: 'strategy',
  },
] as const

export const aboutPillars = [
  {
    title: 'Development',
    description: 'Robust, scalable code that powers exceptional digital experiences.',
    icon: 'code',
  },
  {
    title: 'Design',
    description: 'Premium visuals and intuitive interfaces that captivate and convert.',
    icon: 'design',
  },
  {
    title: 'Marketing',
    description: 'Data-driven strategies that amplify your reach and drive growth.',
    icon: 'marketing',
  },
] as const
