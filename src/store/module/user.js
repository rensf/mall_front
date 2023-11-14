import {
  setToken,
  getToken,
  removeToken
} from '@/libs/util'
import {
  getRequest
} from '@/api'


export default {
  state: {
    token: getToken(),
    userId: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    removeToken(state) {
      state.token = ''
      removeToken()
    },
  },
  actions: {
    handleLogin(context, userInfo) {
      context.commit('setToken', userInfo.token_type + " " + userInfo.access_token)
    },
    getUserInfo({state}) {
      getRequest('/user/user/getLoginUserInfo').then(res => {
        let data = res.data.result
        state.userId = data.userId
      })
    },
    handleLogout(context) {
      context.commit('removeToken')
    }
  },
  modules: {},
}