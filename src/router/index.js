import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/start'
  },
  {
    path: '/start',
    name: 'Start',
    component: () => import('@/pages/Start/')
  },
  {
    path: '/builder',
    name: 'Builder',
    component: () => import('@/pages/Builder/')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About/')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/Error404/')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
