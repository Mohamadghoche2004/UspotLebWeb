import { getServiceBySlug } from '@/data/services'
import { ServicePageLayout } from '@/components/services/ServicePageLayout'
import { Navigate } from 'react-router-dom'

export default function MobileDevelopment() {
  const service = getServiceBySlug('mobile-development')
  if (!service) return <Navigate to="/services" replace />
  return <ServicePageLayout service={service} />
}
