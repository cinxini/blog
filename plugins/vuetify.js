import orangeTheme from "@/assets/themes/static-02.json";
import "@fortawesome/fontawesome-free/css/all.css";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";
import "vuetify/styles";

const lightTheme = {
    dark: false,
    colors: orangeTheme.schemes.light,
};

const darkTheme = {
    dark: true,
    colors: orangeTheme.schemes.dark,
};

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        ssr: true,
        theme: {
            defaultTheme: "lightTheme",
            variations: {
                colors: [
                    "primary",
                    "secondary",
                    "primaryContainer",
                    "tertiary",
                ],
                lighten: 8,
                darken: 8,
            },
            themes: { lightTheme, darkTheme },
        },
        icons: {
            defaultSet: "fa",
            aliases,
            sets: {
                fa,
            },
        },
    });
    app.vueApp.use(vuetify);
});
