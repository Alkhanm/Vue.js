<template>
  <div class="agregador">
    <input v-model="novaTarefa" v-on:keyup.enter="addTarefa(novaTarefa)" placeholder="Nova tarefa?" />
    <button @click="addTarefa(novaTarefa)">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novaTarefa: "",
    };
  },
  methods: {
    addTarefa(tarefa) {
      const adicione = tarefa;
      if (adicione) {
        this.$emit("tarefaAdicionada", adicione);
        this.novaTarefa = "";
      }
    },
  },
};
</script>

<style>
.agregador {
  display: flex;
  width: 50%;
  height: 40px;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
}
.agregador input {
  flex: 10;
  border-radius: 10px 0px 0px 10px;
  background-color: rgb(158, 151, 151);
  color: white;
  font-size: 18px;
  font-weight: 600;
}
.agregador button {
  flex: 1;
  border-radius: 0px 10px 10px 0px;
  background-color: rgb(66, 136, 240);
  color: white;
  font-size: 18px;
  font-weight: 600;
}
</style>