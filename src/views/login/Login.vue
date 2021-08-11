<template>
  <b-container class="login">
    <div class="login-img">
      <img src="@/assets/login.jpg" />
    </div>
    <login-normal v-if="loginType === 'normal'" @switch-login="switchLogin"></login-normal>
    <login-qrcode v-if="loginType === 'qrcode'" @switch-login="switchLogin"></login-qrcode>
  </b-container>
</template>

<script>
import LoginNormal from "./components/LoginNormal";
import LoginQrcode from "./components/LoginQrcode";
export default {
  components: {
    LoginNormal,
    LoginQrcode
  },
  data() {
    return {
      loginType: 'normal',
    };
  },
  methods: {
    switchLogin(type) {
      this.loginType = type;
    }
  },
};
</script>

<style lang="less" scoped>
.login {
  background-color: #f5f5f5;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  padding: 0;
}
</style>