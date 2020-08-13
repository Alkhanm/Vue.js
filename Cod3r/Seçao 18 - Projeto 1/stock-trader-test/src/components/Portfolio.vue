<template>
  <div class="stocks-group">
    <transition-group
      enter-active-class="animated animate__lightSpeedOutRigh"
      leave-active-class="animated animate__rollOut"
      class="container"
      tag="div"
    >
      <Stock v-for="p in portfolio" :key="p.id" :stock="p" action="vender">
        <label slot="quantity">Quantidade: {{ p.quantity }}</label>
      </Stock>
    </transition-group>
  </div>
</template>

<script>
import Stock from "./widgets/Stock.vue";
export default {
  components: { Stock },
  computed: {
    portfolio() {
      return this.$store.state.user.portfolio;
    },
  },
  beforeCreate() {
    this.$store.dispatch("uploadUser");
  },
};
</script>

<style>
</style>