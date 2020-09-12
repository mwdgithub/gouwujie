<template>
  <div class="detal-nav-bar">
    <nav-bar  class="nav-bars">
      <div slot="left" class="left-back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="" />
      </div>

      <div slot="center" class="titles "  >
        <div
          v-for="(item, index) in titles"
          class="titles-item"
          :class="{ active: index === currenIndex }"
          @click="titlesClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
    <!-- <nav-bar  v-else class="nav-bars">
      <div slot="left" class="left-back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="" />
      </div>

      <div slot="center" class="titles">
        <div
          v-for="(item, index) in titles"
          class="titles-item"
          :class="{ active: index === currenIndex }"
          @click="titlesClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar> -->
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "DetalNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currenIndex: 0,
      condition:false
    };
  },
  methods: {
    titlesClick(index) {
      this.currenIndex = index;
      // console.log(this.currenIndex);
      this.$emit('titlesClick',index)
    },
    backClick() {
      //返回上一层
      this.$router.back();
      // this.$router.go(-1)
    },
  },
  //生命周期 - 创建完成
  created() {},

  //DOM挂载完毕
  mounted() {},
};
</script>
<style scoped>
.titles {
  display: flex;
}
.detal-nav-bar{
  position: relative;
  left: 0;
  top: 0;
  right: 0;
}
.nav-bars {
  position: fixed;
  top:0px;
  background: #fff;
}
.titles-item {
  flex: 1;
}
.active {
  color: hotpink;
}
.left-back {
  padding-left: 15px;
}
.left-back img {
  vertical-align: middle;
}
</style>
