<!--
 * @Author: Li.chen
 * @Date: 2019-01-11 18:37:58
 * @LastEditors: Li.chen
 * @LastEditTime: 2019-01-15 17:36:17
 * @Description: File Description .
 -->
<template>
  <div id="ClassicDrinks" ref="ClassicDrinks">
    <seamlessScroll :data="newsList" :class-option="classOption" @ScrollEnd="end">
      <ul class="scrollList" ref="scrollList">
        <li v-for="(item, idx) in newsList" :key="idx">
          <a
            target="_blank"
            :href="item.href"
            class="title"
            v-text="'[' +Number(idx+1)+ ']' + item.title"
          ></a>
          <span class="date" v-text="item.date"></span>
        </li>
      </ul>
    </seamlessScroll>
  </div>
</template>

<script>
import Index from "./js/";
import seamlessScroll from "vue-seamless-scroll"; // npm install vue-seamless-scroll --save
export default {
  name: "classicDrinks",
  data() {
    return {
      newsList: Index.infoList, // 数据源
      liHeight: 35, // 单条记录高度
      options: {
        step: 3, //步长 越大滚动速度越快
        limitMoveNum: 0, //启动无缝滚动最小数据量 this.dataList.length
        // hoverStop: true, //是否启用鼠标hover控制
        // direction: 0, //1 往上 0 往下
        // openWatch: true, //开启data实时监听
        singleHeight: 35, //单条数据高度有值hoverStop关闭
        waitTime: 3000 //单步停止等待时间
      }
    };
  },
  components: {
    // 注册组件
    seamlessScroll
  },
  computed: {
    classOption() {
      const _this = this;
      return _this.options;
    }
  },
  watch: {
    // 数据监听
    watch_fn: function(val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    }
  },
  beforeCreate() {
    // beforeCreate创建前状态
    const _this = this;
    // console.group("------beforeCreate创建前状态------");
  },
  created() {
    // created创建完毕状态
    const _this = this;
    // console.group("------created创建完毕状态------");
  },
  beforeMount() {
    // beforeMount挂载前状态
    const _this = this;
    // console.group("------beforeMount挂载前状态------");
    _this.$store.commit("changeLoadingFlag");
  },
  mounted() {
    // mounted挂载结束状态
    const _this = this;
    // console.group("------mounted挂载结束状态------");
    // 获取模块高度
    const elHeight = _this.$refs.ClassicDrinks.offsetHeight;
    const et = parseInt(elHeight / _this.liHeight);
    // 单页显示数据总数 / 是否滚动
    _this.options.limitMoveNum = elHeight % _this.liHeight > 0 ? et + 1 : et;
    _this.$store.dispatch("commitLoadingFlag");
    this.$nextTick(() => {
      // ···
    });
  },
  beforeUpdate() {
    // beforeUpdate更新前状态
    const _this = this;
    // console.group("beforeUpdate更新前状态===============》");
  },
  updated() {
    // updated更新完成状态
    const _this = this;
    // console.group("updated更新完成状态===============》");
  },
  beforeDestroy() {
    // beforeDestroy销毁前状态
    const _this = this;
    // console.group("beforeDestroy销毁前状态===============》");
  },
  destroyed() {
    // destroyed销毁完成状态
    const _this = this;
    // console.group("destroyed销毁完成状态===============》");
  },
  methods: {
    end() {
      // ···
      // console.log("ScrollEnd");
    }
  }
};
</script>

<style lang="less" scoped>
@import "./css/index.less";
</style>
