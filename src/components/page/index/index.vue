<template>
  <div id="Index">
    <el-carousel class="swiper_banner" :autoplay="true" arrow="always">
      <el-carousel-item v-for="item in itemBanner" :key="item.id">
        <img :src="item.src" class="welcome-pro-img" alt>
      </el-carousel-item>
    </el-carousel>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="title">
          <span>选择门店</span>
          <p class="desc">门店影响能否正常下单哦</p>
        </div>
        <el-switch class="btn_switch" active-text="外送" inactive-text="自提" active-value="asdas" v-model="switchFlag"></el-switch>
      </div>
      <ul class="infoList">
        <li v-for="item in itemProduct" :key="item.id" class="text item">
          <div>
            <span>{{item.name}}</span>
            <p>{{item.desc}}</p>
          </div>
          <i :class="item.icon"></i>
        </li>
      </ul>
    </el-card>
    <img src="@/assets/logo_1080.png" class="fot_banner" alt="">
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      switchFlag: false,
      itemProduct: [
        {
          id: 1,
          name: '现在下单',
          desc: 'ORDER NOW',
          icon: 'el-icon-menu'
        },
        {
          id: 2,
          name: '咖啡钱包',
          desc: 'COFFEE WALLET',
          icon: 'el-icon-menu'
        },
        {
          id: 3,
          name:'送Ta咖啡',
          desc: 'SEND COFFEE',
          icon: 'el-icon-menu'
        },
        {
          id: 4,
          name: '企业账户',
          desc: 'ENTERPRISE ACCOUNT',
          icon: 'el-icon-menu'
        },
      ],
      itemBanner: [
        {
          id: 1,
          src: "./static/images/banner_1.jpg",
          link: "javascript:;"
        },
        {
          id: 2,
          src: "./static/images/banner_2.jpg",
          link: "javascript:;"
        },
        {
          id: 3,
          src: "./static/images/banner_3.jpg",
          link: "javascript:;"
        },
        {
          id: 4,
          src: "./static/images/banner_4.jpg",
          link: "javascript:;"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
#Index {
  width: 100%;
  position: relative;
  .swiper_banner {
    width: 100%;
    height: 200px;
    .welcome-pro-img {
      // width: 100%;
      height: 100%;
    }
  }

  .box-card {
    height: 50%;
    .title {
      width: 50%;
      display: inline-block;
      .desc {
        padding: 2px 0px;
        margin: 0px;
        font-size: 12px;
        color: #999;
      }
    }

    .btn_switch {
      float: right;
      padding: 10px 0;
    }

    .infoList {
      padding: 0px;
      li {
        height: 45px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ccc;
        div{
          display: inline-block;
          span{
            font-size: 16px;
          }
          p{
            padding: 0px;
            margin: 0px;
            font-size: 12px;
            color: #999;
          }
        }
        i{
          font-size: 20px;
          float: right;
          line-height: 45px;
        }
      }
    }
  }

  .fot_banner {
    width: 100%;
    height: calc(50% - 200px);
  }
}
</style>

<style lang="less">
    .el-card__body{
      padding: 0px 20px;
    }
    .el-carousel__container {
      height: 200px;
    }
</style>


