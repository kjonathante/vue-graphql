<template>
  <div>
    <p>{{ status }}</p>
    <div class="display">
      <partners-card v-for="result in results" :data="result" :key="result.id">
        <!-- <template v-slot:countries="{ partner }">
          <CountryList :countries="partner.countries"></CountryList>
        </template>-->
      </partners-card>
    </div>
  </div>
</template>
<script>
import PartnersCard from '@/components/partners-card'
import CountryList from '@/components/CountryList'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data() {
    return {}
  },
  created() {
    this.getResults()
  },
  components: {
    PartnersCard,
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
  margin: auto 150px;
}
</style>
