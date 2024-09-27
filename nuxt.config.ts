import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: {enabled: false},
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'shadcn-nuxt'
  ],

  css: [
    join(currentDir, './assets/scss/style.scss'),
    join(currentDir, './assets/css/tailwind.css')
  ],

  shadcn: {
    prefix: 'ui',
    componentDir: join(currentDir, './components/ui')
  },

  compatibilityDate: '2024-07-07',

  googleFonts: {
    families: {
      Rubik: [100, 300, 400, 500, 700, 900]
    }
  }
} as any)
