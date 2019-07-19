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
  actions: {
    increment(context) {
      // context.commit
      // context.state
      // comtext.getters
      // context.dispatch
      context.commit('increment')
    },
    decrement({ commit }) {
      commit('decrement')
    },
    incrementAsync({ commit }, payload) {
      setTimeout(() => {
        commit('increment')
        console.log(payload)
      }, 1000)
    },
    actionA({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('decrement')
          resolve()
        }, 1000)
      })
    },
    actionB({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit('decrement')
      })
    },
    async actionA({ commit }) {
      commit('gotData', await getData())
    },
    async actionB({ dispatch, commit }) {
      await dispatch('actionA') // wait for `actionA` to finish
      commit('gotOtherData', await getOtherData())
    }
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
