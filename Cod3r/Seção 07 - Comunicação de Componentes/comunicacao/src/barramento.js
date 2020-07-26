/* Instância para gerênciamento de estado
 * Através dessa instância será possivel realizar a comunicação entre componentes irmãos diretamente 
 * (sem o uso de um componente pai) */
import Vue from 'vue'
export default new Vue({
    methods:{
        alterarIdade(idade){
            this.$emit('idade', idade)
        },
        quandoIdadeMudar(callback){
            this.$on('idade', callback)
        }
    }
})