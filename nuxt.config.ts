// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: "https://fonts.googleapis.com"
        }, {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&display=swap",
          crossorigin: "",
        }, {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lobster&display=swap",
          crossorigin: "",
        }, {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&display=swap",
          crossorigin: "",
        }, {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          crossorigin: "",
        }, {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sofia&display=swap",
          crossorigin: "",
        }, {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap",
          crossorigin: "",
        }, {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Borel&display=swap",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap",
          crossorigin: "",
        }
      ]
    }
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
