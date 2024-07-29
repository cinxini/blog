import customTheme from "@/assets/themes/candy.json";
import "@fortawesome/fontawesome-free/css/all.css";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";
import "vuetify/styles";

const lightTheme = {
    dark: false,
    colors: customTheme.schemes.light,
    variables: {
        "main-container-max-width": 900,
        "main-container-min-width": 400,
        "base-color": "#b1b1b1",
        "base-color-darker": "#414849",
        "base-button-opacity": 0.05,
        "base-button-color": "#b1b1b1",
        "base-button-hover-color": customTheme.schemes.light.primary,
        "light-emphasis-opacity": 0.1,
    },
};

const darkTheme = {
    dark: true,
    colors: customTheme.schemes.dark,
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
                    "secondaryContainer",
                    "tertiaryContainer",
                    "tertiary",
                    "surfaceVariant",
                ],
                lighten: 6,
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
