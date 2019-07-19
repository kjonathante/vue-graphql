// state
const state = {
  count: 0
}

// getters
const getters = {}

// actions
const actions = {
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
  }
}

// mutations
const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
