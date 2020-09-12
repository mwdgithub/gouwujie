import Vue from "vue";
import VueRouter from "vue-router";
// import { resolve } from "core-js/fn/promise";

// 相关的懒加载
//
const Home = () => import("../views/Home/Home.vue");
const Detal = () =>import ('../views/detal/Detal.vue');

const ShoppingCart = () => import("../views/cart/ShoppingCart.vue");
const Consulting = () => import("../views/Consulting/Consulting.vue");
const Personal = () => import("../views/Personal/Personal.vue");

// 安装插件
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/consulting",
      component: Consulting,
    },
    {
      path: "/shoppingcart",
      component: ShoppingCart,
    },
    {
      path: "/personal",
      component: Personal,
    },
    {
      path: "/detal/:iid",
      component: Detal,
    },
  ],
  mode: "history",
});

export default router;
// const originalPush = router.prototype.push;
// router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };
