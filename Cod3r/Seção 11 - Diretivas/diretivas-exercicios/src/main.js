import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Declaração de um diretiva global, acessivel em qualquer parte da aplicação.
Vue.directive("destaque", {
  bind(el, binding, vnode) { // el -> representa o elemento DOM que está sendo manipulado
    let atraso = 0

    // caso haja um modificar chamado atrasar nesta diretiva
    if (binding.modifiers['atrasar']) atraso = 3000
    setTimeout(() => {
      //el.style.backgroundColor = "lightgreen";
      if (binding.arg === 'fundo') { // se a diretiva receber um argumento chamado 'fundo'
        el.style.backgroundColor = binding.value;
      } else { // se a diretiva não possuir esse argumento
        el.style.color = binding.value;
      }
    }, atraso)

  },

});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
/*
   * el:
      O elemento a que a diretiva está vinculada. Isso pode ser usado para manipular o DOM diretamente.
   * binding:
      Um objeto contendo as seguintes propriedades:
   * name:
      O nome da diretiva, sem o prefixo v-.
   * value:
      O valor passado para a diretiva. Por exemplo em v-my-directive="1 + 1", o valor passado seria 2.
   * oldValue:
      O valor anterior, somente disponível em update e componentUpdated.
      Está presente tanto se o valor foi alterado quanto não alterado.
   * expression:
      A expressão de vinculação como uma String. Por exemplo em v-my-directive="1 + 1", a expressão seria "1 + 1".
   * arg:
      O argumento passado para a diretiva, se houver algum. Por exemplo em v-my-directive:foo, o argumento seria "foo".
   * modifiers:
      Um objeto contendo modificadores, se houver algum. Por exemplo em v-my-directive.foo.bar, o objeto seria { foo: true, bar: true }.
   * vnode:
      O nó virtual produzido pelo compilador do Vue. Veja VNode API para mais detalhes.
   * oldVnode:
      O nó virtual anterior, somente disponível em update e componentUpdated.
   * */