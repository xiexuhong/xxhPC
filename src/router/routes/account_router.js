// eslint-disable-next-line

export default [
  //我的账户
  {
    path: '/account',
    name: 'Asset',
    component: () => import('@/views/asset/index'),
    children: [
      // account
      {
        path: 'security',
        name: 'security',
        component: () => import('@/views/account/accountSecurity/security'),
      },
      {
        // 实名认证
        path: 'verify',
        name: 'verify',
        component: () => import('@/views/account/accountSecurity/verify'),
      },
      {
        path: 'wait_verify',
        name: 'waitVerify',
        component: () => import('@/views/account/accountSecurity/wait_verify'),
      },
      {
        path: 'verified',
        name: 'verified',
        component: () => import('@/views/account/accountSecurity/verified'),
      },
      {
        // 关联BHPay
        path: 'rela_bhpay',
        name: 'relaBhpay',
        component: () => import('@/views/account/accountSecurity/rela_bhpay'),
      },
      {
        // 忘记交易密码
        path: 'forget_trade_pwd',
        name: 'forgetTradePwd',
        component: () => import('@/views/account/accountSecurity/forget_trade_pwd'),
      },
      {
        // 关联BHPay成功
        path: 'associated_bhpay',
        name: 'associatedBhpay',
        component: () => import('@/views/account/accountSecurity/associated_bhpay'),
      },
      {
        // 银行卡管理
        path: 'bank_card',
        name: 'bankCard',
        component: () => import('@/views/account/bankCard/bank_card'),
      },
      {
        // 添加银行卡
        path: 'add_bank_card',
        name: 'addBankCard',
        component: () => import('@/views/account/bankCard/add_bank_card'),
      },
      {
        // 提币地址管理
        path: 'get_coin_addr',
        name: 'getCoinAddr',
        component: () => import('@/views/account/getCoinAddr/get_coin_addr'),
      },
      {
        // 算龄
        path: 'power_age',
        name: 'powerAge',
        component: () => import('@/views/account/power_age'),
      },
      {
        // 邀请
        path: 'invite',
        name: 'invite',
        component: () => import('@/views/account/invite'),
      },
    ],
  },
];
