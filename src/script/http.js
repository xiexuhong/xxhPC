import axios from 'axios';
import qs from 'qs';
import { message } from 'ant-design-vue';
import store from '@/store';
import router from '@/router';

const http = axios.create({
  baseURL: 'http://api2.test.rrmine.superqr.cn',
  timeout: 5000,
  transformRequest: [data => qs.stringify(data)],
});
http.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      const data = config.data || {};
      data['token'] = store.state.user.token;
      config.data = data;
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

export const get = (url, data) => http.get(url, { params: data });
export const post = (url, data) =>
  new Promise(async (reslove, reject) => {
    const res = await http.post(url, data);
    if (res.datas.error) {
      if (res.err_code === 'need_login') {
        store.commit('removeUser');
        router.push('/login');
      }
      message.error(res.datas.error);
      reject(res.datas.error);
    } else {
      reslove(res);
    }
  });
