import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/myevents',
    //   name: 'myevents',
    //   component: () => import('../views/MyEventsView.vue') // Agregado
    // },
    // {
    //   path: '/controlpanel',
    //   name: 'controlpanel',
    //   component: () => import('../views/ControlPanelView.vue') // Agregado
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('../views/LoginView.vue') // Agregado
    // },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: EventViewVue
    }
  ]
});

export default router;
