<template>
  <div id="shopMenu">
    <el-carousel class="swiper_banner" :autoplay="true" arrow="always">
      <el-carousel-item v-for="item in itemBanner" :key="item.id">
        <img :src="item.src" class="banner-pro-img" alt>
      </el-carousel-item>
    </el-carousel>
    <el-container class="container">
      <el-container>
        <el-aside width="100px">
          <left-aside />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Index from "./script";
import leftAside from "./aside/index"
export default {
  name: "shopMenu",
  data() {
    return {
      itemBanner: Index.banner
    };
  },
  components: {
    leftAside: leftAside
  },
  mounted() {
    const _this = this;
  },
  methods: {}
};
</script>

<style scoped>
@import "./style.css";
</style>

