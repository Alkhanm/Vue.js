<template>
  <div class="tarefa" @click="tarefa.concluida = true" :class="{concluida: tarefa.concluida}">
    <span>{{tarefa.nome}}</span>
  </div>
</template>

<script>
export default {
  props: { tarefa: Object },
};
</script>

<style>
.tarefa {
  display: flex;
  background-color: rgb(226, 76, 76);
  width: 150px;
  height: 50px;
  margin: 5px;
  font-size: 20px;
  font-weight: 300;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.concluida {
  background-color: rgb(68, 172, 48);
  text-decoration: line-through;
}
</style>