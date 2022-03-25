import { createApp } from 'vue'
import App from './App.vue'
import Peui from './packages'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './style/iconfont/iconfont.css'

createApp(App).use(Peui).use(Antd).mount('#app')
