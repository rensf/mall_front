<template>
  <div class="login-block">
    <b-row>
      <b-col cols="12">
        <div class="h4">
          登录
          <span class="btn btn-main">创建账号</span>
        </div>
        <hr />
      </b-col>
      <b-col class="login-form" cols="12">
        <b-form-group
          :invalid-feedback="invalidNameFeedback"
          :state="nameState"
        >
          <b-form-input
            type="text"
            placeholder="请输入账号"
            v-model="loginForm.userName"
            :state="nameState"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :invalid-feedback="invalidPassFeedback"
          :state="passState"
        >
          <b-form-input
            type="password"
            placeholder="请输入密码"
            v-model="loginForm.password"
            :state="passState"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-checkbox>
            记住我&nbsp;<a href="#">忘记密码？</a>
          </b-form-checkbox>
        </b-form-group>
        <hr />
        <b-button
          variant="primary"
          :disabled="!(nameState && passState)"
          @click="login"
        >
          登录
        </b-button>
      </b-col>
    </b-row>
    <div class="login-switch" @click="switchLogin">
      <img src="@/assets/qrcode.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginNormal",
  data() {
    return {
      loginForm: {},
      nameState: null,
      passState: null,
    };
  },
  computed: {
    invalidNameFeedback() {
      if (this.loginForm.userName === "") {
        return "用户名不能为空";
      }
    },
    invalidPassFeedback() {
      if (this.loginForm.password === "") {
        return "密码不能为空";
      }
    },
  },
  watch: {
    loginForm: {
      deep: true,
      handler(val, oldVal) {
        if (val.userName !== undefined) {
          this.nameState = val.userName ? true : false;
        }
        if (val.password !== undefined) {
          this.passState = val.password ? true : false;
        }
      },
    },
  },
  methods: {
    switchLogin() {
      this.$emit("switch-login", "qrcode");
    },
    login() {
      if (this.nameState && this.passState) {
        this.$getRequest("/user/loginByNormal", this.loginForm).then(
          (res) => {}
        );
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-block {
  position: relative;
  background-color: #ffffff;
  box-sizing: border-box;
  background-repeat: no-repeat;
  border-radius: 20px 20px 0 20px;
  width: 30%;
  margin: auto;
  padding: 20px;

  // .login-form {
  //   height: 200px;
  // }

  .login-switch {
    position: absolute;
    right: 0;
    bottom: 0;
    img {
      width: 60px;
      height: 60px;
      cursor: pointer;
    }
  }
}

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
  content: "";
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
</style>