import axios from 'axios';
import qs from 'qs';

const http = axios.create({
  baseURL: '',
  timeout: 5000,
  transformRequest: [data => qs.stringify(data)],
});
http.interceptors.request.use(
  config => {
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
export const post = (url, data) => http.post(url, data);
