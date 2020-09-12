<template>
  <div class="bottm-bar">
    <!-- 底部工具栏 -->
    <div class="bar-item bar-left">
      <div>
        <i class="icon icon-service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon icon-shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon icon-collections"></i>
        <span class="text">搜藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
    <!-- <scort-ball></scort-ball> -->
  </div>
</template>

<script>
export default {
  name: "DetalFooterBar",
  data() {
    return {};
  },
  methods: {
    addCart(){
        // alert(1)
        this.$emit("addCart")
    }
  },
  //生命周期 - 创建完成
  created() {},

  //DOM挂载完毕
  mounted() {},
};
</script>
<style scoped>
.bottm-bar {
  display: flex;
  height: 58px;
  position: relative;
}
.bar-item {
  flex: 1;
}
.bar-left,
.bar-right {
  display: flex;
}
.bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 0px auto;
    margin-bottom: -15px;
    background: url("../../../assets//img/detail/detail_bottom.png")0 0/100%;
}
.bar-left .icon-service{
    background-position:0 54px ;
}
.bar-left .icon-shop{
    background-position:0 98px ;
}
.bar-left .icon-collections{
    background-position:0 150px ;
}
.bar-left> div{
    flex: 1;
    text-align: center;
    /* align-items: center; */
    line-height: 58px;
}
.cart{
    background: chocolate;
    width: 100%;
    text-align: center;
    line-height: 58px;
    color: seashell;
}
.buy{
    background: red;
    width: 100%;
    text-align: center;
    line-height: 58px;
    color: seashell;
}
</style>
