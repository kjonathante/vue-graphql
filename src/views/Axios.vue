<template>
  <div>
    <p>{{ status }}</p>
    <button @click="getResults">Get Data</button>
    <div class="display">
      <Card v-for="result in results" :data="result" :key="result.id">
        <CountryList :countries="result.countries"></CountryList>
      </Card>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card'
import CountryList from '@/components/CountryList'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    Card,
    CountryList
  },
  methods: {
    ...mapActions('kiva', ['getResults'])
  },
  computed: {
    ...mapGetters('kiva', ['results', 'status'])
  }
}
</script>
<style>
.display {
  display: flex;
  flex-wrap: wrap;
}
</style>
