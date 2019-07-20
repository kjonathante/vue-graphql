<template>
  <div>
    <button @click="getLanguage">Get Data</button>
    <div>
      <Card v-for="result in results" :data="result"></Card>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Card from '@/components/Card'
import { mapState } from 'vuex'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    Card
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
  },
  computed: {
    ...mapState('kiva', ['results'])
  }
}
</script>
