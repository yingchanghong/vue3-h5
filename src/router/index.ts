import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页',
    },
    component: () =>
      import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
  },
  {
    path: '/sign',
    meta: {
      title: '签字页',
    },
    name: 'sign',
    component: () =>
      import(/* webpackChunkName: "sign" */ '../views/sign/sign.vue'),
  },
  {
    path: '/signs',
    meta: {
      title: '签字页2',
    },
    name: 'signs',
    component: () =>
      import(/* webpackChunkName: "sign" */ '../views/signs/index.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    meta: {
      title: {
        title: '页面不存在',
      },
    },
    component: () =>
      import(/* webpackChunkName: "404" */ '../views/404/404.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
