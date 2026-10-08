// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint"],
  css: [
    "~/assets/base.css",
    "~/assets/theme.default.css",
    "~/assets/theme.light.css",
    "~/assets/theme.dark.css",
    "~/assets/theme.green.css",
    "~/assets/spacing.css",
    "~/assets/typography.css",
  ],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
