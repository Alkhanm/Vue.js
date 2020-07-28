<template>
  <div @click="$emit('input',nome+sobrenome )">{{nome}} {{sobrenome}}</div>
</template>

<script>
export default {
  props: {
    nome: {
      required: true,
    },
    sobrenome: {
      required: true,
    },
  },
};
</script>

<style>
</style>