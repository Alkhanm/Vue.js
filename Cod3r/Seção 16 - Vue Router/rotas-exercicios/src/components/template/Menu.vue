<template>
  <nav class="menu">
    <ul>
      <!-- Cria elementos que apontam para rotas mapeadas em 'router.ts' -->
      <!-- 'tag' faz com o componente gere o elemento definido -->
      <!-- 'exact' define que a rota estará ativa apenas quando ela corresponder perfeitamente ao caminho na URL -->
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Inicio</a>
      </router-link>
      <router-link to="/usuario" tag="li" active-class="active">
        <a>Usuário</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>