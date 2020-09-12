<template>
  <swiper class="detal-swiper">
    <swiper-item v-for="(item, index) in topImages" class="swiper-items">
      <img :src="item" alt=""  />
    </swiper-item>
  </swiper>

</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
  name: "DetalSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
  //生命周期 - 创建完成
  created() {},

  //DOM挂载完毕
  mounted() {},
};
</script>
<style scoped>
.swiper-items {
  height: 50vh;
  /* width: 100vw; */
  /* height: 300px; */
}
</style>
