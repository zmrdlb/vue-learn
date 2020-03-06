<template>
  <div>
    <h1>新闻列表</h1>
    <ul>
      <li><router-link to="/news/1">新闻1</router-link></li>
      <li><router-link to="/news/2">新闻2</router-link></li>
      <li @click="jumpNews('3','code')"><a>编码方式跳转到新闻列表3</a></li>
    </ul>
    <h1>vuex状态数据：{{count}}</h1>
    <button class="primary" @click="decrement">count-1</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import Component from 'vue-class-component'

@Component({
  name: 'news',

  computed: mapState([
    'count'
  ]),
  methods: {
    // decrementHandle(){
    //   this.$store.commit('decrement');
    // },
    ...mapMutations([
      'decrement'
    ])
  }
})
export default class News extends Vue {
  decrement!: () => void;

  // methods
  jumpNews (id: string, type: string) {
    this.$router.push({ name: 'news-detail', params: { id }, query: { type } })
  }
}
</script>

<style>
</style>
