import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/create.vue'
import Main from '../views/main.vue'
import Template from "../component/Template/one/Template5.vue"
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
    path: '/main',
    name: "main",
    component: Main
  },
  {
    path: '/template',
    name : "template",
    component: Template
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
