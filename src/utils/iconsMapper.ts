import { PrimeIcons } from '@primevue/core/api'

export const getIcon = (icon: keyof typeof PrimeIcons): string => {
  return PrimeIcons[icon]
}