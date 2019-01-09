<template>
  <div id="app">
    <Welcome v-if="!isWelcome"/>
    <router-view v-if="isWelcome" class="container"/>
    <Menu v-if="isWelcome"/>
  </div>
</template>

<script>
import Welcome from "com/page/welcome/index";
import Menu from "com/common/bottom-menu/index";

export default {
  name: "App",
  data() {
    return {
      // isWelcome: this.$store.state.isWelcome
    };
  },
  created: function () {
    // 刷新跳转首页
    this.$router.push('/')
  },
  computed: {
    isWelcome() {
      return this.$store.state.isWelcome;
    }
  },
  components: {
    Welcome: Welcome,
    Menu: Menu
  },
  mounted() {
    console.log();
  }
};
</script>

<style lang="less" scoped>
#app {
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: scroll;

  .container {
    height: calc(100% - 50px);
  }
}
</style>

