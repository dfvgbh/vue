import graphql from 'graphql.js';

export default {
  install(Vue, url, options) {
    Vue.mixin({
      created() {
        this._graph = graphql(url, options);
      },
    });
    Object.defineProperty(Vue.prototype, '$graph', {
      get() {
        return this._graph;
      },
    });
  },
};
