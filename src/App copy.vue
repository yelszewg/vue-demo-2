<template>
  <div>
    <p>click {{$store.state.count}}, count is {{$store.getters.evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  mounted () {

  },

  methods: {
    increment () {
      this.$store.commit('INCREMENT')
    },
    decrement () {
      this.$store.commit('DECREMENT')
    },
    incrementIfOdd () {
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync () {
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>

<style>

</style>