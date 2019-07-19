<template>
  <div class="vuex">
    <h1>This is an Vuex page</h1>

    <p>count {{ count }}</p>
    <p>countAlias {{ countAlias }}</p>
    <p>countPlusLocalState {{ countPlusLocalState }}</p>
    <p>doneTodosCount {{ doneTodosCount }}</p>
    <p>getTodoById {{ getTodoById }}</p>
    <p>doneCount {{ doneCount }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      localCount: 100
    }
  },
  computed: {
    localComputed() {
      return '...'
    },
    // mix this into the outer object with the object spread operator
    ...mapState({
      // arrow functions can make the code very succinct!
      count: state => state.count,

      // passing the string value 'count' is same as `state => state.count`
      countAlias: 'count',

      // to access local state with `this`, a normal function must be used
      countPlusLocalState(state) {
        return state.count + this.localCount
      }
    }),
    ...mapState([
      // map this.count to store.state.count
      'count'
    ]),
    doneTodosCount() {
      return this.$store.getters.doneTodosCount
    },
    getTodoById() {
      return this.$store.getters.getTodoById(2)
    },
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      doneCount: 'doneTodosCount'
    })
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style></style>
