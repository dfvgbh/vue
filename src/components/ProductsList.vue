<template>
  <div
    v-if="products && products.length"
    class="d-flex flex-wrap align-items-stretch"
  >
    <ProductsItem
      v-for="product of products"
      :product="product"
      :key="product.id"
    />
  </div>
</template>

<script>
  import axios from 'axios';
  import ProductsItem from './ProductsItem';

  export default {
    name: 'ProductsList',
    components: {
      ProductsItem
    },

    data() {
      return {
        products: []
      }
    },

    async created() {
      const { data } = await axios.get('http://localhost:3000/products');
      this.products = data;
    }
  }
</script>

<style scoped lang="scss">
</style>