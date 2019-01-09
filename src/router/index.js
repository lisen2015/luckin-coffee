import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/index/index'
import Order from '@/components/page/order/index'
import ShopMenu from '@/components/page/shopMenu/index'
import Shopping from '@/components/page/shopping/index'
import About from '@/components/page/about/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/shopMenu',
      name: 'ShopMenu',
      component: ShopMenu
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }, ,
    {
      path: '*',
      redirect: '/index'
    }
  ]
})

