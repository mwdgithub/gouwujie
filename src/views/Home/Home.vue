<template>
  <div id="home">
    <nav-bar class="navbar-color">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :title="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTackFixed"
    ></tab-control>
    <scroll
      class="conter"
      ref="scroll"
      :porbe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        id="swiper"
        @swiperimageLoad="swiperimageLoad"
      ></home-swiper>
      <Recommend :recommends="recommends"></Recommend>
      <home-feature-view></home-feature-view>
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
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
import { debounce } from "../../common/utils.js";
// 没有 default 导出 必须加花括号  有的话可以不加
import { letmListenerMixin } from "../../common/mixin.js";
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
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTackFixed: false,
      saveY: 0,
      itemImgListener: null,
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
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    contentScroll(position) {
      // console.log(position);
      // position.y<1000
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;
      // 2.判断tabContorl是否吸顶(position:fixed)
      this.isTackFixed = -position.y > this.tabOffsetTop;
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      // console.log("1");
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    loadMore() {
      // console.log('上拉加载更多');
      this.getHomeGoods(this.currentType); //刷新到一定量加载更多
      // this.$refs.scroll.scroll.refresh()
    },
    swiperimageLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },

  //DOM挂载完毕
  mounted() {
    // 图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 20);
    this.itemImgListener = () => {
      refresh(20, 30, "abc");
    };
    // 3. 监听item中图片加载完成
    this.$bus.$on("itemImageload", () => {
      // console.log('--------');
      refresh();
    });
    //获取tabControl的offsetTop
    //所有的组件都有一个属性$el,用于获取组件中的元素
  },
  destroyed() {
    console.log("冻结");
  },
  activated() {
    //固定首页滑动后切换回来的位子
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 1 保存Y值
    this.saveY = this.$refs.scroll.getScrollY();

    this.$bus.$off("itemImageload", this.itemImgListener);
  },
};
</script>
<style scoped>
#home {
  height: 100vh;
}
#swiper {
  /* padding-top: 3.6rem; */
}
.navbar-color {
  background: #ff8e97;
  color: white;
  font-size: 1.3rem;
  height: 56px;
}
.tab-control {
  position: relative;
  z-index: 9;
}
/* .conter {
  height: calc(100% - 60px);
  overflow: hidden;
} */
.conter {
  overflow: hidden;
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 60px;
}
</style>
