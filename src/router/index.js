import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const childrenRoute = [];
const files = require.context('./routes', false, /\.js$/);
files.keys().forEach(key => {
  childrenRoute.push(...files(key).default);
});

const routes = [
  {
    path: '/',
    component: () => import('@/views/root'),
    // meta: {
    //   requireAuth: true, // 判断此路由是否需要登录
    // },
    children: childrenRoute,
  },
  {
    path: '/contract',
    component: () => import('@/components/contract'),
    meta: {
      requireAuth: true, // 判断此路由是否需要登录
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (Vue.ls.get('user')?.token) {
      //判断是否已经登录
      next();
    } else {
      next({
        path: '/login/login',
        query: { redirect: to.fullPath }, //登录成功后重定向到当前页面
      });
    }
  } else {
    next();
  }
});

export default router;
