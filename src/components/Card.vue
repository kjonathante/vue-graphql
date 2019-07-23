<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card {
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;

  width: 10%;
  margin: 10px;
  padding: 10px;
}
</style>
