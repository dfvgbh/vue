<template>
  <div id="app">
    <TheNavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import TheNavBar from './components/TheNavBar';

  export default {
    components: {
      TheNavBar
    },
    name: 'app',
  }
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  body {
    background-color: #323638;
    color: #fcfcfc;
  }
</style>
