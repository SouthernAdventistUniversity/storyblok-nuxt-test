// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV
    }
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "x1SNAlzEQb9nkQLIyjeQJAtt",
        apiOptions: {
          region: "us",
        },
      },
    ],
    "@nuxtjs/tailwindcss"
  ],
});
