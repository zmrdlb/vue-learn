import isFunction from 'lodash/isFunction'

export default {
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
