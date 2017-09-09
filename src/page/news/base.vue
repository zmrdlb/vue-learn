<template>
  <div>
    <header class="head">新闻专题</header>
    <!--没看到transition的效果-->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'news-base'
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
