<template>
  <div>
    <h2>新闻列表</h2>
    <ul>
      <li><router-link to="/news/1">新闻1</router-link></li>
      <li><router-link to="/news/2">新闻2</router-link></li>
      <li @click="jumpNews(3,'code')"><a>编码方式跳转到新闻列表3</a></li>
    </ul>
    <h2>vuex状态数据：{{count}}</h2>
    <button @click="decrement">count-1</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'news',
  computed: mapState([
    'count'
  ]),
  methods: {
    jumpNews(id,type){
      this.$router.push({name: 'news-detail', params: {id}, query: {type}});
    },
    // decrementHandle(){
    //   this.$store.commit('decrement');
    // },
    ...mapMutations([
      'decrement'
    ])
  }
}
</script>

<style scoped>
</style>
