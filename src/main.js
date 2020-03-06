import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Card from "../src/components/Card";
import AddCard from "../src/views/Addcard";

Vue.component("app-card", Card);
Vue.component("add-card", AddCard);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
