import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/_variables.scss'
import './assets/styles/_fonts.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
