import { createApp } from 'vue'
import './lib/dux.scss'
import './index.scss'
import App from './App.vue'
import router from "./router";
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'

const app = createApp(App)

app.use(router)
app.component('Markdown',Markdown)
app.mount('#app')
