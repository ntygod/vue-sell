import Vue from 'vue';
import Router from 'vue-router';
import goods from '../components/goods/goods.vue';
import comments from '../components/comments/comments.vue';
import seller from '../components/seller/seller.vue';
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'goods',
      path: '/goods',
      component: goods
    },
    {
      name: 'comments',
      path: '/comments',
      component: comments
    },
    {
      name: 'seller',
      path: '/seller',
      component: seller
    }
  ]
});
