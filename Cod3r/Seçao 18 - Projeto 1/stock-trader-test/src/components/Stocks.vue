<template>
  <div class="stocks-group">
    <b-container>
      <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" action="comprar"></Stock>
    </b-container>
  </div>
</template>

<script>
import Stock from "./widgets/Stock.vue";
import { mapGetters } from "vuex";
export default {
  components: { Stock },
  computed: {
    stocks() {
      return this.$store.state.stocks;
    },
  },
  beforeCreate() {
    this.$store.dispatch("uploadStocks");
  },
};
</script>

<style>
</style>