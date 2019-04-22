<template>
  <div
    v-if="todos && todos.length"
    class="d-flex flex-wrap align-items-stretch"
  >
    <Item
      v-for="todo of todos"
      :key="todo.id"
      v-bind:todo="todo"
      role=""
    >¡
    </Item>
  </div>
</template>

<script>
import axios from 'axios';
import Item from './Item';

export default {
  components: {
    Item
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