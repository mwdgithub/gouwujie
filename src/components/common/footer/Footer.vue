<template>
  <div>
    <div id="footer">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",

};
</script>
<style  scoped>

#footer {
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #EDEDED;
}
</style>
