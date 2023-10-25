<template>
  <b-navbar>
    <b-navbar-brand><span>Mall</span></b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item>
        <b-icon v-if="isLogin" class="navbar-icon" title="购物车" right icon="cart-fill" font-scale="2"></b-icon>
      </b-nav-item>
      <b-nav-item>
        <b-icon v-if="isLogin" class="navbar-icon" title="个人信息" right icon="person-fill" font-scale="2"></b-icon>
      </b-nav-item>
      <b-nav-item>
        <b-icon v-if="isLogin" class="navbar-icon" title="注销" right icon="arrow-right-square-fill" font-scale="2"></b-icon>
      </b-nav-item>
      <b-nav-item>
        <b-icon v-if="!isLogin" class="navbar-icon" title="登录" right icon="arrow-left-square-fill" font-scale="2" @click="$router.push('/login')"></b-icon>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      isLogin: false,
    };
  },
};
</script>

<style lang="less" scoped>
.navbar-icon {
  margin-left: 15px;
}
</style>