<!--
 * @Author: Li.chen
 * @Date: 2019-01-11 18:38:06
 * @LastEditors: Li.chen
 * @LastEditTime: 2019-01-15 17:34:26
 * @Description: File Description .
 -->
<!-- Created by Li.chen on 19/01/15. -->
<template>
  <div id="MiniMeal">
    健康轻食
  </div>
</template>

<script>
import Index from "./js/";
// import components_name from "components_name";
export default {
  props: {
    // 检测类型 + 其他验证
    // number: {
    //   type: Number,
    //   default: 0,
    //   required: true,
    //   validator: function (value) {
    //     return value >= 0
    //   }
    // }
  },
  name: "miniMeal",
  data() {
    return {
      // 静态资源
      staticData: Index
    };
  },
  components: {
    // 注册组件
    // components_name
  },
  watch: { // 数据监听
    watch_fn: function (val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    }
  },
  beforeCreate() {  // beforeCreate创建前状态
    const _this = this;
    // console.group("------beforeCreate创建前状态------");
  },
  created() { // created创建完毕状态
    const _this = this;
    // console.group("------created创建完毕状态------");
  },
  beforeMount() { // beforeMount挂载前状态
    const _this = this;
    // console.group("------beforeMount挂载前状态------");
    _this.$store.commit('changeLoadingFlag');
  },
  mounted() { // mounted挂载结束状态
    const _this = this;
    // console.group("------mounted挂载结束状态------");
    _this.$store.dispatch('commitLoadingFlag');
  },
  beforeUpdate() { // beforeUpdate更新前状态
    const _this = this;
    // console.group("beforeUpdate更新前状态===============》");
  },
  updated() { // updated更新完成状态
    const _this = this;
    // console.group("updated更新完成状态===============》");
  },
  beforeDestroy() { // beforeDestroy销毁前状态
    const _this = this;
    // console.group("beforeDestroy销毁前状态===============》");
  },
  destroyed() { // destroyed销毁完成状态
    const _this = this;
    // console.group("destroyed销毁完成状态===============》");
  },
  methods: {
    init() {
      console.log("V Init");
    }
  }
};
</script>

<style lang="less" scoped>
@import "./css/index.less";
</style>

<style lang="less">
 /** ···  */

</style>
