<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form v-if="!enviado" class="painel">
        <div class="cabecalho">Formulário</div>
        <!-- Exercicio 01 -->
        <!-- Criar uma formulário de registro -->
        <!-- Nome completo (Nome e Sobrenome) -->
        <!-- Email -->
        <!-- Senha -->
        <!-- Armazenar Dados? (Sim/Não) -->
        <rotulo nome="Nome">
          <input v-model="usuario.nome" type="text" />
        </rotulo>
        <rotulo nome="Sobrenome">
          <input v-model="usuario.sobrenome" type="text" />
        </rotulo>
        <rotulo nome="Email">
          <input v-model="usuario.email" type="text" />
        </rotulo>
        <rotulo nome="Senha">
          <input v-model.number="usuario.senha" type="number" />
        </rotulo>
        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
        <rotulo nome="Armazenar dados">
          <span>
            <input value="sim" v-model="armazenar" type="radio" />Sim
          </span>
          <span>
            <input value="não" v-model="armazenar" type="radio" />Não
          </span>
        </rotulo>
        <hr />
        <button @click.prevent="enviar()">Enviar</button>
      </form>
      <!-- Exercicio 02 -->
      <!-- Só mostrar o fomulário de não tiver sido submetido -->
      <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
      <div v-else class="painel">
        <div class="cabecalho">Resultado</div>
        <rotulo nome="Nome">
          <span>{{usuario.nome}}</span>
        </rotulo>
        <rotulo nome="Sobrenome">
          <span>{{usuario.sobrenome}}</span>
        </rotulo>
        <rotulo nome="Nome Completo">
          <nome-completo
            v-model="nomeCompleto"
            :nome="usuario.nome"
            :sobrenome="usuario.sobrenome"
          />
        </rotulo>
        <rotulo nome="Email">
          <span>{{usuario.email}}</span>
        </rotulo>
        <rotulo nome="Senha">
          <span>{{usuario.senha}}</span>
        </rotulo>
        <rotulo nome="Armazenar dados">
          <span>{{armazenar}}</span>
        </rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import NomeCompleto from "./components/NomeCompleto.vue";

export default {
  name: "app",
  components: { Rotulo, "nome-completo": NomeCompleto },
  data() {
    return {
      nomeCompleto: "",
      enviado: false,
      usuario: {},
      armazenar: "não",
    };
  },
  methods: {
    enviar() {
      this.enviado = true;
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
