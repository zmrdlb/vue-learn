import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ModalPlugin from "./ui-comp/modal/plugin";

Vue.config.productionTip = false

Vue.use(ModalPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
