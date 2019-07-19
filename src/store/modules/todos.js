// state
const state = {
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false }
  ]
}

// getters
const getters = {
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

// actions
const actions = {}

// mutations
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
