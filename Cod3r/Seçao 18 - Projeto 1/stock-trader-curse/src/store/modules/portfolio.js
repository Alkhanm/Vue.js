export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        buyStocks(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks
                .find(s => s.id == stockId) // recebe o um predicate e retorna o primeiro elemento que o satisfação
            if (record) { // verifica se o elemento já existe
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity
        },
        sellStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(e => e.id == stockId)
            if (record.quantity > quantity) {
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)// exclui o elemento
            }
            state.funds += stockPrice * quantity
        },
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        }
    },
    actions: {
        sellStock({ commit }, order) {
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const record = getters.stocks.find(s => s.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.nome,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}