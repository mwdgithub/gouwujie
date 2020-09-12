<template>
  <div v-if="Object.detalInfo !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <!-- <div class="desc">{{ detalInfo.desc }}</div> -->
      <div
        class="end"
        v-for="(item, index) in detalInfo.detailImage"
        :key="index"
      >
        <div v-for="(items, index) in item" :key="index">
          <img :src="items[0]" alt="" />
        </div>
      </div>
    </div>
    <div class="info-key" v-for="(item, index) in detalInfo.detailImage">
      {{ item.key }}
    </div>
    <div class="info-list" v-for="(item, index) in detalInfo.detailImage">
      <div v-for="(items, index) in item.list" :key="index">
        <img :src="items" alt="" width="100%" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetalInfo",
  props: {
    detalInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      imageLenght: 0,
    };
  },
  methods: {
    imgLoad() {
      //判断,所有的图片 都加载完了,就加载一次回调函数
      this.counter += 1;
      if (this.counter === this.imageLenght) {
        this.$emit("imgLoad");
      }
    },
  },
  watch: {
    detalInfo() {
      this.imageLenght = this.detalInfo.detailImage[0].list.lenght;
    },
  },
  //生命周期 - 创建完成
  created() {},

  //DOM挂载完毕
  mounted() {},
};
</script>
<style scoped>
.info-list div img {
  width: 100vw;
  vertical-align: middle;
}
.info-key {
  font-size: 1.2rem;
  text-align: center;
}
.end div img {
  width: 100%;
}
</style>
