import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import "vuetify/styles";

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
    });
    app.vueApp.use(vuetify);
});
