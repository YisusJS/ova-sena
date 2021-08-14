import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import title from "./mixins/title.js";

createApp(App).use(store).use(router).mixin(title).mount("#app");
