<template>
  <div id="app" class="container-fluid">
      <h1>Animações</h1>
       <div v-show="true">
      <hr />
      <b-button class="mb-4" variant="primary" @click="exibir = !exibir">Mostrar mensagem</b-button>
      <!-- Container Vue onde irá ocorrer uma efeito de transição -->
      <transition name="fade" appear>
        <!-- Se nem um nome for definido, por padrão, as classes CSS receberão 'v' como nome -->
        <b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
      </transition>
      <transition name="slide" type="animation" appear>
        <!-- Se nem um nome for definido, por padrão, as classes CSS receberão 'v' como nome -->
        <!-- 'type' define qual efeito (animation, transition) tem maior prioridade. 
        Isso evita alguns bugs. Use o type que tiver menos tempo, se necessario-->
        <!-- 'appear' faz com que a animação seja utilizada durante o carregamento da aplicação -->
        <b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>-->
      </transition>
      <transition
        enter-active-class="animated animate__rollIn"
        leave-active-class="animated animate__hinge"
      >
        <!-- 'enter-active-class' usa uma classe CSS de terceiros para animação, 
        como por exemplo a classe 'animate__rollIn' do pacote animated.css-->
        <b-alert variant="danger" show v-if="exibir">{{msg}}</b-alert>-->
        <!-- https://animate.style/#usage -->
      </transition>
      <hr />
      <b-select class="mb-4" v-model="tipoAnimacao">
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
      </b-select>
      <transition :name="tipoAnimacao" mode="out-in">
        <b-alert show v-if="exibir" variant="info" key="info">{{msg}}</b-alert>
        <!-- <b-alert show v-else variant="warning" key="warning">{{msg}}</b-alert> -->
        <!--'transition' funciona apenas com um elemento. 
        Para realizar a transição entre dois elementos use o atributo 'key'
        'mode='out-in' define que primeiro uma elemento deve sair antes que outro entre.-->
      </transition>
      <hr />
      <b-button @click="exibir2 = !exibir2">Alternar</b-button>
      <hr />
      <transition
        :css="false"
        @beforeEnter="beforeEnter"
        @enter="enter"
        @beforeLeave="beforeLeave"
        @leave="leave"
      >
        <div v-if="exibir2" class="caixa"></div>
      </transition>
      <hr />
      <transition name="fade" mode="out-in">
        <!-- O uso de transições em componente dinâmicos é bastante simples: -->
        <component :is="componenteSelecionado"></component>
      </transition>
      <b-button @click="componenteSelecionado='AlertaInfo'" class="mr-2">Informação</b-button>
      <b-button @click="componenteSelecionado = 'AlertaAdvertencia'">Alerta</b-button>
      <hr />
    </div>
    <hr>
    <b-button @click="addAluno()" class="mb-4">Adicionar aluno</b-button>
    <transition-group name="slide" mode="out-in" tag="div">
      <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
        <b-list-group-item @click="removerAluno(i)" >
          {{aluno}}
        </b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template> 

<script>
import AlertaAdvertencia from "./AlertaAdvertencia";
import AlertaInfo from "./AlertaInfo.vue";

export default {
  components: { AlertaAdvertencia, AlertaInfo },
  data() {
    return {
      alunos: [],
      msg: "Uma mensagem para exibir ao usuário",
      exibir: false,
      tipoAnimacao: "",
      exibir2: false,
      larguraBase: 0,
      componenteSelecionado: "",
    };
  },
  methods: {
    addAluno() {
      const s = Math.random()
        .toString(36)
        .substring(2);
      this.alunos.push(s);
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1);
    },
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 60) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      console.log("beforeEnter", "1/4");
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      //console.log("enter", "2/4");
      this.animar(el, done, false);
    },
    // afterEnter(el) {
    //   console.log("afterEnter", "3/4");
    // },
    // enterCancelled(el) {
    //   console.log("enterCancelled", "4/4");
    // },

    beforeLeave(el) {
      console.log("beforeLeave", "5/8");
      this.larguraBase = 600;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      //console.log("leave", "6/8");
      this.animar(el, done, true);
    },
    // afterLeave(el) {
    //   console.log("afterLeave", "7/8");
    // },
    // leaveCancelled(el) {
    //   console.log("leaveCancelled", "8/8");
    // },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}
.fade-enter {
  /**Começa com 0 */
  opacity: 0; /**O elemento estará invisivel */
}
/**O momento em que o elemento passará ser visivel */
.fade-enter-active {
  /**Demora 2 até... */
  transition: opacity 0.5s; /**Terá uma transição de invisivel para visivel de 3 segundos */
}
.fade-enter-to {
  /**Ficar ativo*/
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
/**O momento em que o elemento deixará de ser visivel */
.fade-leave-active {
  transition: opacity 0.5s;
}
/*O destino do elemento */
.fade-leave-to {
  opacity: 0;
}
/**Entrada do slide */
@keyframes slide-in {
  from {
    transform: translateY(300px);
    /**Trás o elemento atráves do eixo Y (vertical) desde 300px abaixo */
  }
  to {
    /**Destino do elemento, ou seja 0px em relação ao local da DOM onde esse elemento foi definido.  */
    transform: translateY(0px);
  }
}
/**Saida do slide */
@keyframes slide-out {
  from {
    transform: translateY(0);
    /**Na saida desse elemento, leve-o, na vertical, desde o seu local (0px) */
  }
  to {
    /**Até o pixel 300px */
    transform: translateY(300px);
  }
}
.slide-enter-active {
  /** Define qual a animição será usada na transição (no caso o 'keyframe slide-in'), 
   * define quanto segundos de transição 
   * e qual algoritmo será usado */
  animation: slide-in 2s ease;
  transition: opacity 2s;
}
.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-move {
  /*Define o movimento caso haja a transição entre varios elementos*/
  transition: transform 1s;
}
/*******************************************/
.caixa {
  height: 100px;
  margin: 10px auto;
  background-color: lightgreen;
}
</style>
