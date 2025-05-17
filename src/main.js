import { createApp } from 'vue'
import './styles/default.scss'
import App from './App.vue'
import router from './router/router'
import * as api from './api'
import Modal from './components/Modal.vue'

const app = createApp(App);

// Componentes Globais
app.component(Modal, Modal)


// Configs
app.config.devtools = false
app.config.productionTip = false
app.config.globalProperties.$api = api;

app.use(router);
app.mount('#app');

