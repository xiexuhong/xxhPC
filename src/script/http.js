import axios from 'axios';
import qs from 'qs';
import { message } from 'ant-design-vue';
import store from '@/store';
import router from '@/router';

const http = axios.create({
  baseURL: process.env.VUE_APP_BASIC_URL,
  timeout: 5000,
  transformRequest: [data => qs.stringify(data)],
});
http.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      const data = config.data || {};
      data['token'] = store.state.user.token;
      data['app_version'] = '1.4.20';
      data['lang'] = store.state.lang;
      config.data = data;
    }
    if (config.method === 'get') {
      const data = config.params || {};
      data['token'] = store.state.user.token;
      data['app_version'] = '1.4.20';
      data['lang'] = store.state.lang;
      config.params = data;
    }
    return config;
  },
  error => Promise.reject(error),
);
http.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export const get = (url, data) =>
  new Promise(async (reslove, reject) => {
    const res = await http.get(url, data);
    if (typeof res === 'string') {
      reslove(res);
    } else if (res.datas.error || res.err_code) {
      if (res.err_code === 'need_login') {
        store.commit('removeUser');
        router.push('/login');
      }
      message.error(res.datas.error || res.err_code);
      reject(res.datas.error);
    } else {
      reslove(res);
    }
  });
export const post = (url, data) =>
  new Promise(async (reslove, reject) => {
    const res = await http.post(url, data);
    if (typeof res === 'string') {
      reslove(res);
    } else if (res.datas.error || res.err_code) {
      if (res.err_code === 'need_login') {
        store.commit('removeUser');
        router.push('/login');
      }
      message.error(res.datas.error || res.err_code);
      reject(res.datas.error);
    } else {
      reslove(res);
    }
  });
