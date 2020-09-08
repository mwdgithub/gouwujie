<template>
  <div id="home">
    <nav-bar class="navbar-color">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="conter" ref="scroll" :porbe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" id="swiper"></home-swiper>
      <Recommend :recommends="recommends"></Recommend>
      <home-feature-view></home-feature-view>
      <tab-control
        :title="['流行', '新款', '精选']"
        class="tab-contorl"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

import Recommend from "./childCopms/Recommend";
import HomeSwiper from "./childCopms/HomeSwiper";
import HomeFeatureView from "./childCopms/HomeFeatureView";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";

import { getHomeMulitidata, getHomeGoods } from "../../network/home.js";
// 没有 default 导出 必须加花括号  有的话可以不加

export default {
  name: "Home",
  components: {
    NavBar,

    HomeSwiper,
    Recommend,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop:false
    };
  },

  //生命周期 - 创建完成
  created() {
    // 组件创建好 发送网络请求
    //1.请求多个数据
    this.getHomeMulitidata();
    //调用函数
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 网络请求相关的方法
     */
    getHomeMulitidata() {
      getHomeMulitidata().then((res) => {
        // console.log(res);
        //this 现在指当前组件的对象
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(res);
        // this.$refs.scroll.finishPullUp()
        
      });
    },
    contentScroll(position){
      // console.log(position);
      // position.y<1000
      this.isShowBackTop=(-position.y)>1000
    },
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // console.log(123);
    },
    backClick() {
      // console.log("1");
      this.$refs.scroll.scrollTo(0,0,500)

    },
    loadMore(){
      // console.log('上拉加载更多');
      this.getHomeGoods(this.currentType)//刷新到一定量加载更多
      // this.$refs.scroll.scroll.refresh()
    }
  },

  //DOM挂载完毕
  mounted() {},
};
</script>
<style scoped>
#home {
  height: 100vh;
}
#swiper {
  padding-top: 3.6rem;
}
.navbar-color {
  background: #ff8e97;
  color: white;
  font-size: 1.3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 3.6rem;
}
.tab-control {
  /* position: sticky; */
  top: 53px;
}
.conter {
  height: calc(100% - 60px);
  overflow: hidden;
}
</style>
