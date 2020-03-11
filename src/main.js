import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Card from "../src/components/Card";
import AddCard from "../src/views/Addcard";
import store from "./store";

Vue.component("app-card", Card);
Vue.component("add-card", AddCard);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
