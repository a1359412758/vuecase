import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/view/Home/home'
import List from '../components/view/List/list'

Vue.use(Router)

var router = new Router({
  routes: [
     {path:'',component:Home},
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
export default router