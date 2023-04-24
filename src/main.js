import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import { i18n } from "@/i18n";

const Vue = createApp(App);

Vue.use(router).use(store).use(i18n);

Vue.mount("#app");
