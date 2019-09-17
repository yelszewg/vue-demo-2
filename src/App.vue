<template>
  <div>
    <p>click {{count}}, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },

  computed: {
    eventOrOdd () {
      return this.count%2==1? '奇数' : '偶数'
    }
  },

  methods: {
    
  }
}
</script>

<style>

</style>