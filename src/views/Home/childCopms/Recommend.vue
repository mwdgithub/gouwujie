<template>
  <div>
    <div class="recommend-item">
      <div v-for="item in recommends">
        <a :href="item.link">
          <img :src="item.image" alt="" />
          <div>{{ item.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommends: {
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
.recommend-item {
  width: 100%;
  display: flex;
  text-align: center;
  padding: 15px 0 20px;
  /* box-shadow: 0 10px 0 rgba(100, 100, 100, .1); */
  border-bottom: 10px solid #eee;
}
.recommend-item div {
  flex: 1;
}
.recommend-item div a {
  text-decoration: none;
  color: #999999;
}
.recommend-item img {
  width: 20vw;
}
</style>
