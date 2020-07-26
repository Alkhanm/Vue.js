<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário:
      <strong>{{inverterNome()}}</strong>
    </p>
    <p>
      Idade:
      <strong>{{idade}}</strong>
    </p>
    <button @click="reiniciarNome()">Reiniciar nome 1</button>
    <button @click="reiniciarFn()">Reiniciar nome 2</button>
    <!-- Quando clicado, esse botão irá chamar a função 'reiniciarFn()'
    por sua vez, 'reiniciarFn()' chama a função que foi passada pelo elemento pai para essa propriedade-->
  </div>
</template>

<script>
import barramento from "@/barramento";
export default {
  // Define as propriedades que esse componente pode aceitar
  props: {
    nome: {
      type: String, // o tipo deve ser string
      //required: true // essa propriedade é necessaria para que o componenete funcione
      //default: 'maria outra caracterista possivel é o valor padrão, nesse caso 'required' é desnecessario
      default: function () {
        // valores default podem surgir através de uma função
        return Array(10).fill(0).join(",");
      },
    },
    sobrenome: String, // a propriedade 'sobrenome' deve ser uma string (outra forma possivel = sobrenome: [Array, String])
    reiniciarFn: Function,
    idade: Number,
  },
  methods: {
    inverterNome() {
      // a prop 'nome' pode ser usada normalmente como um variavel 'data' ou 'computed' através do 'this'
      return this.nome.split("").reverse().join("");
    },
    reiniciarNome() {
      const nome = "Pedro";
      /* Por padrão, a comunicação entre um componente pai para um filho pode ser realizada através de 'props'
       * O pai, por conhecer o filho, pode facilmente definir valores ou acessar valores do filho.
       * Mas o filho não conhece seu pai, portanto é preciso algum estrategia para realizar essa comunicação
       */
      // '$emit' cria um evento que será disparado pelo elemento filho. O elemento pai poderá então capturar esse evento e tratá-lo.
      // O primeiro argumento define o nome deste evento.
      // O segundo, define o que será passado para o elemento pai capturar (uma variavel, objeto, etc..)
      this.$emit("nomeMudou", nome); // nesse caso o nome será passado para o pai capturar e usá-lo
    },
  },
  created() {
    // 'barramento' escuta qualquer evento do tipo 'idadeMudou' e atualiza a informação da variavel 'idade'
    // O primeiro argumento recebe o nome do evento, o segundo recebe uma função callback (será chamada assim que o evento ocorrer)
    barramento.quandoIdadeMudar((idade) => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
