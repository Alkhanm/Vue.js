<template>
  <div class="table-users">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" @click="enviarUsuario(user)">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EventBus from "@/EventBus.js";
export default {
  props: { users:Array },
  methods: {
    enviarUsuario(user) {
      EventBus.$emit("usuarioClicado", user);
    },
  },
};
</script>

<style>
.table-users {
  flex: 1;
  display: flex;
}

table {
  flex: 1;
  border-spacing: 0px;
  border-collapse: separate;
  border-top: 1px solid #ccc;
}

th,
td {
  padding: 15px;
  border-bottom: 1px solid #ccc;
}

tbody tr:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>