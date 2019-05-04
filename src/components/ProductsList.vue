<template>
  <div
    v-if="todos && todos.length"
    class="d-flex flex-wrap align-items-stretch"
  >
    <ProductsItem
      v-for="todo of todos"
      v-bind:todo="todo"
      :key="todo.id"
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

  data: () => ({
    todos: []
  }),

  created() {
    axios.get('http://localhost:3000/todos')
    .then(({ data }) => {
      this.todos = data;
    });
  }
}
</script>

<style scoped lang="scss">
</style>