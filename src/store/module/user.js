import { setToken, getToken, removeToken } from '@/libs/util';
import { getRequest } from '@/api';

export default {
  state: {
    token: getToken(),
    userInfo: {},
    hasGetUserInfo: false,
    orderInfo: {},
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      setToken(token);
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setHasGetUserInfo(state, status) {
      state.hasGetUserInfo = status;
    },
    setOrderInfo(state, orderInfo) {
      state.orderInfo = orderInfo;
    },
    removeToken(state) {
      state.token = '';
      removeToken();
    },
  },
  actions: {
    handleLogin(context, userInfo) {
      context.commit(
        'setToken',
        userInfo.token_type + ' ' + userInfo.access_token
      );
    },
    getUserInfo(context) {
      getRequest('/user/user/getLoginUserInfo').then((res) => {
        let data = res.data.result;
        context.commit('setUserInfo', data);
        context.commit('setHasGetUserInfo', true);
      });
    },
    handleLogout(context) {
      context.commit('removeToken');
      context.commit('setUserInfo', "");
      context.commit('setHasGetUserInfo', false);
    },
  },
  modules: {},
};
