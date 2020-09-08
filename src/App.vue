<template>
  <div id="app">
    <router-view></router-view>
    <main-footer class="main-footer"></main-footer>
  </div>
</template>

<script>
import { normalize } from "./assets/css/normalize.css";
import MainFooter from "./components/content/MainFooter/MainFooter";
export default {
  name: "App",
  components: {
    MainFooter,
  },
};
</script>

<style>
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
