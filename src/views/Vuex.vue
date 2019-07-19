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
      <button @click="add">add</button>
    </p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

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
    ...mapState('count', {
      // arrow functions can make the code very succinct!
      count: state => state.count,

      // passing the string value 'count' is same as `state => state.count`
      countAlias: 'count',

      // to access local state with `this`, a normal function must be used
      countPlusLocalState(state) {
        return state.count + this.localCount
      }
    }),
    ...mapState('count', [
      // map this.count to store.state.count
      'count'
    ]),
    doneTodosCount() {
      return this.$store.getters['todos/doneTodosCount']
    },
    getTodoById() {
      return this.$store.getters['todos/getTodoById'](2)
    },
    ...mapGetters('todos', {
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      doneCount: 'doneTodosCount'
    })
  },
  methods: {
    increment() {
      this.$store.dispatch('count/incrementAsync')
      // dispatch with a payload
      this.$store.dispatch('count/incrementAsync', {
        amount: 10
      })
      // dispatch with an object
      this.$store.dispatch({
        type: 'count/incrementAsync',
        amount: 10
      })
    },
    decrement() {
      this.$store.dispatch('count/decrement')
    },
    ...mapActions('count', {
      add: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
    }),
    ...mapActions('count', [
      'decrement' // map `this.decrement()` to `this.$store.dispatch('decrement')`
    ])
  }
}
</script>

<style></style>
