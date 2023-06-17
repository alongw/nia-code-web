import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/pages/Home/Home.vue'),
      redirect: '/home/default',
      children: [
        {
          path: '/home/:mode',
          name: 'showEncode',
          component: () => import('@/pages/Encode/ShowEncode.vue')
        }
      ]
    }
  ]
})

export default router

