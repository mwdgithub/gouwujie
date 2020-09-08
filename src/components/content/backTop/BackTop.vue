<template>
  <div class="back-top" >
    <img src="../../../assets//img//common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
  methods: {
   
  },
  //生命周期 - 创建完成
  created() {},

  //DOM挂载完毕
  mounted() {},
};
</script>
<style scoped>
    .back-top{
        position: fixed;
        right: 0.8rem;
        bottom: 4rem;
    }
    .back-top img{
        width: 3rem;
        height: 3rem;
    }
</style>
