<template>
  <div id="app">
    <h1>Tarefas</h1>
    <TaskProgress :progress="progress" />
    <NewTask @taskAdded="addTask($event)" />
    <TaskGrid
      :tasks="tasks"
      @taskDeleted="removeTask($event)"
      @taskStateChanged="toggleTaskState($event)"
    />
  </div>
</template>

<script>
import TaskGrid from "./components/TaskGrid";
import NewTask from "./components/NewTask";
import TaskProgress from "./components/TaskProgress";

export default {
  components: { TaskProgress, TaskGrid, NewTask },
  data() {
    return {
      tasks: [
        { name: "Lavar louça", pending: true },
        { name: "Comprar blusa", pending: false },
      ],
    };
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length; // total de tarefas concluidas
      return Math.round((done / total) * 100) || 0;
    },
  },
  methods: {
    addTask(task) {
      const sameName = (t) => t.name.toUpperCase() === task.name.toUpperCase(); // faz a comparação entre nomes das tarefas, retorna verdadeiro se forem iguais
      const reallyNew = this.tasks.filter(sameName).length == 0; //se retorna uma elemento maior q zero significa que a tarefas de nome repetido
      if (reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
        });
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1); // pega o elemento nesse indice e remove-o
    },
    toggleTaskState(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
    },
  },
  watch: {
    //Sempre que houver uma alteração em no array 'tasks'
    tasks: {
      //faz uma observação aprofundada, avaliando não apenas a remoção/inserção mais a troca de atributo internos, alterações etc..
      deep: true,
      //define a o manipulação que ocorrerá
      handler() {
        //transforma em o array em String depois salva essa string com a chave 'tasks'
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },
  },
  created() {
    //pega a string salva no localStorage
    const json = localStorage.getItem("tasks");
    const array = JSON.parse(json);
    this.tasks = Array.isArray(array) ? array : [];
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
