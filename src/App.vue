<template>
  <div id="app" class="app">
      <router-view></router-view>
      <ui-modal-index></ui-modal-index>
  </div>
</template>

<script>
    import _ from "lodash";
    import UiModalIndex from "@ui-comp/modal/index.vue";

    export default {
        name: 'app',
        components: {
            UiModalIndex
        },
        mounted(){
            this.responsive();
        },
        methods: {
            responsive(){
                let resizeEvtName = 'onorientationchange' in window? 'orientationchange': 'resize',
                    baseFontSize = 16,
                    baseViewWidth = 375,
                    minViewWidth = 320,
                    maxViewWidth = 768;

                function setHTMLFontSize(){
                    let viewWidth = window.innerWidth;
                    // >= 768px 则认为是 px 端，采用 375px 下的尺寸。
                    viewWidth = viewWidth > maxViewWidth? baseViewWidth: Math.max(minViewWidth,viewWidth);
                    let rootFontSize = Math.floor((viewWidth / baseViewWidth) * baseFontSize);

                    document.documentElement.style.fontSize = rootFontSize + 'px';
                }

                window.addEventListener(resizeEvtName, _.debounce(setHTMLFontSize,300))

                setHTMLFontSize();
            }
        }
    }
</script>

<style lang="less">
@import "./theme/index.less";

.app {
    padding-left: 10px;
    padding-right: 10px;
}
</style>
