/* eslint-disable no-unused-vars */
export default {
    /* 1.1 - A partir do momento em que o namespaced é definido, todas as propriedades/estado/mutações pertencem a esse modulo, 
     * e para serem acessados devem receber um parâmetros com o nome do namespaced */
    namespaced: true,
    /* 2.1 - Representa o estado central do vuex apenas neste modulo */
    state: {
        produtos: [],
    },
    /* 2.2 - Os getters, mutattions e actions são registradas por padrão no estado global, 
     * assim ñ se pode repetir os nomes desse métodos em outros modulos */
    /* 3 - Responsavél por enviar dados processados aos componentes. Assemelhaça-se ao 'computed' da instância Vue */
    getters: {
        /*3.1 - 
         * 'state' equivale ao estado apenas de carrinho
         * 'getters' acessa as propriedades getters
         * 'rootState' estado global. 
         * Só está dividido assim em modulos separados, caso estive em um único modulo, o proprio 'state' seria o estado global*/
        valorTotal(state, getters, rootState, rootGetters) {
            return state.produtos
                .map(produto => produto.quantidade * produto.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    /* 4 - Equivale ao setters. 
     * Responsavel por alterar estado da aplicação.
     * Eventualmente algumas ações podem ocorrer dentro de uma 'mutations', 
     * mas é importante ter em mente que sua principal função é commitar mudanças de estado.
     * As regras de mudança devem estar nas 'actions' e não aqui. */
    mutations: {
        /* 4.1  Recebe como argumento o estado e a mutação que ocorrerá (payload) */
        /* 4.2 - Esse método será chamado dentros dos componentes através de um commit */
        adicionarProduto(state, produto, rootState) {
            state.produtos.push(produto)
        },
    },
    /* 5 - É uma auxiliar das 'mutations'.
     * É aqui onde deve estar a lógica das mutações de estado, as regras de negócio, chamadas ao backend, etc... 
     * Serve principalmente para reaproveitar código, centralizar as funções. */
    actions: {
        /* 5.1 - Nesse caso a função não recebe o 'state' como argumento, 
         * afinal o objetivo da action não é alterar o estado da aplicação */
        /* 5.2 - 'context' equivale a um 'this' (se refere a instância Vuex) */
        adicionarProduto: {
            /* 5.3 - quando o 'carrinho' for importado, ele se aclopará a estado global, 
             * e não precisará ser acessado através do namespaced */
            root: true,
            handler(context, produto) {//as ações são definidas aqui
                setTimeout(() => { // simula um assincronismo na chamada ao 'mutation'
                    context.commit('adicionarProduto', produto)
                }, 1000)
            }
        },
        // adicionarProduto(context, produto) {
        //     setTimeout(() => { // simula um assincronismo na chamada ao 'mutation'
        //         context.commit('adicionarProduto', produto)
        //     }, 1000)
        // }
    }
}