<template>
  <!-- 导航 -->
  <div class="nav-bar">
    <!-- 左边插槽 -->
    <div class="left">
      <slot name="left"></slot>
    </div>

    <!-- 中间插槽 -->
    <div class="center">
      <slot name="center"></slot>
    </div>

    <!-- 右边插槽 -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      input: "",
    };
  },
  methods: {},
  //生命周期 - 创建完成
  created() {},

  //DOM挂载完毕
  mounted() {},
};
</script>
<style scoped>
.nav-bar {
  width: 100vw;
  height: 58px;
  display: flex;
  line-height: 58px;
  box-sizing: border-box;
  -ms-flex-align: center;
  text-align: center;
  /* box-shadow: rgba(120, 120, 120, 0.5) 0 1px 5px ; */
 
}
.left,.right{
  width: 10vw;
  height: 58px;
}
.center{
  flex: 1;
  width: 80vw;
  height: 58px;

}

</style>
