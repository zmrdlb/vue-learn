<template>
  <div id="app">
    <img src="./assets/logo.png" style="width: 5rem; height: 5rem;">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">

@import "./assets/less/reset.less";
@import "./assets/less/layout.less";

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60rem / 40;
}

a {
  color: #42b983;
  text-decoration: underline;
}

</style>
