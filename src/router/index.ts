import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/pages/vueUse.vue';
import VuePlay from '@/pages/vuePlay/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vuePlay',
    name: 'VuePlay',
    component: VuePlay,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
