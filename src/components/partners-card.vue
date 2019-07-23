<template>
  <Card>
    <slot name="default" v-bind:partner="data">
      <div>
        <p>{{ data.name }}</p>
      </div>
    </slot>
    <slot name="countries" v-bind:partner="data">
      <div>
        <ul>
          <li v-for="(country, index) in data.countries" :key="index">
            {{ country.name }}
          </li>
        </ul>
      </div>
    </slot>
    <slot name="footer" :closeModal="closeModal"></slot>
  </Card>
</template>

<script>
import Card from './Card'
export default {
  props: {
    data: Object
  },
  components: {
    Card
  },
  methods: {
    closeModal() {
      console.log('closeModal')
    }
  }
}
</script>

<style></style>
