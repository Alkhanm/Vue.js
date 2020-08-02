<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert
      show
      dismissible
      v-for="mensagem in mensagens"
      :key="mensagem.texto"
      :variant="mensagem.tipo"
    >{{mensagem.texto}}</b-alert>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input v-model="usuario.nome" placeholder="Informe seu nome" type="text" size="md"></b-form-input>
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input v-model="usuario.email" placeholder="Informe o email" type="email" size="md"></b-form-input>
      </b-form-group>
      <hr />
      <b-button class="mr-4" @click="salvar()">Salvar</b-button>
      <b-button squared @click="obterUsuarios()">Listar Usuarios</b-button>
    </b-card>
    <hr />
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Nome:</strong>
        {{usuario.nome}}
        <br />
        <strong>Email:</strong>
        {{usuario.email}}
        <br />
        <strong>ID:</strong>
        {{id}}
        <hr />
        <b-button @click="carregar(id)" variant="primary">Carregar</b-button>
        <b-button @click="excluir(id)" variant="danger" class="ml-2">Excluir</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagens: [],
      usuarios: [],
      id: null,
      usuario: {
        nome: "",
        email: "",
      },
    };
  },
  methods: {
    salvar() {
      //Se o id já existir, atualiza com 'patch' senão usa o 'post' pra criar um novo usuário
      const metodo = this.id ? "patch" : "post";
      const finalURL = this.id ? `/${this.id}.json` : ".json"; //'post' e 'put' possuem parâmetros diferentes
      this.$_http[metodo](`/usuarios${finalURL}`, this.usuario).then((_) => {
        this.limpar();
        this.addMensagem(true);
      });
    },
    obterUsuarios() {
      this.$_http.get("usuarios.json").then((response) => {
        this.usuarios = response.data; // dentro de data estão os usuarios pegos na requisição
        this.addMensagem(true);
      });
    },
    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[id] };
    },
    excluir(id) {
      console.log(this.usuarios[id]);
      this.$_http
        .delete(`usuarios/${id}.json`)
        .then((res) => this.obterUsuarios())
        .catch((err) => {
          this.addMensagem(false);
        });
    },
    limpar() {
      this.usuario.nome = "";
      this.usuario.email = "";
      this.id = null;
      this.mensagens = [];
    },
    addMensagem(tipo) {
      if (tipo) {
        this.mensagens.push({
          texto: "Operação realizada com sucesso.",
          tipo: "success",
        });
      } else {
        this.mensagens.push({
          texto: "Erro. A operação não pôde ser concluida.",
          tipo: "danger",
        });
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
