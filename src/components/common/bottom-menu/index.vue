<template>
  <div id="Menu">
    <ul class="item-list">
      <li class="item" :class="classActive('index')" @click="handleClick('index')">
        <div>
          <i class="el-icon-location"></i>
        </div>
        <div>首页</div>
      </li>
      <li class="item" :class="classActive('shopMenu')" @click="handleClick('shopMenu')">
        <div>
          <i class="el-icon-tickets"></i>
        </div>
        <div>菜单</div>
      </li>
      <li class="item" :class="classActive('order')" @click="handleClick('order')">
        <div>
          <i class="el-icon-edit"></i>
        </div>
        <div>订单</div>
      </li>
      <li class="item" :class="classActive('shopping')" @click="handleClick('shopping')">
        <div>
          <i class="el-icon-goods"></i>
        </div>
        <div>购物车</div>
      </li>
      <li class="item" :class="classActive('about')" @click="handleClick('about')">
        <div>
          <i class="el-icon-info"></i>
        </div>
        <div>我的</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      defActive: "index"
    };
  },
  computed: {
    //
  },
  mounted() {
    const _this = this;
  },
  methods: {
    classActive(active) {
      const _this = this;
      return _this.defActive === active ? "active" : "";
    },
    handleClick(active) {
      const _this = this;
      _this.defActive = active;
      _this.$router.push(active);
    }
  }
};
</script>

<style lang="less" scoped>
#Menu {
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: #dedfea;
  bottom: 0px;
  .item-list {
    width: 100%;
    margin: 0px;
    padding: 0px;
    .item {
      padding-top: 10px;
      list-style: none;
      float: left;
      text-align: center;
      width: 20%;

      div {
        color: #999;
        font-size: 12px;
        i {
          font-size: 18px;
        }
      }
    }
    .item.active {
      div {
        i {
          color: #0c5396;
        }
      }
      // background-color: #ccc;
      // border-bottom: 5px solid #1c28b0;
    }
  }
}
</style>

