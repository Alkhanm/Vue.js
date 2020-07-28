<template>
  <div id="app">
    <h1>Registrar Reclamação</h1>
    <div class="conteudo">
      <form class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
        <Rotulo nome="E-mail">
          <input v-model.lazy.trim="usuario.email" type="text" />
          <!-- 'lazy' faz com que a atualização do atributo somente ocorra após o input ser finalizado -->
          <!-- 'trim' retira os espaços em branco do input -->
        </Rotulo>
        <Rotulo nome="Senha">
          <input v-model="usuario.senha" type="password" />
        </Rotulo>
        <Rotulo nome="Idade">
          <input type="number" v-model.number="usuario.idade" />
          <!-- 'number' faz com q a entrade seja númerica -->
        </Rotulo>
        <Rotulo nome="Mensagem">
          <textarea v-model="mensagem" name cols="30" rows="5"></textarea>
        </Rotulo>
        <Rotulo nome="Características do Problema">
          <span class="mr-4">
            <input type="checkbox" value="reproduzivel" v-model="caracteristas" /> Reproduzível
          </span>
          <span>
            <input type="checkbox" value="intermitente" v-model="caracteristas" /> Intermitente
          </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span class="mr-4">
            <input v-model="produto" type="radio" value="web" /> Web
          </span>
          <span class="mr-4">
            <input v-model="produto" type="radio" value="mobile" /> Mobile
          </span>
          <span>
            <input v-model="produto" type="radio" value="outro" /> Outro
          </span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <select v-model="prioridade">
            <option
              v-for="prioridade in prioridades"
              :value="prioridade.codigo"
              :key="prioridade.codigo"
            >{{prioridade.nome}}</option>
          </select>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <Escolha :value="escolha" v-model="escolha" />
          <!-- Componente especial de input -->
        </Rotulo>
        <hr />
        <button @click.prevent="enviar()">Enviar</button>
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="E-mail">
          <span>{{ usuario.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ usuario.senha }}</span>
        </Rotulo>
        <Rotulo nome="Idade">
          <span>{{ usuario.idade }}</span>
        </Rotulo>
        <Rotulo nome="Mensagem">
          <span style="white-space: pre">{{ mensagem }}</span>
          <!-- 'white-space: pre;' preserva os espaços em branco -->
        </Rotulo>
        <Rotulo nome="Marque as Opções">
          <span>
            <ul>
              <li v-for="(c, i) in caracteristas" :key="i">{{c}}</li>
            </ul>
          </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span>{{ produto }}</span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <span>{{ prioridade }}</span>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <span>{{ escolha }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: { Rotulo, Escolha },
  data() {
    return {
      enviado: false,
      escolha: false,
      prioridade: 1,
      prioridades: [
        { codigo: 1, nome: "baixa" },
        { codigo: 2, nome: "média" },
        { codigo: 3, nome: "alta" },
      ],
      produto: "web",
      caracteristas: [],
      mensagem: "",
      usuario: {
        email: "",
        senha: "",
        idade: 0,
      },
    };
  },
  methods: {
    enviar() {
      this.enviado = true;
    },
  },
  updated() {
    //console.log("this.usuario.idade =", typeof this.usuario.idade);
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
