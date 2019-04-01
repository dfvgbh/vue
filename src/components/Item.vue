<template>
  <div class="card">
    <h3>
      {{ name }}
    </h3>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: ['name'],
  }
</script>

<style scoped>

</style>