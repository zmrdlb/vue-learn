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
        .lib-px-to-rem(width,60);
        .lib-px-to-rem(height,60);
    }
}
</style>
