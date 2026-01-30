import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import config from '@/config';
import { postRequest, putRequest, getRequest } from '@/api';
import animated from 'animate.css';
import VueTilt from 'vue-tilt.js';
import './index.less';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(animated);
Vue.use(VueTilt);
Vue.use(Antd);
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config;
/**
 * @description 全局注册请求方式
 */
Vue.prototype.$postRequest = postRequest;
Vue.prototype.$putRequest = putRequest;
Vue.prototype.$getRequest = getRequest;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
