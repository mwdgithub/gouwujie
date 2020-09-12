import { debounce } from '../common/utils';

export let letmListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 20);
    this.itemImgListener = () => {
      refresh(20, 30, "abc");
    };
    // 3. 监听item中图片加载完成
    this.$bus.$on("itemImageload", () => {
      // console.log('--------');
      refresh();
    });
    //获取tabControl的offsetTop
    //所有的组件都有一个属性$el,用于获取组件中的元素
  },
};
