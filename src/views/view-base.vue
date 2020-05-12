<template>
    <div>
        <div class="logo-root">
            <img class="logo" src="../theme/logo.png">
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'view-base'
}
</script>

<style lang="less">
.logo-root {
    text-align: center;

    .logo {
        width: 60px;
        height: 60px;
    }
}
</style>
