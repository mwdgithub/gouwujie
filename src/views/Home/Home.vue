<template>
  <div>
    <NavBar class="navbar-color">
      <div slot="conter">
        购物街
      </div>
    </NavBar>
    <home-swiper :banners="banners" id="swiper"></home-swiper>
    <Recommend :recommends="recommends"></Recommend>
    <home-feature-view></home-feature-view>
    <tab-control :title="['流行','新款','精选']"
    class="tab-contorl"
    ></tab-control>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

import Recommend from "./childCopms/Recommend";
import HomeSwiper from "./childCopms/HomeSwiper";
import HomeFeatureView from "./childCopms/HomeFeatureView";
import TabControl from '../../components/content/tabControl/TabControl'


import { getHomeMulitidata } from "../../network/home.js";
// 没有 default 导出 必须加花括号  有的话可以不加


export default {
  name: "Home",
  components: {
    NavBar,

    HomeSwiper,
    Recommend,
    HomeFeatureView,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    };
  },
  methods: {},
  //生命周期 - 创建完成
  created() {
    // 组件创建好 发送网络请求
    //1.请求多个数据
    getHomeMulitidata().then((res) => {
      console.log(res);
      //this 现在指当前组件的对象
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    //调用函数
  },

  //DOM挂载完毕
  mounted() {},
};
</script>
<style scoped>
#swiper {
  margin-top: 44px;
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
}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>
