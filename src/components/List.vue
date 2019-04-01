<template>
  <div>
    <div class="demo">
      <h1>{{ msg }}</h1>
    </div>
    <div v-if="todos && todos.length">
      <Item
        v-for="todo of todos"
        v-bind:name="todo.text"
      >
      </Item>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Item from './Item';

export default {
  props: {
    msg: String
  },
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

<style scoped>
.demo {
  background-color: rosybrown;
}
</style>