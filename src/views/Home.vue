<template>
  <div :class="$style.homeRoot">
    <HelloWorld :msg="msg"/>

    <section :class="$style.routerList">
        <h1>我的页面路由</h1>
        <ul>
        <li><router-link to="/news">新闻</router-link></li>
        <li><router-link to="/user">用户</router-link></li>
        <li><router-link :to="{ name: 'ued-index'}">ued设计demo</router-link></li>
        </ul>
        <h2>vuex状态数据：</h2>
        <ul>
          <li>
            count: {{count}}
          </li>
          <li>
            doneTodosCount: {{doneTodosCount}}
          </li>
          <li>
            <button class="primary" @click="incrementHandle">count+3</button>
          </li>
        </ul>
    </section>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import Component from 'vue-class-component'
// @ is an alias to /src
import HelloWorld from '@comp/HelloWorld.vue'// @ is an alias to /src

@Component({
  // Vue component 本身的 name option
  name: 'home',

  components: {
    HelloWorld
  },
  // mapState介绍：https://vuex.vuejs.org/zh-cn/state.html
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   count: state => state.count,
  //
  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   countAlias: 'count',
  //
  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   countPlusLocalState (state) {
  //     return state.count + this.localCount
  //   }
  // })
  computed: {
    // doneTodosCount(){
    //   return this.$store.getters.doneTodosCount
    // },
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'doneTodosCount'
    ])
  }
})
export default class Home extends Vue {
  // data
  msg: string = 'Welcome to Your Vue.js App';

  // 这两个在 Component decorator 里声明了，所以此处需要额外声明
  count!: number
  doneTodosCount!: number

  // methods
  incrementHandle () {
    this.$store.commit('increment', 3)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" module>
    .home-root {
        .router-list {
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
</style>
