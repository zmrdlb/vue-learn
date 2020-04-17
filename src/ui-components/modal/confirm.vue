<template>
    <ui-modal
        :modalName="modalName"
        :classes="['g-modal-infor']"
        :has-footer="true"
        @before-open="onBeforeOpen"
        @before-close="onBeforeClose">
        <template v-slot:body="{params}">
            <div class="left">
                <div :class="['type-icon', params.inforType || 'infor']"></div>
            </div>
            <div class="right">
                <div class="tip-title" v-if="params.tip">
                    {{params.tip}}
                </div>
                <div class="tip-content" v-if="params.desc">
                    {{params.desc}}
                </div>
            </div>
        </template>
        <template v-slot:footer="{params}">
            <button class="primary" @click="onOk">{{ok.label}}</button>
            <button class="secondary" @click="onCancel">{{cancel.label}}</button>
        </template>
    </ui-modal>
</template>

<script lang="ts">

import isFunction from 'lodash/isFunction'
import extend from 'extend'
import UiModal from './modal.vue'
import { Component, Vue, Mixins } from 'vue-property-decorator'
import { ModalMixin, InforModalMixin } from './modal-mixin'
import { ConfirmParams } from "./modal-d"

@Component({
    components: {
        UiModal
    }
})
export default class UiConfirm extends Mixins(ModalMixin,InforModalMixin) {
    // data
    protected params: ConfirmParams = {}

    // computed
    get ok(){
        return extend({
            label: '确定',
            handler: null
        },this.params.ok)
    }

    get cancel(){
        return extend({
            label: '取消',
            handler: null
        },this.params.cancel)
    }

    created(){
        this.modalName = 'ui-modal-confirm';
    }

    // 点击确定按钮
    onOk(e: object){
        if(isFunction(this.ok.handler)){
            this.ok.handler(e);
        }
        this.close();
    }

    // 点击取消按钮
    onCancel(e: object){
        if(isFunction(this.cancel.handler)){
            this.cancel.handler(e);
        }
        this.close();
    }
}

// export default {
//     name: modalName,
//     data(){
//         return {
//             params: {}
//         }
//     },
//     mixins: [modalMixin.modalMixin,modalMixin.inforModalMixin],
//     components: {
//         UiModal
//     },
//     computed: {
//         ok(){
//             return extend({
//                 label: '确定',
//                 handler: null
//             },this.params.ok)
//         },
//         cancel(){
//             return extend({
//                 label: '取消',
//                 handler: null
//             },this.params.cancel)
//         }
//     },
//     created(){
//         this.modalName = modalName;
//     },
//     methods: {
//         // 点击确定按钮
//         onOk(e){
//             if(isFunction(this.ok.handler)){
//                 this.ok.handler(e);
//             }
//             this.close();
//         },
//         // 点击取消按钮
//         onCancel(e){
//             if(isFunction(this.cancel.handler)){
//                 this.cancel.handler(e);
//             }
//             this.close();
//         }
//     }
// }

</script>
