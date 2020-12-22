import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Reference from '../views/Reference.vue'
import Script from '../views/Script.vue'
import Ani from '../views/Ani.vue'
import Site from '../views/Site.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/reference',
    name: 'Reference',
    component: Reference
  },
  {
    path: '/script',
    name: 'Script',
    component: Script
  },
  {
    path: '/ani',
    name: 'Ani',
    component: Ani
  },
  {
    path: '/site',
    name: 'Site',
    component: Site
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
