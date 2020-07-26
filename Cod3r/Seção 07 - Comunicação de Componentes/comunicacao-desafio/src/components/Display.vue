<template>
  <div class="display">
    <h2 v-show="user.id == undefined">Usuário não selecionado</h2>
    <div>
      <h2>{{user.id}}</h2>
      <h2>{{user.name}}</h2>
      <h2>{{user.idade}}</h2>
    </div>
  </div>
</template>

<script>
import EventBus from "@/EventBus.js";
export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    EventBus.$on("usuarioClicado", (user) => {
      this.user = user;
    });
  },
};
</script>

<style>
.display {
  flex: 1;
  border: 1px solid #ccc;
}
</style>