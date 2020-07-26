<template>
  <div id="app">
    <h1>Tarefas</h1>
    <EstadoTarefa :tarefas="tarefas"></EstadoTarefa>
    <Agregador @tarefaAdicionada="tarefas.push({nome: $event, concluida: false})"></Agregador>
    <ListaTarefas :listaTarefas="tarefas"></ListaTarefas>
  </div>
</template>

<script>
import EstadoTarefa from "./components/EstadoTarefas.vue";
import Agregador from "./components/Agregador";
import ListaTarefas from "./components/ListaTarefas.vue";

export default {
  name: "app",
  components: { ListaTarefas, EstadoTarefa, Agregador },
  data() {
    return {
      tarefas: [],
    };
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
