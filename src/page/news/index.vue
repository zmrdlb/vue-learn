<template>
  <div>
    <header class="head">新闻页面头部</header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'news'
}
</script>

<style scoped>
  .head {
    color: Green;
    font-size: 1.6rem;
    text-align: center;
    line-height: 1.4em;
  }
</style>
