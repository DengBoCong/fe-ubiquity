import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Login from 'pages/login/Login'

//const Home = () => import('../views/')

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/login',
        component: Login,
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

router.beforeEach((to, from, next) => {
    // if(store.state.locale != 1) 
    //     next({ path: '/login' })
    next()
    
})

export default router;