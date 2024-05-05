// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@ant-design-vue/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
  ],
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
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  // nitro: {
  //   routeRules: {
  //     "/backend/**": {
  //       proxy: `${process.env.API_URL}/**`
  //     }
  //   }
  // }
})
