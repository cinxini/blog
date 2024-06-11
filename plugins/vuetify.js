import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import orangeTheme from "@/assets/themes/orange-03.json";

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
        theme: {
            defaultTheme: "lightTheme",
            variations: {
                colors: ["primary", "secondary"],
                lighten: 8,
                darken: 8,
            },
            themes: { lightTheme, darkTheme },
        },
    });
    app.vueApp.use(vuetify);
});
