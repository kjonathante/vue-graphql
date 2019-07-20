<template>
  <div class="card">
    <p>{{ data.name }}</p>
    <CountryList :countries="data.countries"></CountryList>
  </div>
</template>

<script>
import CountryList from './CountryList'
export default {
  props: {
    data: Object
  },
  components: {
    CountryList
  }
}
</script>

<style scoped>
.card {
  border: 1px solid black;
  width: 10%;
  margin: 10px;
  padding: 10px;
}
</style>
