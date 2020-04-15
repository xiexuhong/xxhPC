// eslint-disable-next-line

export default [ //我的资产
    {
        path: '/asset',
        name: 'Asset',
        component:()=>import('@/views/asset/index'),
        children: [
          {// 资产总览
            path: 'assetoverview',
            name: 'Assetoverview',
            component: () => import('@/views/asset/asset_overview'),
          },
          {// 资产账单
            path: 'assetbills',
            name: 'Assetbills',
            component: () => import('@/views/asset/assets_bills'),
          },
          {// 可用资产
            path: 'available_assets',
            name: 'Availableassets',
            component: () => import('@/views/asset/available_assets'),
          },
          {// 数字货币
            path: 'digiccy',
            name: 'Digiccy',
            component: () => import('@/views/asset/digiccy'),
          },
          {// 充值
            path: 'recharge',
            name: 'Recharge',
            component: () => import('@/views/asset/recharge'),
          },
          {// 对公转账
            path: 'publictransfer',
            name: 'Publictransfer',
            component: () => import('@/views/asset/publictransfer'),
          },
          {// 充值
            path: 'withdraw',
            name: 'Withdraw',
            component: () => import('@/views/asset/withdraw'),
          },
          {//提币
            path: 'extractcoin',
            name: 'Extractcoin',
            component: () => import('@/views/asset/extractcoin'),
          },
          {//提币地址管理
            path: 'extractcoin/extractcoinaddress',
            name: 'Extractcoinaddress',
            component: () => import('@/views/asset/extractcoinaddress'),
          }
        ]
      },
    //   {
    //     path: '*', redirect: '/404', hidden: true
    //   }
]