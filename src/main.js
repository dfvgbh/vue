import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import ProductsListPage from './components/pages/ProductsListPage';
import ProductsItemPage from './components/pages/ProductsItemPage';
import AdminPage from './components/pages/AdminPage';
import GraphQLProvider from './GraphQLProvider';

Vue.use(VueRouter);
Vue.use(GraphQLProvider, 'http://localhost:3000/graphql', {});

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '', component: ProductsListPage },
    { path: '/products/:id', component: ProductsItemPage },
    { path: '/admin', component: AdminPage },
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
