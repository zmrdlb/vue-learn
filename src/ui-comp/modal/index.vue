<template>
    <div>
        <ui-toast ref="toast"></ui-toast>
        <ui-loading ref="loading"></ui-loading>
        <ui-alert ref="alert"></ui-alert>
    </div>
</template>

<script>

import extend from 'extend'
import Vue from 'vue'
import UiToast from './toast.vue'
import UiLoading from './loading.vue'
import UiAlert from './alert.vue'

export default {
    name: 'ui-modal-index',
    components: {
        UiAlert,
        UiLoading,
        UiToast
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
             *   inforType: 'infor',
                 tip: 'alert提示信息',
                 desc: 'alert提示信息描述',
                 ok: {
                     label: '确定',
                     handler(e: object){
                         console.log('点击了ok',e,params);
                     }
                 },
                 beforeOpen(e: object){},
                 beforeClose(e: object){}
             }
             */
            $alert(params){
                this.$modal.show(_this.$refs.alert.modalName, params)
            },

            $toast(msg){
                _this.$refs.toast.show(msg);
            }
        })


    }
}
</script>
