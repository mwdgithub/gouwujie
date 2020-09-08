<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :goods-item="item" class="goods-a">
      <!-- {{ goods }} -->
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components:{
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      defualt() {
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
.goods{
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 padding:0.2rem ;
}
</style>
