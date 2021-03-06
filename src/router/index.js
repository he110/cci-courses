import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import('../views/About.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import(/* webpackChunkName: "about" */ '../views/Courses.vue')
  },
    {
      path: '/courses/:id',
      name: 'Course',
      props: true,
      component: () => import(/* webpackChunkName: "about" */ '../components/Course.vue')
    },
  {
    path: '/teaching',
    name: 'Teaching',
    component: () => import(/* webpackChunkName: "about" */ '../views/Teaching.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach(() => {
  window.scroll(0,0);
})

export default router
