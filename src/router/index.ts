import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import PostsView from '@/views/PostsView.vue'
import PostDetailView from '@/views/PostDetailView.vue'
import ListsView from '@/views/ListsView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/posts',
    name: 'Posts',
    component: PostsView
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetailView
  },
  {
    path: '/lists',
    name: 'Lists',
    component: ListsView
  }
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes
})
export default router
