<template>
  <div id="Welcome">
    <div class="btn-back">
      <div class="box" v-if="loadShow" @click="hideWelcome">
        跳过
        <i>{{loadTime}} s</i>
      </div>
    </div>
    <img src="@/assets/pro.png" class="welcome-pro-img" alt v-if="loadShow">
    <img src="@/assets/welcome.jpg" class="welcome-bg-img" alt>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      loadShow: false,
      loadTime: 10,
      sleepLoad: 3000
    };
  },
  mounted() {
    const _this = this;
    // 延时3s后加载商品图
    window.setTimeout(() => {
      _this.loadShow = !_this.loadShow;
      var loadTimer = window.setInterval(() => {
        _this.loadTime -= 1;
        if (_this.loadTime === 0) {
          window.clearInterval(loadTimer);
          _this.$store.commit('changeWelcomeFlag');
        }
      }, 1000);
    }, _this.sleepLoad);
  },
  methods: {
    hideWelcome() {
      const _this = this;
      _this.$store.commit('changeWelcomeFlag');
    }
  }
};
</script>

<style lang="less" scoped>
#Welcome {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #1c28b0;

  .btn-back {
    .box {
      color: #fff;
      font-size: 14px;
      top: 20px;
      right: 20px;
      position: absolute;
      border: 0.5px solid #dfdddd;
      height: 25px;
      line-height: 25px;
      background-color: #635f5f4a;
      width: 60px;
      padding: 0px 5px;
      text-align: center;
      border-radius: 20px;
      cursor: pointer;
    }
  }

  .welcome-pro-img {
    top: 10%;
    width: 100%;
    position: absolute;
  }

  .welcome-bg-img {
    width: 100%;
    position: absolute;
    bottom: 0px;
  }
}
</style>

