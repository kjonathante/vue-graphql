import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {}
// });

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  getters: {
    // Property-Style Access
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    // Method-Style Access
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})
