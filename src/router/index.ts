import AboutComponent from '@/views/AboutComponent.vue';
import PostDetail from '@/views/PostDetail.vue';
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import HomeComponent from "@/views/HomeComponent.vue";
import PostsComponent from "@/views/PostsComponent.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path:'/posts',
    name:'Posts',
    component: PostsComponent
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail
  }
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes
})
export default router
