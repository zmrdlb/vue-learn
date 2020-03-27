<template>
    <modal
        :name="name"
        width="100%"
        height="auto"
        classes=""
        @before-open="onBeforeOpen"
        @before-close="onBeforeClose">
        <div :class="['g-modal',classes]">
            <div class="title" v-if="hasTitle">
                <span class="text" v-if="params.title">{{params.title}}</span><a class="icon-material close" @click.prevent="onClose"></a>
            </div>
            <div class="body">
                <slot name="body" v-bind:params="params"></slot>
            </div>
            <div class="footer" v-if="hasFooter">
                <slot name="footer" v-bind:params="params"></slot>
            </div>
        </div>
    </modal>
</template>

<script>

export default {
    name: 'ui-modal',
    props: {
        name: {
            type: String,
            required: true
        },
        hasTitle: {
            type: Boolean,
            default: false
        },
        hasFooter: {
            type: Boolean,
            default: false
        },
        classes: {
            type: [String, Array],
            default: ''
        }
    },
    data(){
        return {
            params: {}
        }
    },
    methods: {
        // 关闭弹层。弹层也会被销毁
        close(){
            this.$modal.hide(this.name);
        },
        onClose(){
            this.close();
        },
        onBeforeOpen: function(e){
            this.params = e.params;
            this.$emit('before-open',e);
        },
        onBeforeClose: function(e){
            this.params = {};
            this.$emit('before-close',e);
        }
    }
}
</script>

<style lang="less">

    /**
     * 基本弹层
     */
    .g-modal {
        background-color: @color-white;
        border-radius: @border-radius;
        box-shadow: @box-shadow2;
        width: 90%;
        min-width: 0;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;

        & > .title {
            flex: none;
            .lib-px-to-rem(line-height,40);
            .lib-px-to-rem(padding,0,20);
            background: @color-gray14;

            .lib-clearfix();

            .close {
                float: right;
                color: @color-gray15;
                .lib-px-to-rem(margin-left,20);
                line-height: inherit;
                .lib-px-to-rem(margin-right,-16);
            }
        }

        & > .body {
            overflow-y: auto;
            .lib-px-to-rem(padding,20);
        }

        & > .footer {
            flex: none;
            .lib-px-to-rem(padding,4,20,24);
            .lib-clearfix();

            button {
                 float: right;
                 .lib-px-to-rem(margin-right,5);

                 &:last-child {
                     margin-right: 0;
                 }
             }
        }
    }

    .g-modal {
        .lib-responsive-pc({
            width: auto;
            min-width: 400px;
            max-width: 80%;
        })
    }

    /**
     * 信息弹层。用于 alert, confirm
     */
    .g-modal-infor {

        & > .body {
            @font-ruleset();
            .lib-clearfix();

            .left {
                float: left;
            }

            .right {
                .lib-px-to-rem(margin-left,60);
            }

            .type-icon {
                display: inline-block;
                vertical-align: middle;
                .lib-px-to-rem(width,45);
                .lib-px-to-rem(height,45);
                background: @color-white url("images/icons_message90*90@2x.png") no-repeat;
                background-size: 500% 100%;

                &.success {
                    background-position: 0 0;
                }

                &.infor {
                    .lib-px-to-rem(background-position,-45,0);
                }

                &.fail {
                    .lib-px-to-rem(background-position,-90,0);
                }

                &.warning {
                    .lib-px-to-rem(background-position,-135,0);
                }

                &.ask {
                    .lib-px-to-rem(background-position,-180,0);
                }
            }

            .tip-title {
                .head-three();
                .lib-px-to-rem(margin-bottom,2);
                .lib-px-to-rem(margin-top,-4);
            }

            .tip-content {
                .tip();
                .lib-break-line-all-word();
            }
        }
    }

    .g-modal-infor {
        .lib-responsive-pc({
            width: 400px;
        })
    }
</style>
