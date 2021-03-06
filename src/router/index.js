import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Culture from '@/components/Culture'
import Product from '@/components/Product'
import News from '@/components/News'
import Jz from '@/components/Jz'
import Join from '@/components/Join'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
      path: '/detail:id',
      name: 'detail',
      component: Detail,
    }, {
      path: '/',
      redirect: '/index'
    }
  ]
})
