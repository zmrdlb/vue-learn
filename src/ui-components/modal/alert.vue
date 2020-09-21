<template>
    <ui-modal
        :modalName="modalName"
        :classes="['g-modal-infor']"
        :has-footer="true"
        :has-title="true"
        @before-open="onBeforeOpen"
        @before-close="onBeforeClose">
        <template v-slot:body="{params}">
            <div class="left">
                <div :class="['icon', params.iconClass]"></div>
            </div>
            <div class="right">
                <div class="message" v-if="params.message">
                    {{params.message}}
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
import { InforModalMixin, iconMap} from './modal-mixin'
import { AlertParams } from "./modal-d"

@Component({
    components: {
        UiModal
    }
})
export default class UiAlert extends Mixins(InforModalMixin) {
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
