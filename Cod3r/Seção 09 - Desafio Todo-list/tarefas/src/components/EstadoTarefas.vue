<template>
  <div class="barra-tarefas">
    <span>{{tamanho}}</span>
    <div class="porcentagem" :style="{width: tamanho}"></div>
  </div>
</template>

<script>
export default {
  props: {
    tarefas: {
      type: Array,
      required: true,
    },
  },
  computed: {
    tarefasConcluidas() {
      let concluidas = 0;
      for (let t of this.tarefas) {
        if (t.concluida) concluidas++;
      }
      return Math.round((concluidas / this.tarefas.length) * 100);
    },
    tamanho() {
      if (this.tarefasConcluidas > 0) return this.tarefasConcluidas + "%";
      else return "0%";
    },
  },
};
</script>

<style>
.barra-tarefas {
  display: flex;
  width: 90%;
  height: 22px;
  border: 1px solid white;
  border-radius: 6px;
}
.barra-tarefas .porcentagem {
  display: flex;
  justify-content: center;
  background-color: green;
  border-radius: 6px;
}
span {
  position: relative;
}
</style>