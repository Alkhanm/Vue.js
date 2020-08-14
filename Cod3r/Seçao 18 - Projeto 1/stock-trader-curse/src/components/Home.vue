<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">Negócie e consulte suas ações</h1>
    <v-sheet :elevation="6" class="pa-2" color="primary">
      <span class="headline white--text">Você pode salvar & carregar os dados</span>
    </v-sheet>
    <v-sheet :elevation="6" class="pa-2 mt-3" color="success darken-1">
      <span class="headline white--text">Clique em 'Finalizar dia para iniciar um novo dia'</span>
    </v-sheet>
    <v-divider class="my-4" />
    <p class="display-1">
      <strong>Seu saldo:</strong>
      {{funds | currency}}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style>
</style> 