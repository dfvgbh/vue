<template>
  <div class="position-relative">
    <a 
      href="/"
      @click.prevent="toggleForm"
    >
      Sign in
    </a>
    <SignInForm
      class="sign-in-form"
      v-if="isFormActive"
    />
  </div>
</template>

<script>
  import SignInForm from './SignInForm';

  export default {
    name: 'SignInBadge',
    components: {
      SignInForm
    },
    data() {
      return {
        isFormActive: false
      }
    },
    methods: {
      toggleForm() {
        this.isFormActive = !this.isFormActive;
      }
    }
  }
</script>

<style lang="scss">
  .sign-in-form {
    position: absolute;
    right: 0;
    min-width: 160px;
  }
</style>