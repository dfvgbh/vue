<template>
  <div
    v-if="products && products.length"
    class="d-flex flex-wrap align-items-stretch"
  >
    <ProductsItem
      v-for="product of products"
      :product="product"
      :key="product._id"
      @delete="onDeleteProduct($event)"
    />
  </div>
</template>

<script>
  import axios from 'axios';
  import ProductsItem from './ProductsItem';

  const getProducts = async (params) => axios.get('http://localhost:3000/products', {
    params
  });

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

    methods: {
      async onDeleteProduct(id) {
        await axios.delete(`http://localhost:3000/products/${id}`);
        const { data } = await getProducts();
        this.products = data;
      }
    },

    beforeRouteUpdate () {
      console.log('updated');
    },

    watch: {
      async $route(to) {
        const { query } = to;
        const { data } = await getProducts({
          ...query.from && { from: query.from },
          ...query.to && { to: query.to }
        });
        this.products = data;
      }
    },

    async created() {
      console.log(this.$graph.query);
      await this.$graph.query.run(`{ products { _id, name, price, description } }`).then(response => {
        console.log(response);

        this.products = response.products;
      });

      // const { from, to } = this.$route.query;
      // const { data } = await getProducts({
      //   ...from && { from },
      //   ...to && { to }
      // });

    }
  }
</script>

<style scoped lang="scss">
</style>
