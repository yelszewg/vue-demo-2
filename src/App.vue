<template>
  <div class="todo-container">
  <div class="todo-wrap">
    <Header :addTodo="addTodo" />
    <List :todos = "todos" :removeTodo="removeTodo" :completeTodo="completeTodo"  />
    <Footer :todos = "todos" :selectAll = "selectAll" :clearAllComplete = "clearAllComplete" />
    
  </div>
  </div>
</template>


<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default {
  data () {
    return {
      todos: []
    }
  },

  mounted() {
    setTimeout(()=>{
      const todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
      this.todos = todos
    },1000)
  },

  watch: {
    todos: {
      deep: true,
      handler (val) {
        localStorage.setItem('todos_key', JSON.stringify(val))
      }
    }
  },

  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },

    removeTodo (index) {
      this.todos.splice(index, 1)
    },

    selectAll (check) {
      this.todos.forEach(todo => todo.complete = check)
    },

    clearAllComplete () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },

    completeTodo (check, todo) {
      todo.complete = check
    }
  },

  components: {
    Header,
    List,
    Footer
  }
}
</script>


<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>