<template>
  <aside>
    <div class="sticky-panel">
      <div class="wrapper w-100">
        <div class="filters-block p-2">
          <h6>Price</h6>
          <div class="d-flex">
            <label>
              From:
              <input
                v-model="from"
                class="form-control"
              >
            </label>
            <label>
              To:
              <input
                v-model="to"
                class="form-control"
              >
            </label>
          </div>
        </div>

        <div class="text-right">
          <button
            type="button"
            class="btn btn-light mt-4"
            @click="onFiltersApplied"
          >apply</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'FiltersPanel',
    data() {
      return {
        from: '',
        to: '',
      }
    },
    methods: {
      onFiltersApplied() {
        const { from, to } = this;
        this.$router.push({
          path: '/',
          query: {
            ...from && { from },
            ...to && { to }
          }
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  $panel-width: 240px;

  aside {
    width: $panel-width;
  }

  .sticky-panel {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9000;
    height: 100vh;
    width: $panel-width;
    background-color: #0d1618;
    box-shadow: 8px 0 5px -5px #333;
  }

  .wrapper {
    margin-top: 60px;
    padding: 16px;

  }

  .filters-block {
    width: 100%;
    min-height: 60px;
    background-color: #eee;
    border-radius: 4px;
    color: #343434;
  }
</style>