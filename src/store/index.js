import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否展示欢迎页
    isWelcome: false
  },
  mutations: {
    // 切换欢迎页
    changeWelcomeFlag(state) {
      state.isWelcome = !state.isWelcome;
    }
  },
  action: {
    // commitWelcomeFlag: ({ commit }) => commit('changeWelcomeFlag')
  }
})

