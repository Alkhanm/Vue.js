<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>
      Nome:
      <strong>{{nome}}</strong>
    </p>
    <p>
      Idade:
      <strong>{{idade}}</strong>
    </p>
    <button v-on:click="alterarNome">Alterar nome</button>
    <hr />
    <div class="componentes">
      <!--Interliga a propriedade 'nome' do componente 'app-usuario-info' 
      com a variavel 'nome' de usuário.-->
      <app-usuario-info
        :nome="nome"
        :idade="idade"
        @nomeMudou="nome = $event"
        :reiniciarFn="reiniciarNome"
      />
      <!--1 - Captura o evento 'nomeMudou' emitido que será emitido por um componente filho 
        e usado o argumento passado neste evento para resetar o valor da variavel 'nome'.
      'nomeMudou' é capturado pela diretiva 'v-on' assim como um evento DOM qualquer seria-->
      <!--2 - Passa uma função callback para a propriedade 'reiniciarFn' do componente 'app-usuarioInfo'-->

      <app-usuario-editar :idade="idade" />
      <!-- 1 - Recebe o evento idadeMudou e altera a idade no componente pai, 
      automaticamente todos os componentes filhos (irmãos deste componente) serão atualizados.
      @idadeMudou="idade = $event"-->
      <!-- 2 - Função callback passada pelo componente pai para a propriedade 'alterarIdadeFn' do filho
      :alterarIdadeFn="alterarIdade"-->
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      nome: "Pedro",
      idade: 21,
    };
  },
  methods: {
    alterarNome() {
      this.nome = "Ana";
    },
    reiniciarNome() {
      this.nome = "Pedro";
    },
    alterarIdade() {
      this.idade = 33;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
