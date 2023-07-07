import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

const install = async() => {
    app.use(Antd)
    app.mount('#app')
}

install()
