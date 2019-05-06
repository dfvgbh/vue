<template>
  <div class="product-item p-1 col-4 col-lg-3">
    <div class="card p-2 h-100 d-flex flex-column">
      <h4>
        {{ product.name }}
      </h4>
      <small class="text-justify text-small">
        {{ product.description }}
      </small>
      <h5 class="text-right mt-auto pt-2 mb-0">
        {{  product.price }}$
      </h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductsItem',
    props: {
      product: Object
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