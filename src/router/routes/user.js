export default [
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/login'),
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import('@/views/login/login'),
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import('@/views/login/register'),
      },
      {
        path: '/user/forgetOne',
        name: 'forgetOne',
        component: () => import('@/views/login/forget_pass_one'),
      },
      {
        path: '/user/forgetTwo',
        name: 'forgetTwo',
        component: () => import('@/views/login/forget_pass_two'),
      },
      {
        path: '/user/forgetThree',
        name: 'forgetThree',
        component: () => import('@/views/login/forget_pass_three'),
      },
      {
        path: '/country',
        name: 'country',
        component: () => import('@/views/login/country'),
      },
    ],
  },
];
