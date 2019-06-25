import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
// import ratings from 'components/ratings/ratings';
// import seller from 'components/seller/seller';
import 'common/stylus/index.styl';
import 'common/js/common.js';
// 全局注册VueRouter和VueResource
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: [
    {path: '/goods', component: goods}, // 由于goods加载首页的时候就需要被用户看到，所以没有必要做懒加载
    // {path: '/ratings', component: ratings},
    {path: '/ratings', component: () => import('./components/ratings/ratings.vue')}, // 路由懒加载
    // {path: '/seller', component: seller}
    {path: '/seller', component: () => import('./components/seller/seller.vue')}
  ],
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});

router.push({path: '/goods'});
