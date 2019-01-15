<!--
 * @Author: Li.chen
 * @Date: 2019-01-09 19:08:34
 * @LastEditors: Li.chen
 * @LastEditTime: 2019-01-15 13:59:12
 * @Description: File Description .
 -->
<!-- Created by Li.chen on 19/01/15. -->
<template>
  <div id="about">
    我的{{staticData.page}}
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
  name: "about",
  data() {
    return {
      // 静态资源
      staticData: Index,
      page: Index.page
    };
  },
  components: {
    // 注册组件
    // components_name
  },
  watch: { // 数据监听
    page: function (val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
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
  },
  mounted() { // mounted挂载结束状态
    const _this = this;
    console.group("------mounted挂载结束状态------");
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
      console.log("V Init");
    }
  }
  /**
   * beforeCreate 创建前状态
   * created  创建完毕状态
   * beforeMount 挂载前状态
   * mounted  挂在完毕状态
   * beforeUpdate 更新前状态
   * updated  更新完毕状态
   * beforeDestroy  销毁实例前状态
   * destroyed  销毁实例完毕状态
   *
   */
};
</script>

<style scoped>
@import "./css/";
</style>

<style>
 /** ···  */

</style>
