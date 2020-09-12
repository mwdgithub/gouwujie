<template>
  <div id="app">
    <keep-alive exclude="Detal">
      <!-- exclude="Detal" 除了这个组件刷新 其他都不刷新 -->
      <!-- keep-alive是一个抽象组件：它自身不会渲染一个 DOM 元素，
            也不会出现在父组件链中；使用keep-alive包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
       -->
      <router-view></router-view>
    </keep-alive>

    <main-footer class="main-footer"></main-footer>
  </div>
</template>

<script>
// import { normalize } from "./assets/css/normalize.css";
import MainFooter from "./components/content/MainFooter/MainFooter";
export default {
  name: "App",
  components: {
    MainFooter,
  },
};
</script>

<style>
@import url("/src/assets/css/bass.css");
/* :root{
  width: 100vw;

} */
body {
  margin: 0;
  padding: 0;
}
.main-footer {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
</style>
