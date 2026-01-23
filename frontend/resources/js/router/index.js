import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Servicos from '../pages/Servicos.vue';
import Sobre from '../pages/Sobre.vue';
import Login from '../pages/Login.vue';
import Contato from '../pages/Contato.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/servicos',
        name: 'servicos',
        component: Servicos
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: Sobre
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/contato',
        name: 'contato',
        component: Contato
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;

