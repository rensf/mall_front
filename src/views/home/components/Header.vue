<template>
  <b-navbar>
    <b-navbar-brand><h3>Mall</h3></b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-icon v-if="isLogin" right icon="person-fill" font-scale="2"></b-icon>
      <b-icon v-if="isLogin" title="注销" right icon="box-arrow-in-left" font-scale="2"></b-icon>
      <b-icon v-if="!isLogin" title="登录" right icon="box-arrow-in-right" font-scale="2" @click="$router.push('/login')"></b-icon>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      isLogin: false,
    }
  }
};
</script>

<style lang="less" scoped>
</style>