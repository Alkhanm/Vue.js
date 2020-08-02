import Vue from 'vue' // importa esses pacotes do node modules
import axios from 'axios'

/* Define a URL base global de acessa ao servidor HTTP */
// axios.defaults.baseURL = 'https://curso-vue-44060.firebaseio.com/'

/* Define o cabeçalho nas requisoções HTTP */
// axios.defaults.headers.common['Authorization'] = 'algumToken123'
// axios.defaults.headers.get['Accept'] = 'application/json'

/* Instala o 'axios' como um plugin do 'Vue' */
Vue.use({
    install(Vue) {
        /* Cria um método global chamado 'http' que aponta diretamente para o axios
         * O método agora faz parte do Vue e pode ser acessado em qualquer parte da aplicação através do 'this.$http'*/
        // Vue.prototype.$http = axios
        /* Define uma instância do axios com suas proprias configurações. 
         * Dessa forma, varias instâncias diferentes podem ser configuradas acessando cada qual uma API */
        Vue.prototype.$_http = axios.create({
            baseURL: 'https://curso-vue-44060.firebaseio.com/',
            headers: {
                'Authorization': ''
            }

        })
        /* Intercepta as requisições feitas pela aplicação */
        Vue.prototype.$_http.interceptors.request.use(config => { /*No argumento config ficam as informações acerca da requisição realizada*/
            console.log(config.method)
            /* Exemplo de uso. Faz com q toda requisição posto passe a ser put */
            // if (config.method == post) {
            //   config.method = put;
            // }
            return config
        }, erro => Promise.reject(erro))
        /* Intercepta as respostas da API */
        // Vue.prototype.$_http.interceptors.response.use(res => {
        //     const array = []
        //     for (let chave in res.data) {
        //         // pega o id e e todos os atributos do objeto que possui esse ID e coloca em um objeto no array
        //         array.push({ id: chave, ...res.data[chave] })
        //     }
        //     res.data = array
        //     return res
        // }, erro => Promise.reject(erro))
    }
})
