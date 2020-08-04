/* eslint-disable */
<template>
  <div class="inicio">
    <h2>Usuários</h2>
    <hr />
    <router-view />
    <!--'sucesso' é um atributo CSS -->
    <hr />
    <button class="mt-4" @click="irParaInicio()" sucesso>Voltar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    irParaInicio() {
      /* Faz a navegação até o path especificado */
      // this.$router.push("/"); // acesso atráves do path
      // this.$router.push({ name: "inicio" }); // acesso atráves do atributo name
      this.$router.back(); // retorna para a última rota acessada
    },
  },
  // watch: {
  //   $route(to, from) {
  //     const anterior = this.$route.path.split("/");
  //     console.log(anterior.join("/"));
  //     this.voltarPara = anterior.join("/", anterior.length--);
  //   },
  // },
};
</script>

<style>
</style>