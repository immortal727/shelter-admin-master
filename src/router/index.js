import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/add/animal',
      name: 'NewAnimal',
      component: () => import(/* webpackChunkName: "about" */ '../views/NewAnimal.vue')
    },
    {
      path: '/animals',
      name: 'Animals',
      component: () => import(/* webpackChunkName: "about" */ '../views/Animals.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
