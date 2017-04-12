import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Culture from '@/components/Culture'
import Product from '@/components/Product'
import News from '@/components/News'
import Jz from '@/components/Jz'
import Join from '@/components/Join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    }, {
      path: '/culture',
      name: 'Culture',
      component: Culture
    }, {
      path: '/product',
      name: 'Product',
      component: Product
    }, {
      path: '/news',
      name: 'News',
      component: News
    }, {
      path: '/jz',
      name: 'Jz',
      component: Jz
    }, {
      path: '/join',
      name: 'Join',
      component: Join
    }, {
      path: '/',
      redirect: '/index'
    }
  ]
})
