<template>
  <div id="MasterCoffee" ref="MasterCoffee">
    <seamlessScroll
      :data="newsList"
      :class-option="classOption"
      @ScrollEnd="end"
    >
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
import Index from "./script";
import seamlessScroll from "vue-seamless-scroll"; // npm install vue-seamless-scroll --save
export default {
  name: "masterCoffee",
  data() {
    return {
      newsList: Index.infoList, // 数据源
      liHeight: 35, // 单条记录高度
      options: {
        // step: 1, //步长 越大滚动速度越快
        limitMoveNum: 0, //启动无缝滚动最小数据量 this.dataList.length
        // hoverStop: true, //是否启用鼠标hover控制
        // direction: 0, //1 往上 0 往下
        // openWatch: true, //开启data实时监听
        singleHeight: 35, //单条数据高度有值hoverStop关闭
        waitTime: 2000 //单步停止等待时间
      }
    };
  },
  components: {
    seamlessScroll
  },
  created() {},
  computed: {
    classOption() {
      const _this = this;
      return _this.options;
    }
  },
  mounted() {
    const _this = this;
    // 获取模块高度
    const elHeight = _this.$refs.MasterCoffee.offsetHeight;
    const et = parseInt(elHeight / _this.liHeight);
    // 单页显示数据总数 / 是否滚动
    _this.options.limitMoveNum = elHeight % _this.liHeight > 0 ? et + 1 : et;
  },
  methods: {
    end() {
      // ···
      // console.log("ScrollEnd");
    }
  }
};
</script>

<style scoped>
@import "./style.css";
</style>
