<template>
  <div id="Welcome">
    <div class="btn-back">
      <div class="box" v-if="loadShow" @click="hideWelcome">
        跳过
        <i>{{loadTime}}s</i>
      </div>
    </div>
    <!-- <img src="@/assets/banner_2.jpg" class="welcome-pro-img" alt v-if="loadShow"> -->
    <el-carousel class="swiper_banner" :autoplay='true' arrow='always'>
      <el-carousel-item v-for="item in itemBanner" :key="item.id">
        <img :src="item.src" class="welcome-pro-img" alt="">
      </el-carousel-item>
    </el-carousel>
    <img src="@/assets/logo_2560.png" class="welcome-bg-img" alt>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      itemBanner: [
        {
          id: 1,
          src: './static/images/banner_3.jpg',
          link: 'javascript:;'
        },
        {
          id: 2,
          src: './static/images/banner_4.jpg',
          link: 'javascript:;'
        },
        {
          id: 3,
          src: './static/images/banner_1.jpg',
          link: 'javascript:;'
        },
        {
          id: 4,
          src: './static/images/banner_2.jpg',
          link: 'javascript:;'
        }
      ],
      loadShow: false,
      loadTime: 10,
      sleepLoad: 1000
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
          _this.$store.commit("changeWelcomeFlag");
        }
      }, 1000);
    }, _this.sleepLoad);
  },
  methods: {
    hideWelcome() {
      const _this = this;
      _this.$store.dispatch("commitWelcomeFlag");
    }
  }
};
</script>

<style lang="less" scoped>
#Welcome {
  width: 100%;
  height: 100%;
  position: relative;
  // background-color: #1c28b0;

  .swiper_banner {
    top: 10%;
    width: 100%;
    height: 260px;
    position: absolute;
    .welcome-pro-img {
      // width: 100%;
      height: 100%;
    }
  }

  .btn-back {
    .box {
      color: #999;
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

  .welcome-bg-img {
    width: 100%;
    position: absolute;
    bottom: 0px;
  }

  // @-webkit-keyframes fadeInOut {
  //   0% {
  //     opacity: 0;
  //   }
  //   50% {
  //     opacity: 0.5;
  //   }
  //   100% {
  //     opacity: 1;
  //   }
  // }

  .welcome-pro-img {
    // top: 10%;
    // width: 100%;
    // position: absolute;

    // -webkit-animation-name: fadeInOut; /*动画名称*/
    // -webkit-animation-duration: 1.5s; /*动画持续时间*/
    // -webkit-animation-iteration-count: 1; /*动画次数*/
    // -webkit-animation-delay: 0s; /*延迟时间*/
  }
}
</style>

