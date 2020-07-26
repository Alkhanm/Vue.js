<template>
  <div class="citacao">
    <slot name="fonte"></slot>
    <!-- Permite que HTML seja injetado por outros componentes -->
    <slot></slot>
    <div class="autor">
      <slot name="autor"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      criado: 0,
    };
  },
   created(){
      this.criado++
    console.log('created')
  },
  destroyed(){
    console.log('destroyed')
  },
  activated(){ 
    this.criado++;
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  }
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
h1,
h3 {
  /* Esse estilo irá ser aplicada nos componentes HTML definidos dentro do 'slot' */
  color: red;
}
.autor {
  float: right;
}
</style>
