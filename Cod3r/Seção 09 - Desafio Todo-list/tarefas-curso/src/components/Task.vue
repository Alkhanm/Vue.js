<template>
  <div @click="$emit('taskStateChanged', task)" class="task" :class="stateClass">
    <!-- Envia uma evento de fechamento para o elemento pai -->
    <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>
    <p>{{task.name}}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending, //retorna 'pending' se a tarefa ainda não tiver sido concluido
        done: !this.task.pending, // retorna 'done' se a tarefa estiver concluida
      };
    },
  },
};
</script>

<style>
.task {
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  width: 300px;
  height: 100px;
  border-radius: 8px;
  font-size: 1.5em;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.pending {
  border-left: 12px solid #b73229;
  background-color: #f44336;
}
.done {
  color: #ddd;
  border-left: 12px solid #0a8f08;
  background-color: #4caf50;
  text-decoration: line-through;
}
.pending .close {
  background-color: #b73229;
}
.done .close {
  background-color: #0a8f08;
}
.close {
  position: absolute; /*Pega a posição absoluta da página por padrão. Se quiser posiciona-lo dentro de uma elemento pai, use 'position:relative' nesse elemento pai */
  right: 2px;
  top: 2px;
  font-size: 0.7rem;
  font-weight: 600;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
}
</style>