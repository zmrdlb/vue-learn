<template>
    <transition-group name="loading-fade" tag="div">
        <div class="g-modal-loading"
            v-for="loading in loadings"
            :key="loading.id"
        >
        </div>
    </transition-group>
</template>

<script lang="ts">
import WorkerController, { Worker } from '@lib/pattern/worker-controller'
import {generateId} from '@lib/util/uid'
import { Component, Vue } from 'vue-property-decorator'

interface LoadingInstance {
    id: string;
}

class WorkerLoading extends Worker {
    loading?: LoadingInstance | null
    timer: number | null = null

    constructor(){
        super()
    }
}

@Component
export default class UiLoading extends Vue {
    // data
    private loadings: LoadingInstance[] = []
    private workerController: WorkerController = new WorkerController()

    // created(){
    //     this.workerController = new WorkerController();
    // }

    /**
     * 创建 loading
     * @param  {[type]} worker [description]
     * @return {[type]}        [description]
     */
    _createLoading(worker: WorkerLoading){
        worker.loading = {
            id: generateId()
        }
        this.loadings.push(worker.loading)
    }
    /**
     * 超过 200ms 才会显示 loading
     * @param  {[type]} worker [description]
     * @return {[type]}        [description]
     */
    _initLoading(worker: WorkerLoading){
        worker.timer = setTimeout(() => {
            worker.timer = null;
            this._createLoading(worker);
        },200)
    }
    /**
     * 显示全局 loading
     * @return {[type]} [description]
     */
    show(){
        this._initLoading(this.workerController.get() as WorkerLoading)
    }
    /**
     * 隐藏全局 loading
     * @return {[type]} [description]
     */
    hide(){
        var worker = this.workerController.end();
        if(worker){
            if((worker as WorkerLoading).timer){
                clearTimeout((worker as WorkerLoading).timer as number);
                (worker as WorkerLoading).timer = null;
            }

            if((worker as WorkerLoading).loading){
                let index = this.loadings.findIndex(loading => loading.id === (worker as WorkerLoading).loading!.id)
                if (index !== -1) {
                    this.loadings.splice(index,1)
                }
                (worker as WorkerLoading).loading = null;
            }
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
