<template>
  <div>
    <header :class="$style.head">新闻专题</header>
    <transition name="view-fade" mode="out-in">
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

<style lang="less" scoped>
    .view-fade-enter,.view-fade-leave-to {
        transform: translateX(100%);
    }
    .view-fade-enter-to,.view-fade-leave {
        transform: translateX(0);
    }
    .view-fade-enter-active,.view-fade-leave-active {
        transition: transform .5s;
    }
</style>
