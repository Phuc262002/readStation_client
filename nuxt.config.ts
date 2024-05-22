// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@ant-design-vue/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    'nuxt-vue3-google-signin',
  ],
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      // pathPrefix: false,
    },
  ],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
     cssnano:
       process.env.NODE_ENV === 'production'
         ? { preset: ['default', { discardComments: { removeAll: true } }] }
         : false, // disable cssnano when not in production
    },
 },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  ui: {
    icons: 'all'
  },
  // nitro: {
  //   routeRules: {
  //     "/backend/**": {
  //       proxy: `${process.env.API_URL}/**`
  //     }
  //   }
  // }
})
