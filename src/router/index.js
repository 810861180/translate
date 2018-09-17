import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'from',
      component: resolve => require(['@/components/TranslateFrom'], resolve)
    }
  ]
})
