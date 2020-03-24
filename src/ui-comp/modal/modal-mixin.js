import isFunction from 'lodash/isFunction'

export default {
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
