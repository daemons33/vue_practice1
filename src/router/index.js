import { createRouter, createWebHistory } from 'vue-router'
/* import HomeView from '../views/HomeView.vue' */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView
    },*/
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/Contador.vue')
    } ,
    {
      path: '/lista-de-tareas',
      name: 'lista_de_tareas',
      component: () => import('../modules/LlistaDeTareas/ListaDeTareas.vue')
    }
  ]
})

export default router
