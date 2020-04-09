<template>
    <div>
        <h3>信息弹层</h3>
        <p class="tip">
            为了说明，调用 alert 和 confirm 时，给出了全部的参数。事实上，都是可选的。
            一般只需传入 inforType,tip,desc 即可。
        </p>
        <div>
            <label>信息弹层类型：</label>
            <select v-model="inforType">
                <option v-for="option in inforTypeOptions">{{option}}</option>
            </select>
        </div>
        <button class="primary" @click="onAlert">alert弹层</button>
        <button class="primary green" @click="onConfirm">confirm弹层</button>

        <h3>全局loading - 超过 200ms 才显示</h3>
        <button class="primary" @click="onLoading">全局loading</button>
        <p class="tip">
            出于测试，1s 后代码控制隐藏 loading
        </p>

        <h3>toast</h3>
        <div>
            <label>toast消息：</label>
            <input type="text" v-model="toastMsg" />
        </div>
        <button class="primary" @click="onToast">Toast提示</button>
    </div>
</template>

<script>
export default {
    name: 'ued-modal',
    data(){
        return {
            toastMsg: '',
            inforType: 'infor',
            inforTypeOptions: ['success','infor','fail','warning','ask']
        }
    },
    // mounted(){
    //     window.test = this.$loading
    // },
    methods: {
        /**
         * alert。这里列出了所有参数，这些都可选。
         * @return {[type]} [description]
         */
        onAlert(){
            this.$alert({
                inforType: this.inforType,
                tip: 'alert提示文案',
                desc: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
                ok: {
                    label: '确定',
                    handler(e){
                        console.log('alert - 点击了确定',e);
                    }
                },
                beforeOpen(e){
                    console.log('alert beforeOpen',e);
                },
                beforeClose(e){
                    console.log('alert beforeClose',e);
                }
            })
        },
        onConfirm(){
            this.$confirm({
                inforType: this.inforType,
                tip: 'confirm提示文案',
                desc: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
                ok: {
                    label: '确定',
                    handler(e){
                        console.log('confirm - 点击了确定');
                    }
                },
                cancel: {
                    label: '取消',
                    handler(e){
                        console.log('点击了取消',e);
                    }
                },
                beforeOpen(e){
                    console.log('confirm beforeOpen',e);
                },
                beforeClose(e){
                    console.log('confirm beforeClose',e);
                }
            })
        },
        onLoading(){
            this.$loading.show();
            setTimeout(() => {
                this.$loading.hide();
            },1000)
        },
        onToast(){
            this.$toast(this.toastMsg);
        }
    }
}
</script>
