import '@/assets/index.scss'
import '@/utils/prototypes.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import DisableDevtool from 'disable-devtool'

DisableDevtool()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')