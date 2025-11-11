import { createApp } from 'vue'
import App from './App.vue'
import router from './router'       // ok se ./router aponta para src/router/index.js
import './assets/style.css'         // <<< caminho CORRETO para o CSS (note o ./assets)

const app = createApp(App)
app.use(router)
app.mount('#app')
