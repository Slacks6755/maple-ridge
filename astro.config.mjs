// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

export default defineConfig({
  site: 'https://www.mapleridgedev.com',
  output: 'static',
  // Netlify serves directory-format pages at /path/ (no-slash 301s to it),
  // so every URL we emit must use the trailing-slash form.
  trailingSlash: 'always',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon(),
  ],
})
