<template>
    <div>
        <ul v-show="summaryShow">
            <li>
                <router-link :to="{ name: 'ued-base'}">基本排版、button</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'ued-modal'}">modal弹层</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ued-index',
    data(){
        return {
            summaryShow: true
        }
    },
    beforeRouteEnter(to, from, next){
        next(vm => {
            vm.summaryShow = to.name == 'ued-index';
        })
    },
    beforeRouteUpdate(to, from, next){
        this.summaryShow = to.name == 'ued-index';
        next();
    }
}
</script>
