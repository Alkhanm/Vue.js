<template>
  <div id="app">
    <Header :balance="balance">
      <router-link slot="home" to="/">Início</router-link>
      <router-link slot="portfolio" to="/portfolio">Portfolio</router-link>
      <router-link slot="stocks" to="/stocks">Ações</router-link>
    </Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/widgets/Header.vue";

export default {
  name: "App",
  components: { Header },
  computed: {
    balance() {
      return `R$ ${Number(this.$store.state.user.balance)
        .toFixed(2)
        .replace(".", ",")}`;
    },
  },
  beforeCreate() {
    this.$store.dispatch("uploadUser");
  },
};
</script>
<style>
a {
  color: #fff;
}
strong {
  text-transform: uppercase;
  font-size: 1.3em;
}
</style>