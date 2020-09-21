<template>
    <div>
        <ui-toast ref="toast"></ui-toast>
        <ui-loading ref="loading"></ui-loading>
        <ui-alert ref="alert"></ui-alert>
        <ui-confirm ref="confirm"></ui-confirm>
    </div>
</template>

<script>

import extend from 'extend'
import Vue from 'vue'
import UiToast from './toast.vue'
import UiLoading from './loading.vue'
import UiAlert from './alert.vue'
import UiConfirm from './confirm.vue'

export default {
    name: 'ui-modal-index',
    components: {
        UiLoading,
        UiToast,
        UiAlert,
        UiConfirm
    },
    mounted(){
        let _this = this;

        /**
         * 全局 loading
         * @return {[type]} [description]
         */
        Vue.prototype.$loading = (function(){
            return {
                show(){
                    _this.$refs.loading.show()
                },
                hide(){
                    _this.$refs.loading.hide()
                }
            }
        })()

        extend(Vue.prototype,{
            /**
             * 显示 alert 弹层。
             * @param  {Object} params  Alert params
             * 可传的格式如下：(均可选)
             * {
             *   icon: 'infor',
                 message: 'alert提示信息',
                 ok: {
                     label: '确定',
                     handler(e: object){
                         console.log('点击了确定',e);
                     }
                 },
                 beforeOpen(e: object){},
                 beforeClose(e: object){}
             }
             */
            $alert(params){
                _this.$refs.alert.show(params)
            },

            /**
             * 显示 confirm 弹层。
             * @param  {Object} params  Confirm params
             * 可传的格式如下：(均可选)
             * {
             *   icon: 'infor',
                 message: 'confirm提示信息',
                 ok: {
                     label: '确定',
                     handler(e: object){
                         console.log('点击了确定',e);
                     }
                 },
                 cancel: {
                     label: '取消',
                     handler(e: object){
                         console.log('点击了取消',e);
                     }
                 },
                 beforeOpen(e: object){},
                 beforeClose(e: object){}
             }
             */
            $confirm(params){
                _this.$refs.confirm.show(params)
            },

            $toast(msg){
                _this.$refs.toast.show(msg);
            }
        })


    }
}
</script>
