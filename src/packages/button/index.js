//button可以单独使用，支持按需加载
import PButton from './index.vue'

PButton.install = (app)=>{
    app.component(PButton.name,PButton)
}

export default PButton