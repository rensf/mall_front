<template>
  <a-col class="login-form" cols="12">
    <a-form-item>
      <a-input type="text" placeholder="请输入账号/手机号/邮箱" v-model="loginForm.username"></a-input>
    </a-form-item>
    <a-form-item>
      <a-input type="password" placeholder="请输入密码" v-model="loginForm.password"></a-input>
    </a-form-item>
    <a-form-item>
      <a-form-checkbox> 记住我&nbsp;<a href="#">忘记密码？</a> </a-form-checkbox>
    </a-form-item>
    <hr />
    <a-button type="primary" :disabled="!(nameState && passState)" @click="login">
      登录
    </a-button>
  </a-col>
</template>

<script>
export default {
  name: 'LoginNormal',
  data() {
    return {
      loginForm: {
        grant_type: 'sys_password',
      },
      nameState: null,
      passState: null,
    };
  },
  computed: {
    invalidNameFeedback() {
      if (this.loginForm.username === '') {
        return '账号/手机号/邮箱不能为空';
      }
    },
    invalidPassFeedback() {
      if (this.loginForm.password === '') {
        return '密码不能为空';
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
        this.$postRequest('/auth/oauth/token', this.loginForm).then((res) => {
          let data = res.data.result;
          this.$message.success(`登录成功`, 2);
          this.$store.dispatch('handleLogin', data);
          this.$router.push({
            name: this.$config.homeName,
          });
        });
      }
    },
  },
};
</script>
