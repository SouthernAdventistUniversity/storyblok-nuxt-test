// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: process.env.NUXT_PUBLIC_NODE_ENV === "production" ? true : false,
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
    },
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
    "@nuxtjs/tailwindcss",
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://www.southern.edu/_resources-v2/css/components.css",
        },
        {
          rel: "stylesheet",
          href: "https://sauassetsaws-c897.kxcdn.com/fonts/fonts-neue-cond.gz.css",
          crossorigin: "anonymous"
        },
        {
          rel: "stylesheet",
          href: "https://sauassetsaws-c897.kxcdn.com/fonts/fonts-neue.gz.css",
          crossorigin: "anonymous"
        },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/9661d738c4.js",
          crossorigin: "anonymous"
        },
        {
          src: "https://sauassets-c897.kxcdn.com/_resources-v2/js/components.js",
          crossorigin: "anonymous",
          defer: "true"
        },
        {
          type: "text/javascript",
          innerHTML: `    (function (d, t, id) {
      var js, mmjs = d.getElementsByTagName(t)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(t);
      js.id = id;
      js.src = 'https://southern.edu/secure/main-menu';
      js.async = 'async';
      mmjs.parentNode.insertBefore(js, mmjs);
    }(document, 'script', 'southern-mmenu'));
`,
        },
      ],
    },
  },
});
