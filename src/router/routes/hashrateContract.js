export default [
  {
    name: 'hashrateContract', //算力合约
    path: '/hashrateContract',
    component: () => import('@/views/hashrateContract'),
    children: [
      {
        name: 'contractList', //算力合约/合约列表
        path: 'contractList',
        component: () => import('@/views/hashrateContract/contractList'),
      },
      {
        name: 'orderFade', //算力合约/合约列表/退单
        path: 'contractList/orderFade',
        component: () => import('@/views/hashrateContract/contractList/orderFade'),
      },
      {
        name: 'orderReorder', //算力合约/合约列表/续单
        path: 'contractList/orderReorder',
        component: () => import('@/views/hashrateContract/contractList/orderReorder'),
      },
      {
        name: 'moreServiceDetail', //算力合约/合约列表/增值服务（查看详情）
        path: 'contractList/moreServiceDetail',
        component: () => import('@/views/hashrateContract/contractList/moreServiceDetail'),
      },
      {
        name: 'hashrateTransfer', //算力合约/算力转让
        path: 'hashrateTransfer',
        component: () => import('@/views/hashrateContract/hashrateTransfer'),
      },
      {
        name: 'hashrateIncome', //算力合约/算力收益
        path: 'hashrateIncome',
        component: () => import('@/views/hashrateContract/hashrateIncome'),
      },
    ],
  },
];
