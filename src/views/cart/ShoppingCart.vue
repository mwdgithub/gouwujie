<template>
  <div class="cart">
    <!-- 购物车导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <!-- 商品展示列表 -->
    
      <cart-list>
        
      </cart-list>
    

    <!-- 底部汇总 -->
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import CartList from "./childComps/CartList";

import { cartLength } from "../../store/getters.js";
export default {
  name: "ShoppingCart",
  components: {
    NavBar,
    CartList,
    
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    cartLength() {
      return this.$store.getters.cartLength;
    },
  },
  //生命周期 - 创建完成
  created() {},

  //DOM挂载完毕
  mounted() {},
};
</script>
<style scoped>
.nav-bar {
  background: #ff8e97;
  /* background: var(--color-tint); */
  color: #fff;
  font-size: 18px;
}
.cart{
  height: 100vh;
}

</style>
