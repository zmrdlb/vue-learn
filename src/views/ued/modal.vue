<template>
    <div>
        <h3>信息弹层</h3>
        <div>
            <label>信息弹层类型：</label>
            <select v-model="inforType">
                <option v-for="option in inforTypeOptions">{{option}}</option>
            </select>
        </div>
        <button class="primary" @click="onAlert">alert弹层</button>
    </div>
</template>

<script>
export default {
    name: 'ued-modal',
    data(){
        return {
            inforType: 'infor',
            inforTypeOptions: ['success','infor','fail','warning','ask']
        }
    },
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
                        console.log('alert - 点击了确定');
                    }
                },
                beforeOpen(e){
                    console.log('alert beforeOpen',e);
                },
                beforeClose(e){
                    console.log('alert beforeClose',e);
                }
            })
        }
    }
}
</script>
