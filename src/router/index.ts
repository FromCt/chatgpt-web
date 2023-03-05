import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { ChatLayout } from '@/views/chat/layout'
import Login from '@/views/login/index.vue'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   name: 'Root',
  //   component: ChatLayout,
  //   redirect: '/chat',
  //   children: [
  //     {
  //       path: '/chat/:uuid?',
  //       name: 'Chat',
  //       component: () => import('@/views/chat/index.vue'),
  //     },
  //   ],
  // },
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/chat',
    component: ChatLayout,
    children: [
      {
        path: '/:uuid?',
        name: 'Chat',
        component: () => import('@/views/chat/index.vue'),
        props:{ newsletterPopup: false}
      },
    ],
  },

  {
    path: '/403',
    name: '403',
    component: () => import('@/views/exception/403/index.vue'),
  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404/index.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404',
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
