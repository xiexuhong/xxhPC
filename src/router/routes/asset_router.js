// eslint-disable-next-line

export default [
  //我的资产
  {
    path: '/asset',
    name: 'Asset',
    component: () => import('@/views/asset/index'),
    children: [
      // asset
      {
        path: 'assetoverview',
        name: 'Assetoverview',
        component: () => import('@/views/asset/asset_overview'),
      },
      {
        path: 'assetbills',
        name: 'Assetbills',
        component: () => import('@/views/asset/assets_bills'),
      },
      {
        path: 'available_assets',
        name: 'Availableassets',
        component: () => import('@/views/asset/available_assets'),
      },
      {
        path: 'digiccy',
        name: 'Digiccy',
        component: () => import('@/views/asset/digiccy'),
      },
    ],
  },
  //   {
  //     path: '*', redirect: '/404', hidden: true
  //   }
];
