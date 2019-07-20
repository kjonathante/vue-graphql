import Vue from 'vue'
import kiva from '../../api/kiva'
// state
const state = {
  results: [{ id: 'adf', name: 'adf' }],
  status: null
}

// getters
const getters = {
  results(state) {
    return state.results
  },
  status(status) {
    return state.status
  }
}

// actions
const actions = {
  async getResults({ commit }) {
    commit('setStatus', 'Requesting')
    try {
      const results = await kiva.getPartners()
      commit('setResults', {
        results: results.data.data.general.partners.values
      })
      commit('setStatus', 'Success')
    } catch (err) {
      commit('setStatus', 'Failed')
    }
  }
}

// mutations
const mutations = {
  setResults(state, { results }) {
    // state.results = results
    Vue.set(state, 'results', results)
  },
  setStatus(state, status) {
    state.status = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
