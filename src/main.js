import { createApp } from 'vue'
import './styles/default.scss'
import App from './App.vue'
import router from './router/router';

const app = createApp(App);

// Configs
app.config.devtools = false
app.config.productionTip = false


app.use(router);
app.mount('#app');

