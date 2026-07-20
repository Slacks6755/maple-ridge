// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

export default defineConfig({
  site: 'https://www.mapleridgedev.com',
  output: 'static',
  // Pages build as flat files (about.html), which Netlify serves at /about
  // (slash form 301s to it) — so every URL we emit must use the no-slash form.
  trailingSlash: 'never',
  build: { format: 'file' },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon(),
  ],
})
