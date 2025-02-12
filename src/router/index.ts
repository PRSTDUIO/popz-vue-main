import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../Layout.vue'),
      children: [
        {
          name: "Main",
          path: "/",
          component: () => import('../views/Main.vue'),
        },
        {
          name: "Article",
          path: "/Article/:Id",
          component: () => import('../views/Article.vue'),
          props: true,

        }
      ]
    },

  ]
})

export default router
