<template>
  <div>
    <p>{{ status }}</p>
    <button @click="getResults">Get Data</button>
    <div class="display">
      <Card v-for="result in results" :data="result" :key="result.id"></Card>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    Card
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
