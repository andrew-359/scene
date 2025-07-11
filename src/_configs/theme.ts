import { definePreset } from "@primevue/themes"
import Aura from '@primevue/themes/aura'

export const CustomAura = definePreset(Aura, {
  semantic: {
    primary: {
      50: `{zinc.50}`,
      100: `{zinc.100}`,
      200: `{zinc.200}`,
      300: `{zinc.300}`,
      400: `{zinc.400}`,
      500: `{zinc.500}`,
      600: `{zinc.600}`,
      700: `{zinc.700}`,
      800: `{zinc.800}`,
      900: `{zinc.900}`,
      950: `{zinc.950}`
    }
  }
})
  

export const UIClasses = {
  //TODO
  input: `w-full shadow-sm hover:shadow-green-500 transition-all duration-300 ease-in-out`
} as const