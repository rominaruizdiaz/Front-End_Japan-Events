
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EventView from '@/EventView.vue'
import LoginView from '@/views/LoginView.vue'
import MyEventsViewVue from '@/views/MyEventsView.vue';
import DetailsView from '@/views/DetailsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my-events',
      name: 'my-events',
      component: MyEventsViewVue
    },
    // {
    //   path: '/controlpanel',
    //   name: 'controlpanel',
    //   component: () => import('../views/ControlPanelView.vue') // Agregado
    // },
    // {
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/events',
      name: 'events',
      component: EventView
    },
    {
      path: '/details/:id_event',
      name: 'detailsPage',
      component: DetailsView,
      props: true
    }
  ]

});

export default router;
