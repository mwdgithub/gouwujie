<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :class="{ active: index === currentIndex }"
      class="tab-control-span"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
  },
  //生命周期 - 创建完成
  created() {},

  //DOM挂载完毕
  mounted() {},
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  background: white;
}
.tab-control-span {
  flex: 1;
  height: 3.3rem;
  line-height: 3.3rem;
  font-size: 0.9 rem;
}
.active {
  color: rgb(255, 142, 151);
}
.active span {
  border-bottom: 3px solid rgb(255, 142, 151);
  padding: 0.6rem;
}
</style>
