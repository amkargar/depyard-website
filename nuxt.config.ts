import tailwindcss from '@tailwindcss/vite'

const appBaseURL = process.env.NUXT_APP_BASE_URL || '/'
const normalizedBaseURL = appBaseURL.endsWith('/') ? appBaseURL : `${appBaseURL}/`

export default defineNuxtConfig({
  compatibilityDate: '2026-11-26',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    server: { allowedHosts: true },
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      // Set NUXT_PUBLIC_SITE_URL at deploy time to enable absolute canonical URLs.
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
    },
  },
  app: {
    baseURL: appBaseURL,
    head: {
      titleTemplate: '%s · Depyard',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/png', href: `${normalizedBaseURL}favicon.png` },
        { rel: 'preconnect', href: 'https://github.com' },
      ],
    },
  },
})
