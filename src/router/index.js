import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';
import store from '@/store';
import { getToken } from '@/libs/util';
import config from '@/config';
const { homeName, loginName } = config;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const token = getToken();
  if (!token && to.name === loginName) {
    next();
  } else if (!token && to.name !== loginName) {
    next({
      name: loginName,
    });
  } else if (token && to.name === loginName) {
    next({
      name: homeName,
    });
  } else if (token && to.name !== loginName) {
    store.dispatch('getUserInfo');
    next();
  }
});

router.afterEach((to) => {
  window.scrollTo(0, 0);
});

export default router;
