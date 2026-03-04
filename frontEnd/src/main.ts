import { createApp } from 'vue'
import './publicCss/style.css'
import './publicCss/layout.css'
import './publicCss/anm.css'
import './publicCss/AtomsUI.css'
import App from './App.vue'
import router from './components/Routers/router'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css' 
import vue3GoogleLogin from 'vue3-google-login'
const app = createApp(App)
const pinia = createPinia()
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
})
app.use(pinia) 
app.use(router)
app.mount('#app')

