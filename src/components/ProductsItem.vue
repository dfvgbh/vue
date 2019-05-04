<template>
  <div class="product-item col-3 p-1">
    <div class="card p-2 h-100">
      <h5>
        {{ todo.text }}
      </h5>
      <input
        type="checkbox"
        v-model="todo.completed"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductsItem',
    props: {
      todo: Object
    }
  }
</script>

<style scoped>
  .product-item {
    color: #343434;
  }

  .card {
    background-color: #eee;
  }

</style>