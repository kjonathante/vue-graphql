<template>
  <div>
    <button @click="getLanguage">Get Data</button>
    <ul>
      <li v-for="result in results">{{ result.id }}</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      results: []
    }
  },
  methods: {
    async getLanguage() {
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
        // this.example1 = res.data.data.language
        console.log(res.data.data.general.partners.values)
        this.results = res.data.data.general.partners.values
      } catch (e) {
        console.log('err', e)
      }
    }
  }
}
</script>
