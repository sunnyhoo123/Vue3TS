import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// import Home from '@/pages/vueUse.vue';
import VuePlay from '@/pages/vuePlay/index.vue';
import DynamicComponent from '@/pages/dynamicComponent/index.vue';
import MultiNested from '@/pages/multiLayerNestedComponents/index.vue';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/vuePlay',
    name: 'VuePlay',
    component: VuePlay,
  },
  {
    path: '/multiNested',
    name: 'MultiNested',
    component: MultiNested,
  },
  {
    path: '/dynamicComponent',
    name: 'DynamicComponent',
    component: DynamicComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
