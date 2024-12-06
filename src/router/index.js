import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import Loading from '../components/loading'


const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/Loading',
    name: 'Loading',
    component: Loading
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
