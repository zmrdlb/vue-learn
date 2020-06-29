<template>
    <transition-group name="toast-slide" tag="div">
        <div class="g-modal-toast"
            v-for="toast in toasts"
            :key="toast.id"
        >
        {{toast.msg}}
        </div>
    </transition-group>
</template>

<script lang="ts">
import {generateId} from '@lib/util/uid'
import { Component, Vue } from 'vue-property-decorator'

interface ToastInstance {
    id: string;
    msg: string;
}

@Component
export default class UiToast extends Vue {
    // data
    private toasts: ToastInstance[] = []

    show(msg: string){
        if(!msg){
            return
        }

        let id = generateId();
        this.toasts.push({
            id,
            msg
        })

        setTimeout(() => {
            let index = this.toasts.findIndex(toast => toast.id === id)
            if (index !== -1) {
                this.toasts.splice(index,1)
            }
        },2000);
    }
}

// export default {
//     name: 'ui-modal-toast',
//     data(){
//         return {
//             toasts: []
//         }
//     },
//     methods: {
//         show(msg){
//             if(!msg){
//                 return
//             }
//
//             let id = generateId();
//             this.toasts.push({
//                 id,
//                 msg
//             })
//
//             setTimeout(() => {
//                 let index = this.toasts.findIndex(toast => toast.id === id)
//                 if (index !== -1) {
//                     this.toasts.splice(index,1)
//                 }
//             },2000);
//         }
//     }
// }
</script>

<style lang="less">
    .g-modal-toast {
        position: fixed;
        bottom: 20%;
        left: 50%;
        transform: translateX(-50%);
        max-width: 400px;
        @font-ruleset();
        .head-three(@color-white);
        padding: 4px 16px;
        background: @color-gray5;
        border-radius: @border-radius;
        .lib-break-line();

        .lib-responsive-pc({
            max-width: 700px;
        })
    }

    .toast-slide-enter,.toast-slide-leave-to {
        bottom: 5%
    }
    .toast-slide-enter-to,.toast-slide-leave {
        bottom: 20%;
    }
    .toast-slide-enter-active,.toast-slide-leave-active {
        transition: bottom .5s;
    }
</style>
