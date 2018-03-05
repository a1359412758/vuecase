import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/view/Home/home'

Vue.use(Router)

var router = new Router({
  routes: [
     {path:'',component:Home},
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})
export default router