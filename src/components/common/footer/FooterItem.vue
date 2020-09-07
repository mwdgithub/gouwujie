<template>
  <div class="footer-item">
    <div class="footer-itme-a" @click="itemClick">
      <div v-if="!isActive">
        <slot  name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="isStyle">
        <slot  name="item-text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#FF8E97",
    },
  },
  data() {
    return {
      // condition:false
    };
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
      console.log(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    isStyle(){
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
};
</script>
<style scoped>
.footer-item {
  font-size: 1rem;
  text-align: center;
  flex: 1;
}
.footer-itme-a {
  padding-top: 10px;
}
.footer-item img {
  width: 1.5rem;
}
</style>
