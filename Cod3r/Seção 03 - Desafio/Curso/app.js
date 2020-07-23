new Vue ({
    el: '#app',
    data: {
        running: false,
        playerLife: 0,
        monsterLife: 10,
        logs : []
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods:{
        startGame(){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        attack(especial){
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player')
            if(this.monsterLife > 0){
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster') // 'playerLife' é o nome do atributo q irá sofre a ação
            }
        },
        hurt(atr, min, max, especial, source, target, cls){
            const plus  = especial ? 5 : 0 // caso a flag especial esteja ativa o jogador ganha um bonus de 5 dano
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)//É possivel definir o atributo q irá sofrer essa ação através de um parâmetro como 'atr'
            /* Irá atribuir o maior valor resultante desta operação. 
             * Caso o vida do jogador fique em negativo, retorna o 0, pois ele é maior */
            this.registerLogs(`${source} atingiu o ${target} com ${hurt}`, cls )
        },
        healAndHurt(){
            this.heal(10, 17)
            this.hurt('playerLife', 7, 15, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(min, max){
            const heal = this.getRandom(min, max);
            // aumenta a vida do jogador de acordo com o número gerado, caso cure mais do que 100 de vida, irá retorna apenas 100
            this.playerLife = Math.min(this.playerLife + heal, 100) 
            this.registerLogs(`Jogador ganhou força de ${heal}`, 'player')
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLogs(text, cls){
            this.logs.unshift({text, cls})
        }
    },
    watch:{
        hasResult(value){// 'value' é um boolean que indica se a propriedade foi alterada ou não
            if (value) this.running = false
        }
    }
})