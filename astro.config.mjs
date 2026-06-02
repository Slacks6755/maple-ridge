// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

export default defineConfig({
  site: 'https://www.mapleridgedev.com',
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon(),
  ],
})
