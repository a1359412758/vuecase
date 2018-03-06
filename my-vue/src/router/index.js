import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/view/Home/home'
import My from '../components/view/my/My'
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
    	path:'/my',
    	name:'my',
    	component:My
    }
  ]
})
export default router