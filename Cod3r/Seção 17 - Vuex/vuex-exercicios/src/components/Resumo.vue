<template>
  <Painel titulo="Resumo" roxo>
    <div class="resumo">
      <span>
        Total:
        <strong>{{ total | dinheiro }}</strong>
      </span>
      <hr />
      <button>Finalizar!</button>
    </div>
  </Painel>
</template>

<script>
/* 1.1 - Importa o método do 'vuex' */
import { mapGetters } from "vuex";

export default {
  /* 1.2 - Associa uma propriedade computada a um getters da instância Vuex */
  // computed: mapGetters(["valorTotal"]),
  /* 1.3 - Outra forma possivel: */
  computed: mapGetters("carrinho", { total: "valorTotal" }), //'carrinho' é necessario apenas se houver um namespaced
  //   computed: {
  //     total() {
  //       /* Acessa a instância do Vuex */
  //       return this.$store.getters.valorTotal;
  //     },
  //   },
};
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 33%;
}
</style>
