import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue'
import DestinosView from '../views/DestinosView.vue'
import ContactoView from '../views/ContactoView.vue'
import Error404 from '../views/Error404.vue'
import InicioView from '../views/InicioView.vue'



const routes = [
  {
    path: '/',     // Define la ruta /contact/ Raiz
    name: 'InicioRaiz',
    component: InicioView  // Asocia la ruta con el componente Contact
  },
  {
    path: '/Inicio',     // Añade esta línea
    name: 'Inicio',
    component: InicioView
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    props: (route) => ({ post: route.params.post })
  },
  {
    path: '/destinos',
    name: 'Destinos',
    component: DestinosView
  },
  {
    path: '/contacto',     // Define la ruta /contact
    name: 'Contacto',
    component: ContactoView   // Asocia la ruta con el componente Contact
  },
  {
    path: '/error',     // Define la ruta /contact
    name: 'Error',
    component: Error404   // Asocia la ruta con el componente Contact
  },
  { path: '/:pathMatch(.*)*', component: Error404 }, // Ruta para manejar el error 404

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
