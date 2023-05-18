import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import PostDetail from "../views/PostDetail.vue";


const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/post/:id', name: 'PostDetail',
        component: PostDetail
    }
]

 const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
