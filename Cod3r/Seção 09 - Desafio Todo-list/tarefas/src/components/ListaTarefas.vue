<template>
  <div class="lista-tarefas">
    <div v-for="(tarefa, index) in listaTarefas" :key="index">
      <tarefa v-bind:tarefa="tarefa"></tarefa>
    </div>
  </div>
</template>

<script>
import Tarefa from "./Tarefa";
export default {
  components: { Tarefa },
  props: {
    listaTarefas: Array,
  },
};
</script>

<style>
.lista-tarefas {
  display: flex;
  width: 90%;
  justify-content: center;
  flex-wrap: wrap;
}
</style>