<template>
  <div class="detailinfo" v-if="Object.keys(goods).length !== 0">
    <div class="title">{{ goods.title }}</div>
    <div class="price">
      <span class="nowprice">{{ goods.newPrice }}</span>
      <span class="oldprice">{{ goods.oldPrice }}</span>
      <em v-if="goods.discount" class="discount">{{ goods.discount }}</em>
      <!-- <span>{{ goods.discount }}</span> -->
    </div>
    <div class="other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.columns[2] }}</span>
      <!-- <span>{{ goods.services[goods.services.lenght].name}}</span> -->
    </div>
    <div class="service">
      <div class="serviceitem" v-for="(item, index) in goods.services" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
      <!-- <span class="serviceitem" v-for="(item,index )in goods.services" :key="index"> -->
        <!-- <img :src="item.services" /> -->
        <!-- <span>{{ goods.services[index].name }}</span> -->
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetalShopInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detailinfo {
  /* height: 160px; */
  border-bottom: 6px solid #ececec;
}
.title {
  padding: 10px 10px;
}
.price {
  height: 2rem;
  display: flex;
  padding: 5px 5px;
  line-height: 2rem;
  position: relative;
}
.price span {
  flex: 1;
}
.detailinfo .nowprice {
  font-size: 1.5rem;
  color: palevioletred;
}

.detailinfo .oldprice {
  font-size: 1.2rem;
  color: #666666;
  margin-left: 7px;
  text-align: left;
  text-decoration: line-through;
}

.detailinfo .discount {
  padding: 2px 5px;
  background-color: palevioletred;
  color: white;
  font-style: normal;
  border-radius: 7px;
}

.other {
  margin: 15px 5px 0;
  height: 20px;
  color: #a2a2a2;
  font-size: 1rem;
  display: flex;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}

.service img {
  height: 14px;
  width: 14px;
  vertical-align: middle;
  display:inline-block;
}

.service {
  margin: 10px 0px;
  display: flex;
  flex: 1;
  height: 50px;
  line-height: 50px;
  text-align: left;
}

.service .serviceitem {
  width: 35px;
  flex: 1;
  flex-wrap:wrap;
  font-size: 0.8rem;
  color: #a2a2a2;
  text-align: center;
  line-height: 20px;
  justify-content: space-between;
  
}

.service .serviceitem span {
  padding-left: 5px;
}

</style>
