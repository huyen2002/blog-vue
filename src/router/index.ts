import AboutComponent from '@/views/AboutComponent.vue';
import HomeComponent from '@/views/HomeComponent.vue';
import PostDetail from '@/views/PostDetail.vue';
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
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
