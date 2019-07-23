<template>
  <div>
    <p>{{ country.name }}</p>
    <ul>
      <li
        v-for="key in ['fundsLentInCountry', 'numLoansFundraising']"
        :key="key"
      >
        {{ country[key] }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    country: Object
  }
}
</script>

<style></style>
