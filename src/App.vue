<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <List class="text-muted" msg="First Component"/>
    <List msg="First Component"/>
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    List
  },
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  List {
    background-color: red;
  }
</style>
