import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import App from './App.vue'
import router from './router'
import EmptyLayout from '@/components/Layout/EmptyLayout.vue'
import AuthLayout from '@/components/Layout/AuthenticatedLayout.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.component("empty-layout", EmptyLayout)
app.component("auth-layout", AuthLayout)

app.mount('#app')
