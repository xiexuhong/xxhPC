const childrenRoute = [];
const files = require.context('./childrenRoutes', false, /\.js$/);
files.keys().forEach(key => {
  childrenRoute.push(...files(key).default);
});

export default [
    {
        path: '/asset',
        name: 'Asset',
        redirect: '/asset/assetoverview',
        component:()=>import('@/views/asset/index'),
        children:childrenRoute
    }
]
