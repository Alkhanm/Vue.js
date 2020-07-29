<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <p>{{ texto | virgular}}</p>

    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
    valor na string final-->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <p>{{texto | contar}}</p>
    <hr />
    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
    <p>{{ virgularCp }}</p>
    <p>{{ contarCp }}</p>
  </div>
</template>

<script>
import Mixin from "./FraseMixin.js";

export default {
  mixins: [Mixin],
  filters: {
    virgular(frase) {
      let retorne = frase
        .split("")
        .map((f) => f.replace(" ", ","))
        .join("");
      return retorne;
    },
    contar(frase) {
      let retorne = frase
        .split(" ")
        .map((f) => `${f}(${f.length})`)
        .join(" ");
      return retorne;
    },
  },
  data() {
    return {
      texto:
        "Existe uma colina além do morro além do moinho além das montanhas.",
    };
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
  font-size: 1.5rem;
}
</style>
