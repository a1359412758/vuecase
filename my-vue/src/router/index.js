import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/view/Home/home'
import Cars from '../components/view/Cars/car'
Vue.use(Router)

var router = new Router({
  routes: [
     {path:'/',component:Home},
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cars',
      name: 'cars',
      component: Cars
    },
  ]
})
export default router