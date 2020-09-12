<template>
  <!-- erf/children 子向父获取 -->
  <div class="wrapper" ref="wrapper">
    <div class="conter">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Srocll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  //生命周期 - 创建完成
  created() {},

  //DOM挂载完毕
  mounted() {
    // 1.创建BScroll对象
    console.log(document.querySelector(".wrapper"));

    // 2.监听滚动的位置
    // setTimeout(() => {
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: this.pullUpLoad,
      // probeType: 3,
      click: true,
      probeType: this.probeType,
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
      // console.log(this.scroll);
    });
    // this.scroll.on("pullingUp", () => {
    //   // console.log('上拉加载更多');
    //   this.$emit("pullingUp");
    // });
    // 监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // 监听滚到底部
        // console.log('上拉加载更多');
        this.$emit("pullingUp");
      });
    }
    console.log(this.scroll);
    // this.scroll.scrollerHeight=10000
    // }, 200);
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>
<style scoped></style>
