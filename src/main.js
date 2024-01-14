import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from '@/config'
import { postRequest, putRequest, getRequest } from '@/api'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import animated from 'animate.css'
import VueTilt from 'vue-tilt.js'
import './index.less'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(animated)
Vue.use(VueTilt)
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * @description 全局注册请求方式
 */
Vue.prototype.$postRequest = postRequest
Vue.prototype.$putRequest = putRequest
Vue.prototype.$getRequest = getRequest

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
