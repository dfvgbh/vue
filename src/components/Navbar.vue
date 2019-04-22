<template>
  <nav class="px-3">
    <router-link to="/">Home</router-link>
    <router-link to="/item">Details</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style lang="scss">
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    height: 60px;
    background-color: #010101;

    a {
      color: #ec625f;
      text-transform: uppercase;
      line-height: 60px;
      margin-right: 15px;
      font-weight: bold;

      &:hover {
        text-decoration: none;
        color: #ff8a87;
      }
    }

    & + * {
      padding-top: 60px;
    }
  }
</style>