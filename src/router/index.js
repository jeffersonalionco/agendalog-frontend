import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true, role: 'admin'}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { requiresAuth: true, role: 'admin'}
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Aqui onde trabalho com a segurança das rotas---
router.beforeEach((to, from, next) =>{ 
  


  const isLogged = localStorage.getItem("user") !== null;

  if(to.meta.requiresAuth && !isLogged){
    return next('/login')
  }

  if(to.path === '/login' && isLogged){
    return next('/')
  }


  //if(to.meta.role && user?.role !== to.meta.role){
  //  return next('/login')
 // }

  
  next()
})



export default router
