<template>
  <form 
    @submit.prevent="onSignIn"
    class="rounded"
  >
    <fieldset>
      <label class="w-100">
        Name:
        <input 
          class="form-control"
          v-model="name"
          required
        />
      </label>
    </fieldset>
    <button 
      type="submit" 
      class="btn btn-primary"
    >Sign In</button>
  </form>
</template>

<script>
  export default {
    name: 'SignInForm',
    data() {
      return {
        name: ''
      }
    },
    methods: {
      async onSignIn() {
        console.log(this);
        alert('Success');
      }
    }
  }
</script>

<style scoped>
  form {
    background-color: #010101;
    padding: 16px;
    border: 3px solid #ec625f;
  }

</style>