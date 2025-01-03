import { createApp } from 'vue'
import './styles/default.scss'
import App from './App.vue'
import router from './router/router'
import * as api from './api'

const app = createApp(App);

// Configs
app.config.devtools = false
app.config.productionTip = false
app.config.globalProperties.$api = api;

app.use(router);
app.mount('#app');

