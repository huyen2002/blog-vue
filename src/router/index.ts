import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import DetailLayout from '@/layouts/DetailLayout.vue'
import { Paths } from '@/router/Paths'
import HomeView from '@/views/HomeView.vue'
import PostsView from '@/views/PostsView.vue'
import PostView from '@/views/PostView.vue'
import ListsView from '@/views/ListsView.vue'
import ListView from '@/views/ListView.vue'
import WriteView from '@/views/WriteView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: Paths.HOME,
    component: HomeView
  },
  {
    path: Paths.POSTS,
    component: PostsView
  },
  {
    path: Paths.DETAIL,
    component: DetailLayout,
    children: [
      {
        path: Paths.POST(),
        component: PostView
      },
      {
        path: Paths.LISTS,
        component: ListsView
      },
      {
        path: Paths.LIST(),
        component: ListView
      },
      {
        path: Paths.WRITE,
        component: WriteView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})
export default router
