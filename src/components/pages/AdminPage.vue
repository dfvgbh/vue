<template>
  <div class="wrapper m-2">
    <h5>Hello admin!</h5>
    <ProductsCreateForm class="products-create-form mx-auto"/>
  </div>
</template>

<script>
  import ProductsCreateForm from '../ProductsCreateForm';

  export default {
    name: 'AdminPage',
    components: {
      ProductsCreateForm
    }
  }
</script>

<style scoped lang="scss">
  .products-create-form {
    max-width: 600px;
  }
</style>