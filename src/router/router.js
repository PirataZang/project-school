import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';

// Importar as páginas

// Definir as rotas
const routes = [
    
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },

];

// Criar o router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
