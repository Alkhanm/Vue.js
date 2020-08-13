import Vue from "vue";

import vuex from "vuex";
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://192.168.100.4:8088/'
})


Vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    stocks: [],
    user: {
      id: 1,
      balance: 0,
      portfolio: []
    },
  },
  mutations: {
    addStocks(state, payload) {
      state.stocks = payload
    },
    addUser(state, user) {
      state.user = user
    },
  },
  actions: {
    async uploadStocks({ commit }) {
      const res = await http.get('stocks')
      const stocks = await res.data
      commit('addStocks', stocks)
    },
    async uploadUser({ commit }) {
      const res = await http.get('user')
      const user = await res.data[0]
      commit('addUser', user)
    },
    async buyStock(context, stock) {
      const res = await http.patch(`user/buy/${context.state.user.id}`, stock)
      context.commit('addUser', res.data)
    },
    async sellStock(context, stock) {
      const res = await http.patch(`user/sell/${context.state.user.id}`, stock)
      context.commit('addUser', res.data)
      context.dispatch('uploadUser')
    },
    async endDay(context) {
      const res = await http.put(`stocks/finish-day`)
      context.commit('addStocks', res.data)
      context.dispatch('uploadUser')
    },
  },
  getters: {
  }
});