module.exports = {
  transpileDependencies: ['vue-echarts', 'resize-detector'],
  devServer: {
    proxy: {
      '/index.php': {
        target: 'http://api2.test.rrmine.superqr.cn',
      },
      '/member': {
        target: 'http://iappfront.t1.anmaicloud.com',
      },
    },
  },
};
