<template>
  <nav>
    <div
      class="sticky-nav d-flex px-3"
    >
      <router-link to="/">Home</router-link>
      <router-link to="/item">Details</router-link>
      <router-link to="/admin">Admin</router-link>
      <SignInBadge 
        class="ml-auto"
      />
    </div>
  </nav>
</template>

<script>
  import SignInBadge from './SignInBadge';

  export default {
    name: 'TheNavbar',
    components: {
      SignInBadge
    },
  }
</script>

<style lang="scss">
  nav {
    height: 60px;
  }

  .sticky-nav {
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
      margin-right: 32px;
      font-weight: bold;

      &:hover {
        text-decoration: none;
        color: #ff8a87;
      }
    }
  }
</style>