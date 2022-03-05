import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/HomeLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/login',
          component: () => import('@/views/Login.vue')
        },
        {
          path: '/register',
          component: () => import('@/views/Register.vue')
        },
        {
          path: '/forgot-password',
          component: () => import('@/views/ForgotPassword.vue')
        },
        {
          path: '/verify',
          component: () => import('@/views/Verify.vue')
        }
      ]
    },
    {
      path: '/all-errands',
      component: () => import('@/layouts/DashboardLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Dashboard/AllErrands.vue')
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/views/404.vue')
    }
  ]
})