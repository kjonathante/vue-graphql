# State

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
