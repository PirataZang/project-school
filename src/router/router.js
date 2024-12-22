import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import History from '../components/History.vue';

// Importar as páginas

// Definir as rotas
const routes = [
    
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/history',
        name: 'History',
        component: History
    },

];

// Criar o router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
