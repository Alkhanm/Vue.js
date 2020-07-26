<template>
  <div id="app">
    <Table :users="users" ></Table>
    <display></display>
  </div>
</template>

<script>
import Table from "./components/Table";
import Display from "./components/Display";

export default {
  name: "App",
  components: { Display, Table },
  data(){
    return{
       users: [
        { id: 1, name: "Ana", idade: 32 },
        { id: 2, name: "Carlos", idade: 21 },
        { id: 3, name: "Daniel", idade: 18 },
        { id: 4, name: "Ema", idade: 56 },
        { id: 5, name: "Lia", idade: 19 },
      ],
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  font-size: 2rem;
}

#app div {
  margin: 20px;
}
</style>
