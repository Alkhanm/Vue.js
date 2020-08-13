/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";

import router from "./router/route.js";
import store from "./store";

import { BootstrapVue } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.filter('toReal', function (value) {
  return value >= 0 ? "R$ " + value.toFixed(2).replace('.', ',') : "Inválido"
})
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

