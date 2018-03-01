import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/view/Home/home'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'',component:Home},
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
