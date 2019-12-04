//vuex的使用
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  // mutations 中的操作必须是同步的
  // actions中的操作可以是异步的
  // https://vuex.vuejs.org/zh-cn/actions.html
  mutations: {
  	increment: (state,n) => state.count+=n,
    decrement: state => state.count--
  },
  //和computed一样，计算后的属性值会被缓存起来
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  }
})
