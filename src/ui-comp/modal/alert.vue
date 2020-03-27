<template>
    <ui-modal
        ref="modal"
        :name="modalName"
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

<script>

import isFunction from 'lodash/isFunction'
import extend from 'extend'
import modalMixin from './modal-mixin'
import UiModal from './modal.vue'

const modalName = 'ui-modal-alert';

export default {
    name: modalName,
    data(){
        return {
            params: {}
        }
    },
    mixins: [modalMixin.inforModalMixin],
    components: {
        UiModal
    },
    computed: {
        ok(){
            return extend({
                label: '确定',
                handler: null
            },this.params.ok)
        }
    },
    created(){
        this.modalName = modalName;
    },
    methods: {
        // 点击确定按钮
        onOk(e){
            if(isFunction(this.ok.handler)){
                this.ok.handler(e);
            }
            this.$refs.modal.close();
        }
    }
}

</script>
