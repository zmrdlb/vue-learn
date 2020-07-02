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
        </template>
    </ui-modal>
</template>

<script lang="ts">

import _ from 'lodash'
import extend from 'extend'
import UiModal from './modal.vue'
import { Component, Vue, Mixins } from 'vue-property-decorator'
import { ModalMixin, InforModalMixin} from './modal-mixin'
import { AlertParams } from "./modal-d"

@Component({
    components: {
        UiModal
    }
})
export default class UiAlert extends Mixins(ModalMixin,InforModalMixin) {
    // data
    protected params: AlertParams = {}

    // computed
    get ok(){
        return extend({
            label: '确定',
            handler: null
        },this.params.ok)
    }

    created(){
        this.modalName = 'ui-modal-alert';
    }

    // 点击确定按钮
    onOk(e: object){
        if(_.isFunction(this.ok.handler)){
            this.ok.handler(e);
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
//         }
//     }
// }

</script>
