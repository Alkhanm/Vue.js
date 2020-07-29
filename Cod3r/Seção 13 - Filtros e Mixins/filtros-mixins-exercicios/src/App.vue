<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <frutas></frutas>
    <hr />
    <input :value="cpf | formatarCpf" type="text" />
    <p>{{cpf | formatarCpf | inverter}}</p>
    <!-- 'Filters' são chamados através de um 'pipe', o que estiver após o | será usado como 'filters'  -->
    <!-- 'Filters' podem ser encadeados -->
  </div>
</template>

<script>
import Frutas from "./Frutas";
import FrutasMixin from "./FrutasMixin.js";
export default {
  components: { Frutas },
  /* 'mixins', ou mistura, é uma forma de juntar o código de um arquivo em outro.
   * Todos os metódos/atributos definidos em 'FrutasMixin' podem ser usados neste componente como se pertencessem a ele.
   * OBS: Um método do componente que entre em conflito com algum do mixin terá preferência. */
  mixins: [FrutasMixin],
  // 'filters' são métodos para a formatação de dados
  filters: {
    formatarCpf(valor) {
      // deixa uma string com o formato de cpf
      const arr = valor.split(""); // quebra o array em 11 posições
      arr.splice(3, 0, "."); // coloca um ponto na posição
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join(""); // junta tudo em uma string
    },
  },
  data() {
    return {
      cpf: "06314967180",
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
  font-size: 2.5rem;
}
</style>
