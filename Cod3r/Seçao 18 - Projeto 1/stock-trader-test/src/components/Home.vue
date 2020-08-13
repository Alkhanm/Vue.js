<template>
  <div class="home">
    <b-container>
      <h2>Negócie e consulte suas ações</h2>
      <b-alert show>Você pode salvar e carregar os dados</b-alert>
      <b-alert show variant="success">Clique em 'Finalizar dia' para mais opções de investimentos!</b-alert>
      <p>
        <strong>SEU SALDO:</strong>
        {{balance | toReal}}
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    balance() {
      return this.$store.state.user.balance;
    },
  },
};
</script>

<style>
.home h2 {
  text-align: center;
}
</style>