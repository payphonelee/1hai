import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from 'pages/index/Index'
import Business from 'pages/business/Business'
import Luxury from 'pages/business/luxury/Luxury'


const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Index,
    },
    {
      path:'/business',
      component:Business,
      children:[
        {
          path:'Luxury',
          name:'Luxury',
          component:Luxury
        }
      ]
    }
  ]
})

export default router
