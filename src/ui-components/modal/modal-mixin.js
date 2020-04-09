import isFunction from 'lodash/isFunction'

export default {
    /**
     * 基本弹层 mixin
     * @type {Object}
     */
    modalMixin: {
        methods: {
            show(params){
                this.$modal.show(this.modalName,params);
            },
            // 关闭弹层。弹层也会被销毁
            close(){
                this.$modal.hide(this.modalName);
            }
        }
    },
    /**
     * 信息弹层 mixin
     * @type {Object}
     */
    inforModalMixin: {
        methods: {
            onBeforeOpen: function(e){
                this.params = e.params;
                if(isFunction(this.params.beforeOpen)){
                    this.params.beforeOpen(e);
                }
            },
            onBeforeClose: function(e){
                if(isFunction(this.params.beforeClose)){
                    this.params.beforeClose(e);
                }
                this.params = {}
            }
        }
    }
}
