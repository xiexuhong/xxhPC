// 算力市场路由文件
export default [
  {
    path: '/hashrateMarket', //算力市场
    name: 'hashrateMarket',
    component: () => import('@/views/hashrateMarket'),
  },
  {
    path: '/hashrateMarket/hashrateShop/contractDetail', //算力市场/算力商城/查看详情
    name: 'HcontractDetail',
    component: () => import('@/views/hashrateMarket/hashrateShop/contractDetail'),
    meta: {
      requireAuth: true, // 判断此路由是否需要登录
    },
  },
  {
    path: '/hashrateMarket/hashrateShop/orderDetail', //算力市场/算力商城/订单总览
    name: 'HorderDetail',
    component: () => import('@/views/hashrateMarket/hashrateShop/orderDetail'),
    meta: {
      requireAuth: true, // 判断此路由是否需要登录
    },
  },
  {
    path: '/hashrateMarket/valueAddService/contractDetail', //算力市场/增值服务/查看详情
    name: 'VcontractDetail',
    component: () => import('@/views/hashrateMarket/valueAddService/contractDetail'),
    meta: {
      requireAuth: true, // 判断此路由是否需要登录
    },
  },
  {
    path: '/hashrateMarket/valueAddService/orderDetail', //算力市场/增值服务/订单总览
    name: 'VorderDetail',
    component: () => import('@/views/hashrateMarket/valueAddService/orderDetail'),
    meta: {
      requireAuth: true, // 判断此路由是否需要登录
    },
  },
];
