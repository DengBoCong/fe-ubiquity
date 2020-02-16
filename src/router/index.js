import Vue from 'vue';
import VueRouter from 'vue-router';

//const Home = () => import('../views/')

Vue.use(VueRouter);

const routers = [
    // {
    //     path: '',
    //     redirect: '/home'
    // },
    // {
    //     path: '/cart',
    //     component: Home,
    // },
];

const router = new VueRouter({
    routers,
    mode: 'history',
});

export default router;