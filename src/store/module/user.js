import {
  setToken,
  getToken
} from '@/libs/util'

export default {
  state: {
    token: getToken()
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
  },
  actions: {},
  modules: {},
}