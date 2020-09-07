<template>
  <div id="app">
    <router-view></router-view>
   <MainFooter></MainFooter>
  </div>
</template>

<script>
import {normalize} from './assets/css/normalize.css'
import MainFooter from "./components/content/MainFooter/MainFooter"
export default {
  name: 'App',
  components: {
    MainFooter
  }
}
</script>

<style>
/* :root{
  width: 100vw;

} */
body{
  margin: 0;
  padding: 0;
}
</style>
