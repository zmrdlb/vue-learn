import extend from 'extend'
import Vue from 'vue'
import VModal from 'vue-js-modal'

Vue.use(VModal, {dynamic: true, injectModalsContainer: true});

const ModalPlugin = {
    install(Vue: any){

        /**
         * 显示 alert 弹层。
         * @param  {Object} params  Alert params
         * 可传的格式如下：(均可选)
         * {
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
        Vue.prototype.$alert = function(params:object){
            this.$modal.show('ui-modal-alert', params)
        }
    }
}

export default ModalPlugin;
