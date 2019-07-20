import axios from 'axios'
import Vue from 'vue'
// state
const state = {
  results: []
}

// getters
const getters = {
  results(state) {
    return state.results
  }
}

// actions
const actions = {
  async getResults({ commit }) {
    try {
      const res = await axios.post('https://api.kivaws.org/graphql', {
        query: `{
          general {
            partners {
              values {
                id,
                name,
                countries {
                  name
                  isoCode
                  region
                  ppp
                  numLoansFundraising
                  fundsLentInCountry
                }
              }
            }
          }
        }`
      })
      commit('setResults', { results: res.data.data.general.partners.values })
    } catch (e) {
      console.log('err', e)
    }
  }
}

// mutations
const mutations = {
  setResults(state, { results }) {
    // state.results = results
    Vue.set(state, 'results', results)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
