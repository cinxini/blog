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
