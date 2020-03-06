<template>
  <div id="app" class="app">
      <div class="logo-root">
          <img class="logo" src="./theme/logo.png">
      </div>
      <router-view></router-view>
  </div>
</template>

<style lang="less">
@import "./theme/index.less";

.app {
    .lib-px-to-rem(padding-left,10);
    .lib-px-to-rem(padding-right,10);
}

.logo-root {
    text-align: center;

    .logo {
        .lib-px-to-rem(width,60);
        .lib-px-to-rem(height,60);
    }
}
</style>
