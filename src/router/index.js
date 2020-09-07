import Vue from "vue";
import VueRouter from "vue-router";

// 相关的懒加载
// 
const Home = () => import("../views/Home/Home.vue");
const BranchClass = () => import("../views/BranchClass/BranchClass.vue");
const Consulting = () => import("../views/Consulting/Consulting.vue");
const Personal = () => import("../views/Personal/Personal.vue");

// 安装插件
Vue.use(VueRouter);

// 创建router
// const routers = [
//   {
//     path: "/",
//     redirect: "/home",
//   },
//   {
//     path: "/home",
//     component: Home,
//   },
//   {
//     path: "/BranchClass",
//     component: BranchClass,
//   },
//   {
//     path: "/consulting",
//     component: Consulting,
//   },
//   {
//     path: "/personal",
//     component: Personal,
//   },
// ];

const router = new VueRouter({
    routes: [
        {
          path: "/",
          redirect: "/home"
        },
        {
          path: "/home",
          component: Home
        },
        {
          path: "/branchClass",
          component: BranchClass
        },
        {
          path: "/consulting",
          component: Consulting
        },
        {
          path: "/personal",
          component: Personal
        }
      ],
  mode: "history",
});

export default router;
// const originalPush = router.prototype.push;
// router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };
