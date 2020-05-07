export default [
  {
    name: 'messageCenter',
    path: '/messageCenter',
    meta: {
      requireAuth: true, // 判断此路由是否需要登录
    },
    component: () => import('@/views/messageCenter'),
  },
  {
    name: 'messageDetail',
    path: '/messageDetail',
    meta: {
      requireAuth: true, // 判断此路由是否需要登录
    },
    component: () => import('@/views/messageCenter/messageDetail'),
  },
];
