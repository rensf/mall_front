import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: '',
  timeout: 0,
})

service.interceptors.request.use(config => {
  if (store.state.token)
    config.headers.token = store.state.token
  return config
})

service.interceptors.response.use(response => {
  console.log(response)
  let code = response.data.code
  if (code === null) {

  } else if (code === '0') {
    return response
  }
})

export default service