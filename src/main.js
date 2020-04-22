import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './locales';
import Antd from 'ant-design-vue';
import Storage from 'vue-ls';
import Clipboard from 'clipboard';
import VCharts from 'v-charts';
import VueResource from 'vue-resource';


import { setup } from '@/locales';

import './assets/css/global.css';
import './assets/css/antReset.scss';
import 'ant-design-vue/dist/antd.css';

const options = {
  namespace: 'rr__', // key键前缀
  name: 'ls', // 命名Vue变量.[ls]或this.[$ls],
  storage: 'local', // 存储名称: session, local, memory
};

Vue.use(Storage, options);
Vue.use(Antd);
Vue.use(VCharts);
Vue.use(VueResource);

setup();

Vue.config.productionTip = false;
Vue.prototype.clipboard = Clipboard;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
