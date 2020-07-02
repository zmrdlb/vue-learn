import _ from 'lodash'
import { Component, Vue, Mixins } from 'vue-property-decorator'
import { ModalParams, ModalEvtHandlerParamsE } from "./modal-d"

/**
 * 基本弹层 mixin
 */
@Component
export class ModalMixin extends Vue {
    protected modalName!: string

    // 显示弹层
    show(params: ModalParams){
        this.$modal.show(this.modalName,params);
    }
    // 关闭弹层。弹层也会被销毁
    close(){
        this.$modal.hide(this.modalName);
    }
}

/**
 * 信息弹层 mixin
 */
@Component
export class InforModalMixin extends Vue {
    protected params!: ModalParams

    onBeforeOpen(e: ModalEvtHandlerParamsE){
        this.params = e.params;
        if(_.isFunction(this.params.beforeOpen)){
            this.params.beforeOpen(e);
        }
    }
    onBeforeClose(e: ModalEvtHandlerParamsE){
        if(_.isFunction(this.params.beforeClose)){
            this.params.beforeClose(e);
        }
        this.params = {}
    }
}

// export default {
//     /**
//      * 基本弹层 mixin
//      * @type {Object}
//      */
//     modalMixin: {
//         methods: {
//             show(params){
//                 this.$modal.show(this.modalName,params);
//             },
//             // 关闭弹层。弹层也会被销毁
//             close(){
//                 this.$modal.hide(this.modalName);
//             }
//         }
//     },
//     /**
//      * 信息弹层 mixin
//      * @type {Object}
//      */
//     inforModalMixin: {
//         methods: {
//             onBeforeOpen: function(e){
//                 this.params = e.params;
//                 if(isFunction(this.params.beforeOpen)){
//                     this.params.beforeOpen(e);
//                 }
//             },
//             onBeforeClose: function(e){
//                 if(isFunction(this.params.beforeClose)){
//                     this.params.beforeClose(e);
//                 }
//                 this.params = {}
//             }
//         }
//     }
// }
