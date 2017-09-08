<template>
  <div>
    <h2>新闻列表</h2>
    <ul>
      <li><router-link to="/news/1">新闻1</router-link></li>
      <li><router-link to="/news/2">新闻2</router-link></li>
      <li @click="jumpNews(3,'code')"><a>编码方式跳转到新闻列表3</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'news',
  methods: {
    jumpNews(id,type){
      this.$router.push({name: 'news-detail', params: {id}, query: {type}});
    }
  }
}
</script>

<style scoped>
</style>
