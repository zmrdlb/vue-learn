<template>
    <modal
        :name="modalName"
        :width="modalWidth"
        :height="modalHeight"
        :classes="[modalClasses]"
        @before-open="onBeforeOpen"
        @before-close="onBeforeClose">
        <div :class="['g-modal',classes]">
            <div class="title" v-if="hasTitle">
                <span class="text" v-if="params.title">{{params.title}}</span><a class="icon-material close" @click.prevent="onClose"></a>
            </div>
            <div class="body">
                <slot name="body" v-bind:params="params"></slot>
            </div>
            <div class="footer" v-if="hasFooter">
                <slot name="footer" v-bind:params="params"></slot>
            </div>
        </div>
    </modal>
</template>

<script lang="ts">

import { Component, Prop, Vue, Mixins } from 'vue-property-decorator'
import { ModalMixin } from './modal-mixin'
import { ModalParams, ModalEvtHandlerParamsE } from "./modal-d"

@Component
export default class UiModal extends Mixins(ModalMixin) {
    // vue-js-modal 属性
    @Prop({type: String, required: true}) readonly modalName!: string
    @Prop({default: ''}) readonly modalClasses!: string | string[]
    @Prop({type: String, default: '100%'}) readonly modalWidth!: string
    @Prop({type: String, default: 'auto'}) readonly modalHeight!: string
    // 自定义 modal 属性
    @Prop({type: Boolean, default: false}) readonly hasTitle!: boolean
    @Prop({type: Boolean, default: false}) readonly hasFooter!: boolean
    @Prop({type: [String, Array], default: ''}) readonly classes!: string | string[]

    // data
    private params: ModalParams = {}

    // methods
    onClose(){
        this.close();
    }
    onBeforeOpen(e: ModalEvtHandlerParamsE){
        this.params = e.params;
        this.$emit('before-open',e);
    }
    onBeforeClose(e: ModalEvtHandlerParamsE){
        this.params = {};
        this.$emit('before-close',e);
    }
}

// export default {
//     name: 'ui-modal',
//     props: {
//         // vue-js-modal 属性
//         modalName: {
//             type: String,
//             required: true
//         },
//         modalClasses: {
//             type: [String, Array],
//             default: ''
//         },
//         modalWidth: {
//             type: String,
//             default: '100%'
//         },
//         modalHeight: {
//             type: String,
//             default: 'auto'
//         },
//         // 自定义 modal 属性
//         hasTitle: {
//             type: Boolean,
//             default: false
//         },
//         hasFooter: {
//             type: Boolean,
//             default: false
//         },
//         classes: {
//             type: [String, Array],
//             default: ''
//         }
//     },
//     data(){
//         return {
//             params: {}
//         }
//     },
//     mixins: [modalMixin.modalMixin],
//     methods: {
//         onClose(){
//             this.close();
//         },
//         onBeforeOpen: function(e){
//             this.params = e.params;
//             this.$emit('before-open',e);
//         },
//         onBeforeClose: function(e){
//             this.params = {};
//             this.$emit('before-close',e);
//         }
//     }
// }
</script>

<style lang="less">

    /**
     * 基本弹层
     */
    .g-modal {
        background-color: @color-white;
        border-radius: @border-radius;
        box-shadow: @box-shadow2;
        width: 85%;
        min-width: 0;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;

        & > .title {
            flex: none;
            line-height: 40px;
            padding: 0 20px;
            background: @color-gray14;

            .lib-clearfix();

            .close {
                float: right;
                color: @color-gray15;
                line-height: inherit;
                margin-left: 20px;
                margin-right: -16px;
            }
        }

        & > .body {
            overflow-y: auto;
            padding: 20px;
        }

        & > .footer {
            flex: none;
            padding: 4px 20px 24px;
            .lib-clearfix();

            button {
                 float: right;
                 margin-right: 5px;

                 &:first-child {
                     margin-right: 0;
                 }
             }
        }
    }

    .g-modal {
        .lib-responsive-pc({
            width: auto;
            min-width: 400px;
            max-width: 80%;
        })
    }

    /**
     * 信息弹层。用于 alert, confirm
     */
    .g-modal.g-modal-infor {
        max-width: 400px;

        & > .body {
            @font-ruleset();
            display: flex;

            .left {
                flex: none;
            }

            .right {
                margin-left: 15px;
                align-self: center;
            }

            .icon {
                display: inline-block;
                vertical-align: middle;
                width: 45px;
                height: 45px;
                background: @color-white url("images/icons_message90*90@2x.png") no-repeat;
                background-size: 500% 100%;

                &.success {
                    background-position: 0 0;
                }

                &.infor {
                    background-position: -45px 0;
                }

                &.fail {
                    background-position: -90px 0;
                }

                &.warning {
                    background-position: -135px 0;
                }

                &.ask {
                    background-position: -180px 0;
                }
            }

            .message {
                .lib-break-line();
            }
        }
    }

    .g-modal.g-modal-infor {
        .lib-responsive-pc({
            width: 400px;
        })
    }
</style>
