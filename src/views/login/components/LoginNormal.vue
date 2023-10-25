<template>
  <b-col class="login-form" cols="12">
    <b-form-group :invalid-feedback="invalidNameFeedback" :state="nameState">
      <b-form-input type="text" placeholder="请输入账号/手机号/邮箱" v-model="loginForm.username" :state="nameState"></b-form-input>
    </b-form-group>
    <b-form-group :invalid-feedback="invalidPassFeedback" :state="passState">
      <b-form-input type="password" placeholder="请输入密码" v-model="loginForm.password" :state="passState"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-checkbox>
        记住我&nbsp;<a href="#">忘记密码？</a>
      </b-form-checkbox>
    </b-form-group>
    <hr />
    <b-button variant="primary" :disabled="!(nameState && passState)" @click="login">
      登录
    </b-button>
  </b-col>
</template>

<script>
export default {
  name: "LoginNormal",
  data() {
    return {
      loginForm: {
        grant_type: "sys_password"
      },
      nameState: null,
      passState: null,
    };
  },
  computed: {
    invalidNameFeedback() {
      if (this.loginForm.username === "") {
        return "账号/手机号/邮箱不能为空";
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
        if (val.username !== undefined) {
          this.nameState = val.username ? true : false;
        }
        if (val.password !== undefined) {
          this.passState = val.password ? true : false;
        }
      },
    },
  },
  methods: {
    login() {
      if (this.nameState && this.passState) {
        this.$postRequest("/auth/oauth/token", this.loginForm).then((res) => {
          this.$bvToast.toast(`登录成功`, {
            title: "提示",
            variant: "success",
            autoHideDelay: 3000,
          });
        });
      }
    },
  },
};
</script>