export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.json' },
      { code: 'pl', iso: 'pl-PL', file: 'pl-PL.json' },
      { code: 'ru', iso: 'ru-RU', file: 'ru-RU.json' },
      { code: 'uk', iso: 'uk-UA', file: 'uk-UA.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: './locales/',
    strategy: 'prefix_and_default'
  }
})