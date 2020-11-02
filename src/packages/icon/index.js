//button可以单独使用，支持按需加载
import PIcon from './index.vue'

PIcon.install = (app)=>{
    app.component(PIcon.name,PIcon)
}

export default PIcon