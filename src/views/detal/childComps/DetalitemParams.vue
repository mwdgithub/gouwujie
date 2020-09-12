<template>
  <div class="item-params" v-if="Object.keys(itemParams).length !== 0">
    <div class="disclaimer">{{ itemParams.rule.disclaimer }}</div>
    <div class="key">{{ itemParams.rule.key }}</div>
    <table
      class="table"
      v-for="(table, index) in itemParams.rule.tables[0]"
      :key="index"
    >
      <tr class="tr" v-for="(tr, index) in table" :key="index">
        <td class="td" v-for="(td, index) in tr" :key="index">
          {{ td }}
        </td>
      </tr>
    </table>

    <!-- <table>
               <tr v-for="(item, index) in  itemParams.info" :key="index">
                   <td>{{item.key}}</td>
                   <td>{{item.value}}</td>
               </tr>
           </table> -->

    <table class="info">
      <tr   class="trs" v-for="(item, index) in itemParams.info.set">
        <td class="">{{ item.key }}:</td>
        <td class="">{{ item.value }}</td>
      </tr>
    </table>

    <!-- <div v-if="Object.keys(itemParams).info.length !== 0">
      <img :src="itemParams.image" alt="" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    itemParams: {
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
.key {
  margin-top: 10px;
  text-align: center;
  color: indianred;
}
.table {
  display: flex;
  padding: 10px;
}
.tr {
  flex: 1;
  border-bottom: 1px solid gray;
}
.td {
  text-align: center;
}
img {
  width: 100vw;
  vertical-align: middle;
}
.info {
  /* display: flex; */
  padding: 10px;
}
.trs{
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-bottom: 2px solid gray;
}
.info td:first-child {
  width: 20vw;
  color: indianred;
}
.info td:last-child {
  width: 80vw;
}
.trs td {
  font-size: 1.2rem;
  text-align: center;
}
</style>
