import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$_http = axios.create({
            baseURL: 'https://curso-vue-44060.firebaseio.com/'
        })
    }
})