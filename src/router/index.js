
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EventViewVue from '@/EventView.vue';

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventView from '@/EventView.vue'
import LoginView from '@/views/LoginView.vue'

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
      
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/events',
      name: 'events',
      component: EventView
    }
  ]
});

export default router;
