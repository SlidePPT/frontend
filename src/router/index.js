import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/create.vue'
import Create2 from '../views/create2.vue'
import Main from '../views/main.vue'
import Template from "../component/Template/one/Template1.vue"
import Mainview from "../views/mainview.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: "create",
    component: Create
  },
  {
    path: '/create2',
    name: "create2",
    component: Create2
  },
  {
    path: '/main',
    name: "main",
    component: Main
  },
  ,
  {
    path: '/template',
    name: "template",
    component: Template
  }, {
    path: '/mainview',
    name: "mainview",
    component: Mainview
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
