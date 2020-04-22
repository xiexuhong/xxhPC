export default [
  {
    path: '/login',
    component: () => import('@/views/login'),
    children: [
      {
        path: '/login/login',
        name: 'login',
        component: () => import('@/views/login/login'),
      },
      {
        path: '/login/register',
        name: 'register',
        component: () => import('@/views/login/register'),
      },
      {
        path: '/login/forgetOne',
        name: 'forgetOne',
        component: () => import('@/views/login/forget_pass_one'),
      },
      {
        path: '/login/forgetTwo',
        name: 'forgetTwo',
        component: () => import('@/views/login/forget_pass_two'),
      },
      {
        path: '/login/forgetThree',
        name: 'forgetThree',
        component: () => import('@/views/login/forget_pass_three'),
      },
    ],
  },
  {
    path: '/country',
    name: 'country',
    component: () => import('@/views/login/country'),
  },
];
