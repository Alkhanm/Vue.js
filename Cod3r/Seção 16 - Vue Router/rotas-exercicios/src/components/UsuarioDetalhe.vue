<template>
  <div class="usuario-detalhe">
    <h3>Detalhes do Usuário</h3>
    <p>
      <strong>Código:</strong>
      {{id}}
    </p>
    <!-- :to="`/usuario/${id}/editar`" -->
    <router-link
      tag="button"
      primario
      :to="{name:'editarUsuario', params: {id}, query: {completo: true, lingua: 'pt-br'}, hash: '#rodape'}"
    >Editar</router-link>
    <!--'name' navega para o componente que possui esse nome definido em router.ts -->
    <!--'query' envia parâmetros para a URL -->
    <!--'hash' faz com que o componente seja renderizado com foco no elemento que possui o id passado após #
    Para q isso funciona a função Scroll deve ser implementada-->
  </div>
</template>

<script>
export default {
  /* a propriedade possui o mesmo nome da props recebido no 'router.js' */
  props: ["id"],
  // Gatilho de ciclo de vida, semelhante aos definidas em router.ts
  beforeRouteEnter(to, from, next) {
    // console.log(this.id) /**Não é possivel acessar nem um método/propriedade aqui, pois o componente ainda ñ foi gerado */
    console.log("antes da rota -> UsuarioDetalhe ( dentro do componente) ");
    /* É raro, mas, se preciso, é possivel acessar as propriedades do componente desta forma.
     * No entanto, aqui o componente será criado, pois a função é uma callback*/
    // next((vm) => {
    //   console.log(vm.id);
    // });
    const autenticado = true;
    autenticado ? next() : next(false);
  },
  // data() {
  //   return {
  //     id: this.$route.params.id, // acessa o parâmetro 'id' passado na rota
  //   };
  // },
  // watch: {
  //   /* Coloca o atributo '$route' em observação
  //    * 'from' = rota anterior
  //    * 'to' = rota atual */
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   },
  // },
};
</script>

<style>
</style>