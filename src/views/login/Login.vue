<template>
  <div class="login">
    <div class="login-img">
      <img src="@/assets/login.jpg" />
    </div>
    <div class="login-block" v-show="isLogin" :class="showLogin">
      <a-row>
        <a-col cols="12">
          <div class="h4">
            登录
            <span class="btn btn-main" @click="isLogin = !isLogin">创建账号</span>
          </div>
          <hr />
        </a-col>
        <login-normal v-if="isNormal"></login-normal>
        <login-qrcode v-if="!isNormal"></login-qrcode>
      </a-row>
      <div class="login-switch" @click="isNormal = !isNormal">
        <img v-if="!isNormal" src="@/assets/computer.png" />
        <img v-if="isNormal" src="@/assets/qrcode.png" />
      </div>
    </div>
    <div class="register-block" v-show="!isLogin" :class="showRegister">
      <a-row>
        <a-col cols="12">
          <div class="h4">
            注册
            <span class="btn btn-main" @click="isLogin = !isLogin">返回登录</span>
          </div>
          <hr />
        </a-col>
        <register></register>
      </a-row>
    </div>
  </div>
</template>

<script>
import LoginNormal from './components/LoginNormal';
import LoginQrcode from './components/LoginQrcode';
import Register from './components/Register';

export default {
  components: {
    LoginNormal,
    LoginQrcode,
    Register,
  },
  data() {
    return {
      isNormal: true,
      isLogin: true,
    };
  },
  computed: {
    showLogin: function() {
      return {
        animate__animated: this.isLogin,
        animate__fadeInDown: this.isLogin,
      };
    },
    showRegister: function() {
      return {
        animate__animated: !this.isLogin,
        animate__fadeInDown: !this.isLogin,
      };
    },
  },
  methods: {},
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
  width: 1000px;

  .login-img {
    min-width: 640px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      opacity: 0.9;
    }
  }

  .login-block,
  .register-block {
    position: relative;
    background-color: #ffffff;
    box-sizing: border-box;
    background-repeat: no-repeat;
    border-radius: 20px 20px 0 20px;
    width: 32%;
    margin: auto;
    padding: 20px;

    .btn-main {
      float: right;
      background-color: transparent;
      color: #000000;
      border: none;
      position: relative;
      padding-left: 0;
      padding-right: 0;
    }

    .btn-main:after {
      content: '';
      width: 0;
      height: 1px;
      position: absolute;
      bottom: 0;
      background-color: #3c5570;
      left: 0;
      -moz-transition: all 0.3s;
      -o-transition: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }

    .btn-main:hover:after {
      width: 100%;
    }
  }

  .login-block {
    .login-switch {
      position: absolute;
      right: 0;
      bottom: 0;
      img {
        padding: 3px;
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
    }
  }
}
</style>
