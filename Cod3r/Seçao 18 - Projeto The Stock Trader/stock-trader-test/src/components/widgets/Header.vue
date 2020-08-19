<template>
  <div id="header">
    <b-navbar type="dark" variant="dark">
      <div class="comp-items">
        <b-navbar-brand>
          <strong>STOCK</strong>TRADER
        </b-navbar-brand>
        <b-navbar-brand>
          <slot name="home"></slot>
        </b-navbar-brand>
        <b-navbar-brand>
          <slot name="portfolio"></slot>
        </b-navbar-brand>
        <b-navbar-brand>
          <slot name="stocks"></slot>
        </b-navbar-brand>
      </div>
      <div class="items">
        <b-navbar-brand>
          <b-button @click="finishDay()">Finalizar dia</b-button>
        </b-navbar-brand>
        <b-navbar-brand>
          <b-dropdown text="Opções">
            <b-dropdown-item>Salvar</b-dropdown-item>
            <b-dropdown-item>Carregar</b-dropdown-item>
          </b-dropdown>
        </b-navbar-brand>
        <b-navbar-brand>Saldo: {{balance}}</b-navbar-brand>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ["balance"],
  methods: {
    finishDay() {
      this.$store.dispatch("endDay");
    },
  },
};
</script>

<style>
#header .navbar {
  justify-content: space-between;
}
</style>
