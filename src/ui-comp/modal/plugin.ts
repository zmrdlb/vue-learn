import Vue from 'vue'
import VModal from 'vue-js-modal'

Vue.use(VModal, {dynamic: true, injectModalsContainer: true});

const ModalPlugin = {
    install(Vue: any){
    }
}

export default ModalPlugin;
