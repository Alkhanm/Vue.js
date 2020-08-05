export default {
    /* 2 - Representa o estado central do vuex */
    state: {
        quantidade: 2,
        preco: 120
    },
    /* Equivale ao setters. 
     * Responsavel por alterar estado da aplicação.
     * Eventualmente algumas ações podem ocorrer dentro de uma 'mutations', 
     * mas é importante ter em mente que sua principal função é commitar mudanças de estado.
     * As regras de mudança devem estar nas 'actions' e não aqui. */
    mutations: {
        setQuantidade(state, qnt) {
            state.quantidade = qnt
        },
        setPreco(state, preco) {
            state.preco = preco
        }
    },
    actions: {
        setQuantidade(context, payload) {
            context.commit('setQuantidade', payload)
        },
        setPreco(context, payload) {
            context.commit('setPreco', payload)
        },
    }
}