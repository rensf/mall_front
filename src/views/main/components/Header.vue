<template>
  <b-navbar>
    <b-navbar-brand><h2 @click="$router.push('/home')">Mall</h2></b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item>
        <home-cart class="navbar-icon" v-if="isLogin"></home-cart>
      </b-nav-item>
      <b-nav-item>
        <b-icon
          v-if="isLogin"
          class="navbar-icon"
          title="个人信息"
          right
          icon="person-fill"
          font-scale="2"
        ></b-icon>
      </b-nav-item>
      <b-nav-item>
        <b-icon
          v-if="isLogin"
          class="navbar-icon"
          title="注销"
          right
          icon="arrow-right-square-fill"
          font-scale="2"
          @click="logout"
        ></b-icon>
      </b-nav-item>
      <b-nav-item>
        <b-icon
          v-if="!isLogin"
          class="navbar-icon"
          title="登录"
          right
          icon="arrow-left-square-fill"
          font-scale="2"
          @click="$router.push('/login')"
        ></b-icon>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import HomeCart from './Cart';
export default {
  name: 'HomeHeader',
  components: {
    HomeCart,
  },
  computed: {
    isLogin() {
      return this.$store.state.user.token ? true : false;
    },
  },
  data() {
    return {};
  },
  methods: {
    // 注销
    logout() {
      this.$store.dispatch('handleLogout');
      this.$router.push({
        name: this.$config.loginName,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.navbar {
  padding-right: unset;
}
.navbar-brand {
  cursor: pointer;
}
.navbar-icon {
  margin-left: 15px;
}
</style>
