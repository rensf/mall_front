import Vue from 'vue';
import axios from 'axios';
import store from '@/store';
import router from '@/router';
import config from '@/config';
const { loginName } = config;

const service = axios.create({
  baseURL: '',
  timeout: 0,
});

service.interceptors.request.use((config) => {
  if (store.state.user.token) {
    config.headers.Authorization = store.state.user.token;
  } else {
    config.headers.Authorization = 'Basic bWFsbC13ZWI6MTIzNDU2'; // base64明文：mall-web:123456
  }
  return config;
});

service.interceptors.response.use(
  (response) => {
    console.log('返回', response);
    let code = response.data.code;
    if (code === null) {
    } else if (code === '0') {
      return response;
    } else {
      const vm = new Vue();
      let msg = response.msg;
      vm.$message.error(`${msg}`, 2);
    }
  },
  (error) => {
    const res = (error.response || {}).data || {};
    if (res && res.code && res.code === '10002') {
      const vm = new Vue();
      let msg = res.msg;
      vm.$message.error(`${msg}`, 2);
      store.commit('removeToken');
      router.push({
        name: loginName,
      });
    }
  }
);

export default service;
