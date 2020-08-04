import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/Inicio.vue'
import Menu from "./components/template/Menu.vue";
// import Usuario from './components/Usuario.vue'
// import UsuarioLista from './components/UsuariosLista.vue'
// import UsuarioDetalhe from './components/UsuarioDetalhe.vue'
// import UsuarioEditar from './components/UsuarioEditar.vue'


/* Registra o Router globalmente na aplicação. Poderá ser acessado através de vm.$router */
Vue.use(Router)
/* Cria uma função callback para carregamento tardia.
 * No lugar de criar uma variavel com o valor do import, aqui se define uma função, 
 * que irá ser chamada apenas quando esse componente for acessado. 
 * Isso evita um carregamento inicial demorado em aplicações grandes.
 * Cada import será tratado como um arquivo js individual pelo navegador
 * O comentario 'webpackChunkName' faz com que todos os import comentados sejam tratados como um único arquivo 'usuario.js'*/
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/Usuario.vue')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/UsuariosLista.vue')
const UsuarioDetalhe = () => import('./components/UsuarioDetalhe.vue')
const UsuarioEditar = () => import('./components/UsuarioEditar.vue')


//Objeto de configuração do Router
const router = new Router({
    mode: 'history',
    scrollBehavior(to,from,savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) { /* se o componente possuir um hash (#id-do-elemento) */
            return { selector: to.hash } /* o hash desse componente ganhará foco */
        } else {
            return { x: 0,y: 0 } /**Faz com que ao ser renderizado um componente a navegação vá para 0px */
        }
    },
    routes: [
        {
            //Registra a rota inicial, acessivel atráves do '/'
            path: '/',
            name: "inicio", //agora essa rota pode ser acessada atráves deste nome
            // component: Inicio
            components: {
                default: Inicio,
                menu: Menu
            }
        },
        {
            path: '/usuario',
            component: Usuario,
            props: true,
            /* Registra as rotas filhas (rotas aninhadas que dependem do path concatenado da rota superior = /usuario) */
            children: [
                {
                    path: '',
                    component: UsuarioLista
                },
                /* Os dois ponto ( : ) especifica que a rota recebera um argumento 
                 * Props: true faz com que o componente definido receba automaticamente todos os argumentos da rota*/
                {
                    path: ':id',
                    component: UsuarioDetalhe,
                    props: true,
                    /** Gatilho de ciclo de vida, próprio das rotas */
                    beforeEnter: (to,from,next) => { // antes de entrar nesta rota
                        console.log('Antes da rota -> UsuarioDetalhe (rota /usuario/:id')
                        next()
                    }
                },
                {
                    path: ':id/editar',
                    component: UsuarioEditar, // chama a callback que irá importar o componente
                    props: true,
                    name: "editarUsuario"
                }
            ]
        },
        {
            //Lida com o redirecionamento de URL's
            path: '/redirecionar', // pega esse caminho URL
            redirect: '/usuario' // envia para cá
        },
        {
            path: '*', // captura qualquer rota não mapeada e enviar
            redirect: '/' // para cá
        }
    ]
})
/* 'beforeEach()' -> é um gatilho de ciclo de vida do componente de rotas
* Para validar o acesso, antes de cada rota ser acessada, uma função callback será passada 
* 'to' - para onde (destino)
* 'from' - de onde
* 'next' - chama a rota (se não for passado a rota será bloqueada) */
router.beforeEach((to,from,next) => {
    console.log('antes das rotas -> global')
    /* Chama as rotas. 
     * Aceita opções como parâmetros, uma rota pode ser definida next('/usuario') ou até impedir a navegação next(false)*/
    next()
})
export default router