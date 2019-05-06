<template>
  <form @submit.prevent="onSubmit">
    <fieldset>
      <label class="w-100">
        Name:
        <input 
          class="form-control"
          v-model="name"
          required
        />
      </label>
      <label class="w-100">
        Description:
        <input 
          class="form-control"
          v-model="description"
          required
        />
      </label>
      <label class="w-100">
        Price:
        <input 
          type="number" 
          class="form-control" 
          v-model.number="price"
          required
        />
      </label>
    </fieldset>
    <button 
      type="submit" 
      class="btn btn-primary"
    >Submit</button>
  </form>
</template>

<script>
  import axios from 'axios';

  const DEFAULT_DATA = {
    name: '',
    description: '',
    price: 0,
  }

  export default {
    name: 'ProductsCreateForm',
    data() {
      return {
        ...DEFAULT_DATA
      }
    },
    methods: {
      async onSubmit() {
        const { name, description, price } = this;
        await axios.post('http://localhost:3000/products', {
          name,
          description,
          price,
        });
        alert('Success');
        Object.assign(this, { ...DEFAULT_DATA })
        console.log(this);
      }
    }
  }
</script>

<style scoped>

</style>