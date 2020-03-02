import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import About from '../views/About'

import concat from '../views/concat'
import partner from '../views/partner'
import address from '../views/address'

import Login from '../views/Login'
import Register from '../views/Register'

Vue.use(Router)

const routes =[
    {
      path: '/home',
      component:Home
    },
    {
      path: '/user',
      component:User
    },
    {
      path: '/about',
      component:About,
      redirect:"/concat",
      children:[
        {
          path: '/address',
          component:address
        },
        {
          path: '/concat',
          component:concat
        },
        {
          path: '/partner',
          component:partner
        }

      ]
    },
    {
      path: '/login',
      component:Login
    },
    {
      path: '/register',
      component:Register
    }
  ]

export default new Router({
  routes,
  mode:'history'
})
