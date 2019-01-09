import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否展示欢迎页
    isWelcome: false
  },
  // 数据操作
  mutations: {
    // 切换欢迎页
    changeWelcomeFlag(state) {
      state.isWelcome = !state.isWelcome;
    }
  },
  // 数据操作 / 计算
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  // 异步操作
  actions: {
    commitWelcomeFlag (context) {
      window.setTimeout(()=>{
        context.commit('changeWelcomeFlag')
      },100)
    }
  }
})

