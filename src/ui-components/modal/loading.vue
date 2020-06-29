<template>
    <transition name="loading-fade">
        <div class="g-modal-loading" v-if="showLoading"></div>
    </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * 应用场景：实际开发中，可能同时出现多个异步请求。当请求发起时，显示 loading。当所有请求都完成后，loading 才隐藏。
 * 验收标准：但无论有多少请求，界面应当只显示一个 loading。所有请求都完成后，loading 才隐藏。
 * 组件使用：本组件内部控制了 loading 的显示。开发人员无需自己实现此逻辑，直接对于每个请求都调用一次 show 和 hide 即可。
 */

let loadingCount: number = 0, // 当前要显示的 loading 数量。
    timer: number | null = null; // 延迟显示 loading 计时器

@Component
export default class UiLoading extends Vue {
    // data
    private showLoading: boolean = false

    /**
     * 显示全局 loading，且超过 200ms 才会显示
     * @return {[type]} [description]
     */
    show(){
        loadingCount++;
        if(!this.showLoading){
            timer = setTimeout(() => {
                timer = null;
                this.showLoading = true;
            },200)
        }
    }
    /**
     * 隐藏全局 loading
     * @return {[type]} [description]
     */
    hide(){
        loadingCount > 0 && loadingCount--;
        if(!loadingCount){
            this.showLoading = false;
            timer && clearTimeout(timer) || (timer = null);
        }
    }
}
// export default {
//     name: 'ui-modal-loading',
//     data(){
//         return {
//             loadings: []
//         }
//     },
//     created(){
//         this.workerController = new WorkerController();
//     },
//     methods: {
//         /**
//          * 创建 loading
//          * @param  {[type]} worker [description]
//          * @return {[type]}        [description]
//          */
//         _createLoading(worker){
//             worker.loading = {
//                 id: generateId()
//             }
//             this.loadings.push(worker.loading)
//         },
//         /**
//          * 超过 200ms 才会显示 loading
//          * @param  {[type]} worker [description]
//          * @return {[type]}        [description]
//          */
//         _initLoading(worker){
//             worker.timer = setTimeout(() => {
//                 worker.timer = null;
//                 this._createLoading(worker);
//             },200)
//         },
//         /**
//          * 显示全局 loading
//          * @return {[type]} [description]
//          */
//         show(){
//             this._initLoading(this.workerController.get())
//         },
//         /**
//          * 隐藏全局 loading
//          * @return {[type]} [description]
//          */
//         hide(){
//             var worker = this.workerController.end();
//             if(worker){
//                 if(worker.timer){
//                     clearTimeout(worker.timer);
//                     worker.timer = null;
//                 }
//
//                 if(worker.loading){
//                     let index = this.loadings.findIndex(loading => loading.id === worker.loading.id)
//                     if (index !== -1) {
//                         this.loadings.splice(index,1)
//                     }
//                     worker.loading = null;
//                 }
//             }
//         }
//     }
//
// }
</script>

<style lang="less">
    .g-modal-loading {
         position: fixed;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         z-index: 999;
         background: rgba(255,255,255,0.5) url('images/loader-circle.svg') no-repeat center;
         background-size: 40px 40px;
    }

    .loading-fade-enter,.loading-fade-leave-to {
        opacity: 0;
    }
    .loading-fade-enter-to,.loading-fade-leave {
        opacity: 1;
    }
    .loading-fade-enter-active,.loading-fade-leave-active {
        transition: opacity .5s;
    }
</style>
