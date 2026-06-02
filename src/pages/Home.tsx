import { HeroSection } from '@/components/home/HeroSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { AboutSection } from '@/components/home/AboutSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { PortfolioSection } from '@/components/home/PortfolioSection'
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { TechnologiesSection } from '@/components/home/TechnologiesSection'
import { StatsSection } from '@/components/home/StatsSection'
import { ContactSection } from '@/components/home/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <TechnologiesSection />
      <StatsSection />
      <ContactSection />
    </>
  )
}
