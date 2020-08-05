import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modulos/carrinho.js'
import parametros from './modulos/parametros.js'
/* 3.1 - Importa as funções getters  */
import * as getters from './getters.js'


Vue.use(Vuex)

/* 1 - Função construtora. Define os atributos que o Vuex irá possuir */
export default new Vuex.Store({
    state: {
        nome: 'Joás',
        sobrenome: 'Sousa Andrade'
    },
    getters: {
        /* 3.2 - registra a importação do getters */
        ...getters
    },
    //2.1 - Referência os modulos
    modules: { carrinho, parametros },
    //2.2 - Forma uma estrutura semelhante a isso:
    // state: { 
    //     carrinho: { 
    //         produtos: []
    //     },
    //     parametros: { 
    //         quantidade: 0
    //     }
    // }
})