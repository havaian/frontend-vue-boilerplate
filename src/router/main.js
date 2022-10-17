// import map_route_default from './map_route';
// import map_route_redirect from './map_route';
// import profile_route_default from '.profile_route';
import { createRouter, createWebHistory } from 'vue-router';
import MaainComponent from '../components/main_component.vue';
import ProfileComponent from '../components/profile_component.vue';

const routes = [
    {
        path: '/',
        name: 'Maain',
        component: MaainComponent,
    },
    {
        path: '/main',
        redirect: '/',
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileComponent
    },
];

const router = createRouter({ 
    history: createWebHistory(),
    mode: 'history',
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
 });

export default router;