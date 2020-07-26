<template>
  <div class="citacoes">
    <span>
      <button @click="numero--">&lt;</button>
      <button @click="numero++">&gt;</button>
    </span>
    <Citacao>
      <!-- Propriedades HTML podem ser definidas aqui, pois há uma slot definida no componente 'Citacao' -->
      <h3 slot="autor">{{citacoes[indice].autor}}</h3>
      <!-- 'slot nomeado', cada elemento HTML deve especificar a qual slot pertence -->
      <span>Citação:</span>
      <!--'slot padrão', nesse caso qualquer elemento não especificaddo irá pertencer ao 'slot' padrão -->
      <p>{{citacoes[indice].texto}}</p>
      <h6 slot="fonte">{{citacoes[indice].fonte}}</h6>
    </Citacao>
  </div>
</template>

<script>
import Citacao from "./Citacao";
export default {
  components: { Citacao },
  data() {
    return {
      numero: 0,
      citacoes: [
        {
          fonte: "Jornal do Empreendedor",
          texto:
            "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          autor: "Margaret Mead",
        },
        {
          fonte: "Frases de Mãe",
          texto: "Isso não é um quarto, é um chiqueiro.",
          autor: "Roberta",
        },
        {
          fonte: "Frases de Pai",
          texto: "Vou contar até 3! 1, 2, 2...",
          autor: "Gustavo",
        },
      ],
    };
  },
  computed: {
    indice() {
      return Math.abs(this.numero % 3);
    },
  },
};
</script>

<style scoped>
.citacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1,
h3 {
  /** Mesmo o HTML definido no atributo slot de componentes filho irão receber esse estilo (isso pode gerar conflitos) */
  color: black;
}
</style>
