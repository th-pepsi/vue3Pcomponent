//button可以单独使用，支持按需加载
import PModal from './index.vue'

PModal.install = (app)=>{
    app.component(PModal.name,PModal)
}

export default PModal