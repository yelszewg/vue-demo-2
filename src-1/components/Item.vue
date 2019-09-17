<template>
    <li :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
      <label>
        <input type="checkbox" v-model="complete"/>
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" v-show="isshow" @click="removeItem">删除</button>
    </li>
</template>


<script>
export default {
  name: Item,

  props: {
    todo: Object,
    removeTodo: Function,
    index: Number,
    completeTodo: Function
  },

  data() {
    return {
      bgColor: 'white',
      isshow: false
    }
  },

  computed: {
    complete: {
      get () {
        return this.todo.complete
      },
      set () {
        this.completeTodo(value, this.todo)
      }
    }
  },

  methods: {
    handleEnter (isEnter){
      if(isEnter){
        this.bgColor = '#aaaaaa'
        this.isshow = true
      } else {
        this.bgColor = 'white'
        this.isshow = false
      }
    }
  },

  removeTodo () {
    if(confirm('确实删除吗')) {
      this.removeTodo(this.index)
    }
  }
}
</script>


<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>