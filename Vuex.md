# State

```javascript
import Vuex from 'vuex'

export default new Vuex.Store({
  strict: true,
  plugins: [],
  modules: {},
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
```

## Getting Vuex State into Vue Components

```javascript
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
```

```javascript
import { mapState } from 'vuex'

export default {
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
    ])
  }
}
```

## "getters" in the store

## modules

```javascript
// state
const state = {}

// getters
const getters = {}

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
```
