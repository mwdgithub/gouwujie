<template>
  <div>
    <Footer>
      <footer-item path="/home">
        <!-- path="/home" 以字符串传值 不用加冒号  如果是变量就要加冒号 -->
        <img
          slot="item-icon"
          src="../../../assets/img/icon/home.svg"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../../assets/img/icon/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </footer-item>
      <footer-item path="/branchclass">
        <img
          slot="item-icon"
          src="../../../assets/img/icon/category.svg"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../../assets/img/icon/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </footer-item>
      <footer-item path="/consulting">
        <img
          slot="item-icon"
          src="../../../assets/img/icon/cart.svg"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../../assets/img/icon/cart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </footer-item>
      <footer-item path="/personal">
        <img
          slot="item-icon"
          src="../../../assets/img/icon/profile.svg"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../../assets/img/icon/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </footer-item>
    </Footer>
  </div>
</template>

<script>
import Footer from "../../common/footer/Footer";
import FooterItem from "../../common/footer/FooterItem";
export default {
  name: "MainFooter",
  components: {
    Footer,
    FooterItem
  }
};
</script>
<style lang="" scoped></style>
