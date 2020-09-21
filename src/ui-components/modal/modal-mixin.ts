import _ from 'lodash'
import { Component, Vue, Mixins } from 'vue-property-decorator'
import { ModalParams, InforModalParams, ModalEvtHandlerParamsE } from "./modal-d"

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

type IconMap = {
    [key: string | 'infor']: [string,string]
}

export const iconMap: IconMap = {
     'infor': ['infor','提示'],
     'warning': ['warning','警告'],
     'success': ['success','成功'],
     'fail': ['fail','失败'],
     'ask': ['ask','询问']
}

@Component
export class InforModalMixin extends Vue {
    protected modalName!: string
    protected params!: InforModalParams

    // 显示弹层
    show(params: InforModalParams){
        if(!params.icon){
            params.icon = 'infor';
        }
        params.iconClass = iconMap[params.icon][0];
        params.title = iconMap[params.icon][1];
        this.$modal.show(this.modalName,params);
    }

    // 关闭弹层。弹层也会被销毁
    close(){
        this.$modal.hide(this.modalName);
    }

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
