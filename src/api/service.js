import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import {
  ToastPlugin
} from 'bootstrap-vue'

const service = axios.create({
  baseURL: '',
  timeout: 0,
})

service.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.Authorization = store.state.token
  } else {
    config.headers.Authorization = "Basic bWFsbC13ZWI6MTIzNDU2" // base64明文：mall-web:123456
  }
  return config
})

service.interceptors.response.use(response => {
  console.log(response)
  let code = response.data.code
  if (code === null) {

  } else if (code === '0') {
    return response
  } else {
    const vm = new Vue()
    let msg = response.data.msg
    vm.$bvToast.toast(`${msg}`, {
      title: '提示',
      variant: 'danger',
      autoHideDelay: 3000
    })
  }
})

export default service