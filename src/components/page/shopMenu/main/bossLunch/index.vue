<!--
 * @Author: Li.chen
 * @Date: 2019-01-11 18:38:01
 * @LastEditors: Li.chen
 * @LastEditTime: 2019-01-15 16:08:29
 * @Description: File Description .
 -->
<template>
  <div id="BossLunch">BOSS午餐</div>
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
  name: "bossLunch",
  data() {
    return {
      // 静态资源
      mock: Index
    };
  },
  components: {
    // 注册组件
    // components_name
  },
  watch: { // 数据监听
    watch_fn: function (val, old_val) {
      console.log('new: %s, old: %s', val, oldVal);
    }
  },
  beforeCreate() {  // beforeCreate创建前状态
    const _this = this;
    console.group("------beforeCreate创建前状态------");
  },
  created() { // created创建完毕状态
    const _this = this;
    console.group("------created创建完毕状态------");
  },
  beforeMount() { // beforeMount挂载前状态
    const _this = this;
    console.group("------beforeMount挂载前状态------");
    _this.$store.commit('changeLoadingFlag');
  },
  mounted() { // mounted挂载结束状态
    const _this = this;
    console.group("------mounted挂载结束状态------");
    _this.$store.dispatch('commitLoadingFlag');
  },
  beforeUpdate() { // beforeUpdate更新前状态
    const _this = this;
    console.group("beforeUpdate更新前状态===============》");
  },
  updated() { // updated更新完成状态
    const _this = this;
    console.group("updated更新完成状态===============》");
  },
  beforeDestroy() { // beforeDestroy销毁前状态
    const _this = this;
    console.group("beforeDestroy销毁前状态===============》");
  },
  destroyed() { // destroyed销毁完成状态
    const _this = this;
    console.group("destroyed销毁完成状态===============》");
  },
  methods: {
    init() {
      /**
       * @description:
       * @param {type}
       * @return:
       */
      console.log("V Init");
    }
  }
};
</script>

<style scoped>
@import "./css/";
</style>

<style>
 /** ···  */

</style>
