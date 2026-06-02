import { getServiceBySlug } from '@/data/services'
import { ServicePageLayout } from '@/components/services/ServicePageLayout'
import { Navigate } from 'react-router-dom'

export default function Branding() {
  const service = getServiceBySlug('branding')
  if (!service) return <Navigate to="/services" replace />
  return <ServicePageLayout service={service} />
}
