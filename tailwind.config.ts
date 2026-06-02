import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ridge: {
          50: '#f4f7f4',
          100: '#e4ebe4',
          200: '#c9d7c9',
          300: '#a3baa3',
          400: '#779677',
          500: '#547454',
          600: '#425d42',
          700: '#374b37',
          800: '#2d3d2d',
          900: '#263326',
          950: '#121a12',
        },
        earth: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e5ddd0',
          300: '#d4c5b0',
          400: '#bfa88a',
          500: '#ad9270',
          600: '#a0825f',
          700: '#856a50',
          800: '#6d5745',
          900: '#59483a',
          950: '#2f251e',
        },
        stone: {
          50: '#f8f8f7',
          100: '#f0f0ee',
          200: '#e3e3df',
          300: '#d0d0c9',
          400: '#a8a89e',
          500: '#8a8a7f',
          600: '#6d6d63',
          700: '#5a5a52',
          800: '#4a4a44',
          900: '#3d3d38',
          950: '#252522',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
