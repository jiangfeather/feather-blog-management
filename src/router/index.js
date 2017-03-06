import Vue from 'vue'
import Router from 'vue-router'

import login from 'components/login/login'
import admin from 'components/admin/admin'
import write from 'components/write/write'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      children: [
        {
          path: 'write',
          component: write
        },
        {
          path: 'article',
          component: login
        },
        {
          path: 'setting',
          component: login
        }
      ]
    }
  ]
})