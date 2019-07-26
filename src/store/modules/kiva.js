import Vue from 'vue'
import kiva from '../../api/kiva'
// state
const state = {
  results: [
    {
      id: 'adf',
      name: 'adf',
      countries: [
        {
          name: 'Somalia',
          isoCode: 'SO',
          region: 'Africa',
          ppp: null,
          numLoansFundraising: 0,
          fundsLentInCountry: 315625
        }
      ]
    }
  ],
  status: 'Uninitialized',
  totalCount: 0,
  loading: false,
  error: null
}

// getters
const getters = {
  results(state) {
    return state.results
  },
  status(state) {
    return state.status
  },
  totalCount(state) {
    return state.totalCount
  }
}

// actions
const actions = {
  async getResults({ commit }, payload) {
    // console.log(payload)
    commit('setStatus', 'Requesting')
    try {
      const results = await kiva.getPartners(payload.offset)
      commit('setResults', {
        results: results.data.data.general.partners.values
      })
      commit('setTotalCount', results.data.data.general.partners.totalCount)
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
  },
  setTotalCount(state, totalCount) {
    state.totalCount = totalCount
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
