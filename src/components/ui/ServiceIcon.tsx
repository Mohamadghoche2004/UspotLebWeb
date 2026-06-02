import {
  HiCode,
  HiDeviceMobile,
  HiColorSwatch,
  HiPhotograph,
  HiSparkles,
  HiTrendingUp,
  HiUserGroup,
  HiLightningBolt,
  HiSupport,
  HiChartBar,
  HiCollection,
} from 'react-icons/hi'
import type { IconType } from 'react-icons'

const iconMap: Record<string, IconType> = {
  code: HiCode,
  mobile: HiDeviceMobile,
  design: HiColorSwatch,
  graphic: HiPhotograph,
  brand: HiSparkles,
  marketing: HiTrendingUp,
  team: HiUserGroup,
  tech: HiCode,
  speed: HiLightningBolt,
  support: HiSupport,
  strategy: HiChartBar,
  layers: HiCollection,
}

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? HiCode
  return <Icon className={className} aria-hidden />
}
