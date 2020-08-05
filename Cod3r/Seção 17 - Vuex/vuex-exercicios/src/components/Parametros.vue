<template>
  <Painel titulo="Parâmetros" vermelho>
    <div class="parametros">
      <span>
        <strong>Quantidade Padrão:</strong>
        <input type="number" v-model="quantidade" />
      </span>
      <span>
        <strong>Preço Padrão:</strong>
        <input type="number" v-model="preco" />
      </span>
    </div>
  </Painel>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    /* 1.1 - No lugar de uma função que apenas retorna valores, define-se um objeto que tanto retorna quanto define*/
    quantidade: {
      /* 1.2 - Retorna o valor do estado global, como um método proxy */
      get() {
        return this.$store.state.parametros.quantidade;
      },
      /* 1.3 - Define um novo valor no estado global*/
      set(qnt) {
        this.$store.dispatch("setQuantidade", qnt);
      },
    },
    preco: {
      get() {
        return this.$store.state.parametros.preco;
      },
      set: function (preco) {
        this.setPreco(preco);
      },
    },
  },
  methods: {
    ...mapActions(["setPreco"]),
  },
};
</script>

<style>
.parametros {
  display: flex;
  justify-content: space-around;
}
</style>
