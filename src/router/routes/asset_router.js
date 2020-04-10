// eslint-disable-next-line

export default [
    {
        path: 'usercenter',
        name: 'Usercenter',
        // component: BasicLayout,
        meta: { title: '个人中心' },
        component:()=>import('@/views/asset/index'),
        children: [
          // asset
          {
           
            path: 'asset/assetoverview',
            name: 'Assetoverview',
            component: () => import('@/views/asset/asset_overview'),
            meta: { title: '资产总览', keepAlive: false, permission: [ 'asset' ] }
          },
          // 外部链接
        //   {
        //     path: 'https://www.baidu.com/',
        //     name: 'Monitor',
        //     meta: { title: '监控页（外部）', target: '_blank' }
        //   },
          {
            path: 'asset/assetbills',
            name: 'Assetbills',
            component: () => import('@/views/asset/assets_bills'),
            meta: { title: '资产账单', keepAlive: true, permission: [ 'asset' ] }
          },
          {
            path: 'asset/available_assets',
            name: 'Availableassets',
            component: () => import('@/views/asset/available_assets'),
            meta: { title: '可用资产', keepAlive: true, permission: [ 'asset' ] }
          },
          {
            path: 'asset/digiccy',
            name: 'Digiccy',
            component: () => import('@/views/asset/digiccy'),
            meta: { title: '可用资产', keepAlive: true, permission: [ 'asset' ] }
          }
            
        ]
      },
    //   {
    //     path: '*', redirect: '/404', hidden: true
    //   }
]