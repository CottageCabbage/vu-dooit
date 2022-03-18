import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { createPinia } from 'pinia'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .use(store).use(createPinia())
  .use(router)
  .use(ElementPlus)
  .mount('#app')
