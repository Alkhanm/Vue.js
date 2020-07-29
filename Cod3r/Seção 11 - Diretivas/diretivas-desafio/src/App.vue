<template>
  <div id="app">
    <h1>Diretivas (Desafio)</h1>
    <hr />
    <button v-quando:click="acao">Executar</button>
    <p v-quando:mouseenter="acao2">Executar2</p>

    <!-- Exercício -->
    <!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
  </div>
</template>

<script>
export default {
  directives: {
    quando: {
      bind(el, binding) {
        // el.onclick = function (e) {
        //   binding.value();
        // };
        const type = binding.arg; // argumento passado na diretiva (click, input, mouseMove, etc)
        const listener = binding.value; // valor passado, o metodo que será executado
        el.addEventListener(type, listener);
        /* type - Uma linha de texto que representa o tipo de evento a ser esperado.
         * listener -  O objeto que recebe uma notificação quando um evento do tipo especificado ocorre.
         * Esse objeto precisa implementar a interface do EventListener, ou simplesmente executar uma função JavaScript. */
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    acao() {
      alert("Ação executada!");
    },
    acao2() {
      console.log("Ação executada!");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

button {
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
</style>
