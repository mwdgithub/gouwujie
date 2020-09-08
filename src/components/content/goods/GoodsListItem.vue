<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goodsItem-l clearfix">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">
        <img src="../../../assets/img/common/collect.svg" alt="" />
        {{ goodsItem.cfav }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      defualt() {
        return {};
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
.goods-item {
  padding-bottom: 0.5rem;
  overflow: hidden;
  position: relative;
  width: 45vw;
}
.goodsItem-l {
  font-size: 1rem;
  text-align: center;
  width: 45vw;
}
.goods-item img {
  width: 45vw;
  /* width: 100%; */
  border-radius: 5px;
  margin-top: 0.5rem;
}

.goodsItem-l p {
  overflow: hidden;
  text-overflow: ellipsis; /* 文本溢出时*/
  white-space: nowrap; /*规定段落中的文本不进行换行*/
  /* margin-bottom: 0.3rem; */
}
.goodsItem-l .price {
  margin-right: 1.5rem;
  color: hotpink;
}

.goodsItem-l .collect img {
  /* content: ""; */
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  margin: 0;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  /* background: url("../../../assets/img/common/collect.svg") no-repeat center top; */
  background-size: 100%;
  vertical-align: middle;
}
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
</style>
