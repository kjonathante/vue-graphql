<template>
  <div>
    <h1>{{ result }}</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    result() {
      console.log(this.$route)
      return this.$route.fullPath
    }
  }
}
</script>

<style></style>
