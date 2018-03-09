import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/view/Home/home'
import List from '../components/view/List/list'

import Mine from '../components/view/my/My'

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

      path: '/list',
      name: 'list',
      component: List
    
    },
   
    {
    	path:'/mine',
    	name:'mine',
    	component:Mine
    },
    {
      path: '/cars',
      name: 'cars',
      component: Cars
    }


  ]
})
export default router