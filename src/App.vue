<template>
  <div
    id="app"
    class="my-2 mx-3"
  >
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar';


  export default {
    components: {
      Navbar
    },
    name: 'app',
  }
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  body {
    background-color: #323638;
  }
</style>
