import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { Paths } from '@/router/Paths'
import HomeView from '@/views/HomeView.vue'
import ListsView from '@/views/ListsView.vue'
import ListView from '@/views/ListView.vue'
import PostsView from '@/views/PostsView.vue'
import PostView from '@/views/PostView.vue'

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
    component: DefaultLayout,
    children: [
      {
        path: Paths.POST,
        component: PostView
      },
      {
        path: Paths.LISTS,
        component: ListsView
      },
      {
        path: Paths.LIST,
        component: ListView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes
})
export default router
