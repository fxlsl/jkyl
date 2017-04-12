// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import resource from 'vue-resource'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 单一事件管理
let Event = new Vue();
Vue.use(resource)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  methods:{

  }
})
