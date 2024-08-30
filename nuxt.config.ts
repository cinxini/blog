// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  runtimeConfig: {
    app: {
      baseURL: '/blog',
    },
  },
  ssr: true,
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
    highlight: {
      theme: 'github-light'
    },
    markdown: {
      toc: { depth: 3, searchDepth: 3 }
    },
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
  // nitro: {
  //   baseURL: "https://github.com/cinxini",
  //   prerender: {
  //     crawlLinks: true,
  //     failOnError: false, 
  //   },
  // },
  nitro: {
    prerender: {
      concurrency: 250,
      interval: 100,
    },
    
  }
  ,
  
})
