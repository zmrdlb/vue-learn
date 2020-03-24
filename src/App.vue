<template>
  <div id="app" class="app">
      <router-view></router-view>
      <ui-modal-index></ui-modal-index>
  </div>
</template>

<script>
    import debounce from "lodash/debounce";
    import UiModalIndex from "@/ui-comp/modal/index.vue";

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
                    baseFontSize = 20,
                    baseViewWidth = 375,
                    maxViewWidth = 768;

                function setHTMLFontSize(){
                    let width = baseFontSize,
                        viewWidth = window.innerWidth;

                    if(viewWidth > baseViewWidth && viewWidth < maxViewWidth){
                        width = Math.floor((viewWidth / baseViewWidth) * baseFontSize);
                    }

                    document.documentElement.style.fontSize = width + 'px';
                }

                window.addEventListener(resizeEvtName, debounce(setHTMLFontSize,300))
            }
        }
    }
</script>

<style lang="less">
@import "./theme/index.less";

.app {
    .lib-px-to-rem(padding-left,10);
    .lib-px-to-rem(padding-right,10);
}
</style>
