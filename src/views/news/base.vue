<template>
  <div>
    <header :class="$style.head">新闻专题</header>
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

<style lang="less" module>
  .head {
      color: green;
      .lib-px-to-rem(font-size,32);
      text-align: center;
  }
</style>
