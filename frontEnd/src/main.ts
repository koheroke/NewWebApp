import { createApp } from 'vue'
import './publicCss/style.css'
import './publicCss/layout.css'
import './publicCss/anm.css'
import './publicCss/AtomsUI.css'
import App from './App.vue'
import router from './components/Routers/router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia) 
app.use(router)
app.mount('#app')