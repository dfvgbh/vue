<template>
  <div>
    <div class="d-flex">
      <div>
        <FiltersPanel/>
      </div>
      <div class="py-2 px-3">
        <h5>Products</h5>
        <ProductsList/>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductsList from '../ProductsList';
  import FiltersPanel from '../FiltersPanel';

  export default {
    name: 'ProductsListPage',
    components: {
      ProductsList,
      FiltersPanel,
    },

    beforeRouteUpdate (to, from, next) {
      console.log(to);
      next();
    },
  }
</script>

<style scoped lang="scss">
</style>