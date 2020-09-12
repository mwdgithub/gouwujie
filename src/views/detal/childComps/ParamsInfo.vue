<template>
  <div class="params-info" v-if="Object.keys(goodssParam).length !== 0">
    <!-- <div v-for="(item, index) in goodssParam.size" :key="index"> -->
      <!-- <p>{{item}}</p> -->
      <!-- <table v-for="(items, index) in item" :key="index">
        <tr v-for="(itemss, index) in items" :key="index">
          <td>{{itemss}}</td>
        <tr  v-for="(item, index) in items">{{item}}</tr>
          <td>{{ items.key }}</td>
          <td>{{ items.disclaimer }}</td>
          <td>{{ items.tables }}</td>
        </tr>
      </table> -->
    <!-- </div> -->
    <table class="table">
      <tr v-for="(item, index) in goodssParam.info">
        <td>{{ item.key }}:</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
    <div class="goodssParam-image" v-if="goodssParam.image.length !== 0">
      <img :src="goodssParam.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ParamsInfo",
  props: {
    goodssParam: {
      type: Object,
      default() {
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
.table {
  margin: 0 15px;
}
.table tr {
  height: 35px;
}
.table tr td:first-child {
  border-bottom: gray 1px solid;
  width: 10vw;
  font-size: 0.8rem;
  text-align: center;
}
.table tr td:last-child {
  border-bottom: gray 1px solid;
  text-align: center;
  color: indianred;
  width: 90vw;
}
.goodssParam-image img {
  width: 100%;
}
</style>
