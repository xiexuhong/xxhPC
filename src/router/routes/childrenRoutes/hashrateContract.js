export default [
  //  asset 入口已做登录权限判定，这里子路由可不再添加登录权限判定
  {
    name: 'hashrateContract', //算力合约
    path: '/hashrateContract',
    redirect: '/hashrateContract/contractList',
  },
  {
    name: 'contractList', //算力合约/合约列表
    path: '/hashrateContract/contractList',
    component: () => import('@/views/hashrateContract/contractList'),
  },
  {
    name: 'orderFade', //算力合约/合约列表/退单
    path: '/hashrateContract/contractList/orderFade',
    component: () => import('@/views/hashrateContract/contractList/orderFade'),
  },
  {
    name: 'orderReorder', //算力合约/合约列表/续单
    path: '/hashrateContract/contractList/orderReorder',
    component: () => import('@/views/hashrateContract/contractList/orderReorder'),
  },
  {
    name: 'moreServiceDetail', //算力合约/合约列表/增值服务（查看详情）
    path: '/hashrateContract/contractList/moreServiceDetail',
    component: () => import('@/views/hashrateContract/contractList/moreServiceDetail'),
  },
  {
    name: 'hashrateTransfer', //算力合约/算力转让
    path: '/hashrateContract/hashrateTransfer',
    component: () => import('@/views/hashrateContract/hashrateTransfer'),
  },
  {
    name: 'hashrateIncome', //算力合约/算力收益
    path: '/hashrateContract/hashrateIncome',
    component: () => import('@/views/hashrateContract/hashrateIncome'),
  },
];
