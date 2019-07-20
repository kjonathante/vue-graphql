<template>
  <div>
    <Country
      v-for="(country, index) in countries"
      :country="country"
      :key="index"
    ></Country>
  </div>
</template>

<script>
import Country from './Country'
export default {
  props: {
    countries: Array
  },
  computed: {
    getLength() {
      return this.countries.length
    }
  },
  components: {
    Country
  }
}
</script>

<style></style>
