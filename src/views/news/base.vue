<template>
  <div>
    <header :class="$style.head">新闻专题</header>
    <transition name="view-slide" mode="out-in">
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
    .view-slide-enter,.view-slide-leave-to {
        transform: translateX(100%);
    }
    .view-slide-enter-to,.view-slide-leave {
        transform: translateX(0);
    }
    .view-slide-enter-active,.view-slide-leave-active {
        transition: transform .5s;
    }
</style>
