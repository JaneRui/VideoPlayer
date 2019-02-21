import Vue from 'vue'
import Router from 'vue-router'
import NewEntryList from '@/components/NewEntryList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewEntryList',
      component: NewEntryList
    }
  ]
})
