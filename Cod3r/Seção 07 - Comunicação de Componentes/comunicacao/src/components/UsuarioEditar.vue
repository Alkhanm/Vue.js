<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>
      Idade:
      <strong>{{idade}}</strong>
    </p>
    <button @click="alterarIdade">Alterar Idade</button>
    <button @click="alterarIdadeFn()">Alterar Idade (Callback)</button>
  </div>
</template>

<script>
import barramento from "@/barramento"; // importa da instância que irá cuidar do gerenciamento de estado
export default {
  props: {
    idade: Number,
    alterarIdadeFn: Function,
  },
  methods: {
    alterarIdade() {
        this.idade = 33
      //1. Emite um evento chamado 'idadeMudou' levando o valor 33 como argumento de $event
      // this.$emit("idadeMudou", 33);
      //2. 'barramento' emite um evento (essa evento pode ser captado por elemento irmãos diretamente)
      // barramento.$emit("idadeMudou", this.idade );
      //3. Usa um metódo definido na instância barramento para realizar essa comunicação
      barramento.alterarIdade(this.idade)
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
