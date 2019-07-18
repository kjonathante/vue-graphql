<template>
  <div>
    <p>{{ data.id }}</p>
    <p>{{ data.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style></style>
