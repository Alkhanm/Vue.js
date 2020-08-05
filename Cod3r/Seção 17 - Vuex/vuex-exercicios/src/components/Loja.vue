<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model="quantidade" />
      <span>
        itens de
        <strong>R$</strong>
      </span>
      <input type="number" v-model="preco" />
      <button @click="adicionar">Agora!</button>
    </div>
  </Painel>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      sequencia: 1,
    };
  },
  computed: {
    quantidade: {
      get() {
        return this.$store.state.parametros.quantidade;
      },
      set(qnt) {
        this.$store.dispatch("setQuantidade", qnt);
      },
    },
    preco: {
      get() {
        return this.$store.state.parametros.preco;
      },
      set(qnt) {
        this.$store.dispatch("setPreco", qnt);
      },
    },
  },
  methods: {
    /* 2 - Atráves da sintaxe spread é possivel adicionar o resultado dessa operação, dentro do methods
     * Essa função será responsavel por alterar o estado global*/
    // ...mapMutations(["adicionarProduto"]),
    /* 3 - Substitui a alterar diretamente através de mutations, por 'actions'*/
    ...mapActions(/*"carrinho",*/ ["adicionarProduto"]), //'carrinho' define o namespaced que se está acessando, caso haja um no modulo
    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco,
      };
      this.sequencia++;
      /* 2.1 - Altera o estado do aplicação diretamente */
      // this.$store.state.produtos.push(produto);
      /* 2.2 - Altera o estado de uma forma mais centralizada */
      // this.$store.commit("adicionarProduto", produto);
      /* 2.3 - Outra forma possivel */
      // this.adicionarProduto(produto);
      /* 3.1 - Alterando através de uma 'action' */
      this.adicionarProduto(produto);
    },
  },
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 1.2rem;
  width: 50px;
  height: 50px;
}
button {
  height: 50px;
  font-size: 1.2 !important;
}
</style>
