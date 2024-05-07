// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@ant-design-vue/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    'nuxt-vue3-google-signin',
  ],
  googleSignIn: {
    clientId: '747650371970-sjhc6eteaug68g4sb1qdvh108junmj2r.apps.googleusercontent.com',
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
    },
  },
  // nitro: {
  //   routeRules: {
  //     "/backend/**": {
  //       proxy: "http://readsstation.com:8000/**"
  //     }
  //   }
  // }
  
})
