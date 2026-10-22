// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg",
          href: "/favicon-black.svg",
          media: "(prefers-color-scheme: light)",
        },
        {
          rel: "icon",
          type: "image/svg",
          href: "/favicon-white.svg",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
  },
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  css: [
    "~/assets/css/main.css",
  ],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
