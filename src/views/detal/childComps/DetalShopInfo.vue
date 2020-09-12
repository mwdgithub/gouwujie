<template>
  <div class="shopinfo">
    <div class="shop-logo">
      <div>
        <img :src="shop.logo" />
      </div>
      <span>{{ shop.name }}</span>
    </div>
    <div class="detail">
      <div class="left">
        <div class="sellnum">
          <div>{{ shop.sells | sellnumFilter }}</div>
          <div class="text">总销量</div>
        </div>
        <div class="goodsnum">
          <div>{{ shop.goodsCount }}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <table>
          <tr class="remark" v-for="(item, index) in shop.score" :key="index">
            <td> {{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">{{
              item.score
            }}</td>
            <td class="better" :class="{ 'better-more': item.isBetter }">{{
              item.isBetter ? "高" : "低"
            }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shopurl">
      <a :href="shop.shopUrl"><span>进入店铺</span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return [];
      },
    },
    data() {
      return {
        value: "",
      };
    },
  },

  /* 过滤器也是一个函数 */
  filters: {
    sellnumFilter(value) {
      let result = value;
      if (value > 10000) result = (value / 10000).toFixed(2) + "万";
      return result;
    },
  },
};
</script>

<style scoped>
.shopinfo {
  border-bottom: 6px solid #ececec;
}
.shopinfo .name {
  height: 50px;
  margin: 13px 0px 4px 30px;
}

img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #cccccc;
}

.name span {
  font-size: 17px;
  color: #666666;
  margin-left: 10px;
}

.detail .left {
  /* width: calc(50% - 15px); */
  display: flex;
  border-right: 1px solid #a2a2a2;
  margin: 20px 0 20px 15px;
}
.detail .right {
  /* width: calc(50% - 28px); */
  margin: 13px 0 20px 27px;
}
.sellnum,
.goodsnum {
  float: left;
  flex: 1;
  height: 50px;
  line-height: 20px;
  text-align: center;
}
.sellnum p,
.goodsnum p {
  font-size: 18px;
}
.sellnum .text,
.goodsnum .text {
  margin-top: 8px;
  font-size: 15px;
}
.detail .right,
.detail .left {
  float: left;
}
.right .remark {
  font-size: 0.8rem;
}
.score {
  color: #444444;
  font-weight: bold;
  padding-left: 10px;
}
.better-score {
  color: palevioletred;
}
.remark span {
  line-height: 19px;
}
.better {
  display: inline-block;
  height: 17px;
  width: 17px;
  background-color: #ccc;
  font-size: 14px;
  text-align: center;
  color: #444444;
  margin-left: 20px;
}

.shopurl {
  padding-bottom: 10px;
}
.shopurl {
  /* text-align: right; */
  /* display: inline-block;
  margin: 0 auto  ; */
  /* text-align: center; */
}
.shopurl a {
  display: flex;
  justify-content: center;
  height: 25px;
  width: 45vh;
  display: inline-block;
  line-height: 25px;
  text-align: center;
  background-color: lightpink;
  text-align: center;
  color: white;
  border-radius: 8px;
}
/* .shopurl a {
  position: relative;
  display: inline-block;
  height: 25px;
  width: 100vh;
  background-color: lightpink;
  line-height: 25px;
  text-align: center;
  color: white;
  border-radius: 8px;
  left: 50%;
  margin-left: -50px;
} */
</style>
<style scoped>
.shopinfo {
  margin: 10px 20px;
}
.shop-logo {
  /* width: 100%; */
  height: 62px;
  /* border: hotpink 1px solid; */
  /* padding: 10px 5vw; */

  vertical-align: middle;
  display: flex;
  text-align: center;
  line-height: 62px;
}
.shop-logo > div {
  width: 60px;
  height: 60px;
  /* border: hotpink 1px solid; */
  border-radius: 50%;
  text-align: center;
  /* overflow: hidden; */
}
.shop-logo > div img {
  width: 3rem;
  height: 3rem;
}
.shop-logo span {
  padding-left: 20px;
}
.score {
  color: #f13e3a;
}
.better {
  background-color: #5ea732;
  color: white;
  text-align: center;
}
.detail .left {
  width: calc(50% - 15px);
  display: flex;
  height: 50px;
  border-right: 1px solid #a2a2a2;
  margin: 20px 0 20px 15px;
  line-height: 50px;
}
.detail .right {
  width: calc(50% - 28px);
  margin: 13px 0 20px 27px;
}
</style>
