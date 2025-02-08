// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
  ],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'Hello from the Edge 👋',
    },
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {},

  // https://eslint.nuxt.com
  eslint: {
    config: {
      standalone: false,
    },
  },

  // https://i18n.nuxtjs.org
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'de',
        iso: 'de-DE',
        file: 'de.json',
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.json',
      },
    ],
    defaultLocale: 'en',
  },
})
