import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'element-plus/es/components/message/style/css'
import '@/assets/style/base.less'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

