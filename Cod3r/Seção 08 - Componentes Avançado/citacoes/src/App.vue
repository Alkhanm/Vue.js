<template>
  <div id="app">
    <span class="componente">
      <button @click="esseComponente = 'Citacoes'">Citações</button>
      <button @click="esseComponente = 'Sobre'">Sobre</button>
    </span>
    <!-- Renderiza dinâmicamente o componente selecionado através da tag especial 'componente',
	 neste caso o componente selecionado está definiddo na variavel 'componente'.
    Obs: vale citar que, por padrão, sempre um componente exibido muda ele é destruido e o novo componente é criado, através dos metodos 'created/destroyed'-->
    <keep-alive>
      <!-- 'keep-alive' é uma forma de alternar entre o antigo e novo componete sem 
      necessariamente ter destruir/criar um novo a caa troca.
	  Nesse caso em vez de destruir/criar o componente, será apenas ativado/desativado -->
      <component :is="esseComponente" />
    </keep-alive>
  </div>
</template>

<script>
import Citacoes from "./components/Citacoes";
import Sobre from "./components/Sobre";

export default {
  components: { Citacoes, Sobre },
  data() {
    return {
      esseComponente: "Sobre",
    };
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.6rem;
}

button {
  outline: none;
  padding: 5px 15px 10px;
  margin: 10px 5px;
  border-radius: 3px;
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
.componente {
  top: 0;
  position: fixed;
}
</style>