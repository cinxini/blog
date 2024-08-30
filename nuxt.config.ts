// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: "https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css"
        },
        {
          rel: 'preconnect',
          href: "https://fonts.googleapis.com"
        },  {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          crossorigin: "",
        }, 
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
    '@nuxt/content'
    //...
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-light'
    },
    markdown: {
      toc: { depth: 3, searchDepth: 3 }
    },
    experimental: {
      search: {
        indexed: true,
        options: {
          fields: ['title', 'content', 'titles', 'id'],
          storeFields: ['title', 'content', 'titles'],
          searchOptions: {
            prefix: true,
            fuzzy: 0.2,
            boost: {
              title: 4,
              content: 2,
              titles: 1,
              id: 2,
            }
          }
        }
      }
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // routeRules: {
  //   '/css/**': {
  //       proxy: { to: "http://localhost:3020/css/**", },
  //   }
  // },
  nitro: {
    baseURL: "https://github.com/cinxini",
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  },
  // nitro: {
  //   plugins: ['plugins/content.ts']
  // }
})
