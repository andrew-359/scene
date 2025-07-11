import { createApp } from "vue"
import PrimeVue from "primevue/config"
import './styles/tailwind.scss'
import 'primeicons/primeicons.css'
import App from "./App.vue"
import { CustomAura } from "@/_configs/theme"  
import Tooltip from 'primevue/tooltip'

export const application = createApp(App)

const create = () => {

  application
    .use(PrimeVue, {
      ripple: true,
      theme: {
        preset: CustomAura,
        options: {
          cssLayer: {
            name: `primevue`,
            order: `theme, base, primevue`
          }
        }
      },
    })
    
  application.directive(`tooltip`, Tooltip)

  application.mount(`#app`)
}

//вдруг это либа будет или микрофронт
create()