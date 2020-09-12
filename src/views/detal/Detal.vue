<template>
  <div id="detal">
    <detal-nav-bar class="nav-bar" @titlesClick="titlesClick"></detal-nav-bar>
    <!-- <div>{{$store.state.carList }}</div> -->
    <!-- <ul>
      <li v-for="(item, index) in $store.state.carList" :key="index">
        {{ item }}
      </li>
    </ul> -->
    <scroll class="conter" ref="scroll" :porbe-type="3" :pull-up-load="true">
      <detal-swiper :top-images="topImages" class="top-images-swiper">
      </detal-swiper>
      <detal-base-info :goods="goods"> </detal-base-info>
      <detal-shop-info :shop="shop"></detal-shop-info>
      <!-- <params-info :goodss-param="goodssParam" /> -->
      <detal-info :detal-info="detalInfo" @load="imgLoad"></detal-info>
      <detalitem-params :item-params="itemParams"> </detalitem-params>
      <!-- <back-top @click.native="backClick" v-show="isShowBackTop"></back-top> -->
    </scroll>
    <detal-footer-bar @addCart="addCart"></detal-footer-bar>
  </div>
</template>

<script>
import DetalNavBar from "./childComps/DetalNavBar.vue";
import DetalSwiper from "./childComps/DetalSwiper";
import DetalBaseInfo from "./childComps/DetalBaseInfo";
import DetalShopInfo from "./childComps/DetalShopInfo";
import DetalInfo from "./childComps/DetalInfo";
import ParamsInfo from "./childComps/ParamsInfo";
import BackTop from "../../components/content/backTop/BackTop";
import DetalitemParams from "./childComps/DetalitemParams";
import DetalFooterBar from "./childComps/DetalFooterBar";

import Scroll from "../../components/common/scroll/Scroll";

import { getDetal, Goods, Shop, GoodssParam } from "../../network/detal.js";
import { debounce } from "../../common/utils.js";
export default {
  name: "Detal",
  components: {
    DetalNavBar,
    DetalSwiper,
    DetalBaseInfo,
    DetalShopInfo,
    Scroll,
    DetalInfo,
    ParamsInfo,
    BackTop,
    DetalitemParams,
    DetalFooterBar,
  },
  // mixins:[letmListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detalInfo: {},
      goodssParam: {},
      isShowBackTop: false,
      itemParams: {},
      commentInfo: {},
      itemImgListener: null,
    };
  },
  methods: {
    contentScroll(position) {
      // console.log(position);
      // position.y<1000
      // 1.判断BackTop是否显示

      this.isShowBackTop = -position.y > 1000;
      // 2.判断tabContorl是否吸顶(position:fixed)
      this.isTackFixed = -position.y > this.tabOffsetTop;
    },
    imgLoad() {
      // this.$refs.scroll.refresh();
      console.log(11);
    },
    backClick() {
      // console.log("1");
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    titlesClick(index) {
      console.log(index);
    },
    addCart() {
      //获取购物车需要展示的商品信息
      let product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      console.log(product);
      //将商品添加到购物车
      // this.$store.commit("addCart", product);
      this.$store.dispatch('product');
    },
  },
  //生命周期 - 创建完成
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid;

    //请求iid的详情数据
    getDetal(this.iid).then((res) => {
      // console.log(res.result);
      let data = res.result;
      //做数据分离
      // 1.获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;
      //   console.log(this.topImages);
      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      console.log(this.goods);
      // 3.创建店铺信息
      this.shop = new Shop(data.shopInfo);
      //4.保存商品的详情数据
      this.detalInfo = data.detailInfo;
      // 5.获取参数信息
      this.goodssParam = new GoodssParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // this.goodssParam =
      // 6.取出参数信息
      this.itemParams = data.itemParams;
      // console.log(this.itemParams);

      // 7.取出评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
  },
  //DOM挂载完毕
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 20);
    // this.$bus.$on('itemImgLoad',()=>{
    //   refresh()
    // })
  },
  activated() {
    //固定首页滑动后切换回来的位子
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
};
</script>
<style scoped>
#detal {
  height: 100vh;
  position: relative;
  z-index: 9;
  background: #fff;
}
.conter {
  height: calc(100% - 58px);
  /* overflow: hidden; */
  background: #fff;
}
.nav-bar {
  position: relative;
  z-index: 99;
  background: #fff;
}
/* .top-images-swiper { */
  /* padding-top: 44px; */
/* } */
</style>
