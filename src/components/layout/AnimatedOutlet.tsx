import { Suspense, useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { PageLoader } from './PageLoader'

export function AnimatedOutlet() {
  const location = useLocation()
  const outlet = useOutlet()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return <Suspense fallback={<PageLoader />}>{outlet}</Suspense>
}
