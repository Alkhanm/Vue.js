<template>
  <div class="usuario-editar">
    <h3>Editar Usuário</h3>
    <p>
      <strong>Código:</strong>
      {{id}}
    </p>
    <!-- Acessa os parâmetros passados na query pelo complento 'UsuarioDetalhe' -->
    <p>
      <strong>Completo:</strong>
      {{$route.query.completo ? 'Sim' : 'Não'}}
    </p>
    <p>
      <strong>Língua:</strong>
      {{$route.query.lingua}}
    </p>
    <button @click="confirmou = true" primario>Confirmar</button>
    <!-- Atráves do hash passado na URL é possivel navegar diretamente para esse elemento:  /usuario/2/editar#rodape-->
    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmou: false,
    };
  },
  /** Metódo de ciclo de vida. Antes de sair desta rota */
  beforeRouteLeave(to, from, next) {
    //Evita que o usuário saia da página antes de confirmar
    if (this.confirmou) {
      next();
    } else {
      if (confirm("Tem certeza?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style>
#rodape {
  margin-top: 500px;
}
</style>