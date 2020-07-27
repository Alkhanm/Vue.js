<template>
  <div class="new-task">
    <input
      v-model="name"
      @keydown.enter="add()"
      type="text"
      class="form-element"
      placeholder="nova tarefa?"
    />
    <button @click="add()" class="form-element">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      this.$emit("taskAdded", { name: this.name }); // emite um evento e passa um objeto com o atributo nome como parâmetro
      this.name = "";
    },
  },
};
</script>

<style>
.new-task {
  margin: 35px;
}
.form-element {
  outline: none;
  font-size: 1.5rem;
  border: 1px solid #fff;
  padding: 5px 10px 8px;
  color: #fff;
}
input.form-element {
  width: 500px;
  background: #fff2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
button.form-element {
  border-left: none;
  background-color: #2196f3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>