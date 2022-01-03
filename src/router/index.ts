import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () =>
      import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
  },
  {
    path: '/sign',
    name: 'sign',
    component: () =>
      import(/* webpackChunkName: "sign" */ '../views/sign/sign.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "404" */ '../views/404/404.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
