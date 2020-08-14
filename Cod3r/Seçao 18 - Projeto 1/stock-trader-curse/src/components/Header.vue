<template>
  <v-toolbar>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn to="/">Inicio</v-btn>
      <v-btn to="/portfolio">Portfólio</v-btn>
      <v-btn to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn @click="endDay()">Finalizar dia</v-btn>
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{on, attrs}">
          <v-btn v-bind="attrs" v-on="on">Salvar & Carregar</v-btn>
        </template>
        <v-list>
          <v-list-item @click="saveData()">Salvar dados</v-list-item>
          <v-list-item @click="loadDataLocal()">Carregar dados</v-list-item>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppercase grey--text text---darken-2">Saldo: {{funds | currency}}</span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      //desestrutura os métodos getters contidos no estado global, e os atribui a essas constantes
      const { funds, stockPortfolio, stocks } = this.$store.getters;
      this.$_http.put("data.json", { funds, stockPortfolio, stocks });
    },
    loadDataLocal() {
      this.loadData();
    },
  },
};
</script>

<style>
</style>