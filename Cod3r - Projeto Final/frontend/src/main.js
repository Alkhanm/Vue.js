import 'mutationobserver-shim'
import './config/bootstrap-vue'
import './registerServiceWorker'
import 'font-awesome/css/font-awesome.css'

import store from './config/store'
import router from './config/router'

import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
