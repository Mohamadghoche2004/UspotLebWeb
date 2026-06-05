export interface TeamMember {
  name: string
  role: string
  bio: string
  isOwner?: boolean
  initials: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Mohamad AL Ghoche',
    role: 'Owner · Full Stack Developer & Meta Ads',
    bio: 'Founder of UspotLeb. Builds full-stack web applications and drives growth through Meta Ads Manager campaigns that deliver measurable results.',
    isOwner: true,
    initials: 'MG',
  },
  {
    name: 'Dana AL Ghoche',
    role: 'Graphic Designer · UI/UX · Frontend Developer',
    bio: 'Creates stunning visual identities and intuitive interfaces, bringing brands to life from concept through polished frontend implementation.',
    initials: 'DG',
  },
  {
    name: 'Mahmoud Ramadan',
    role: 'Full Stack · Mobile & AI Apps Developer',
    bio: 'Develops full-stack web and mobile applications, with expertise in building intelligent AI-powered solutions for modern businesses.',
    initials: 'MR',
  },
  {
    name: 'Rafeh Saayfen',
    role: 'Full Stack Developer',
    bio: 'Engineers robust, scalable web applications with clean architecture and modern technologies across the full development stack.',
    initials: 'RS',
  },
]

export const values = [
  {
    title: 'Excellence',
    description: 'We hold every pixel and line of code to the highest standard of quality.',
  },
  {
    title: 'Partnership',
    description: 'Your success is our success. We collaborate transparently at every stage.',
  },
  {
    title: 'Innovation',
    description: 'We leverage cutting-edge technologies to keep you ahead of the competition.',
  },
  {
    title: 'Results',
    description: 'Beautiful design means nothing without measurable business impact.',
  },
] as const
