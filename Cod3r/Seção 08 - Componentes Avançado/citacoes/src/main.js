import './estilo.css' // referência um estilo css que fara parte de toda a aplicação
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
