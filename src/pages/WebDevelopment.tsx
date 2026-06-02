import { getServiceBySlug } from '@/data/services'
import { ServicePageLayout } from '@/components/services/ServicePageLayout'
import { Navigate } from 'react-router-dom'

export default function WebDevelopment() {
  const service = getServiceBySlug('web-development')
  if (!service) return <Navigate to="/services" replace />
  return <ServicePageLayout service={service} />
}
