import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import List from './components/List';
import ItemPage from './components/ItemPage';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: List },
    { path: '/item', component: ItemPage }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
