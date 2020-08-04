<template>
  <div id="app">
    <h1>Rotas com VueRouter</h1>
    <!-- Elemento onde os componente com rotas mapeadas serão carregadors -->
    <!-- router-view nomeado -->
    <router-view name="menu" />
    <!-- router-view padrão -->
    <transition
      enter-active-class="animated rollIn"
      leave-active-class="animated rollOut"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
