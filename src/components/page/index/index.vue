<template>
  <div id="Index">
    <div>首页</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
#Index {
  width: 100%;
  position: relative;
  overflow-y: scroll;
  div {
    height: 200px;
    border-bottom: 3px solid red;
    text-align: center;
    font-size: 30px;
  }
}
</style>

