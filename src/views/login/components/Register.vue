<template>
  <a-col class="register-form" cols="12">
    <a-form-item :invalid-feedback="invalidPhoneFeedback">
      <a-input placeholder="请输入手机号"></a-input>
    </a-form-item>
    <a-form-item>
      <a-input placeholder="请输入邮箱"></a-input>
    </a-form-item>
    <a-form-item>
      <a-input placeholder="请输入密码"></a-input>
    </a-form-item>
    <hr />
    <a-button variant="primary">登录/注册</a-button>
  </a-col>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      registerForm: {},
    };
  },
  computed: {
    invalidPhoneFeedback() {},
  },
  methods: {
    register() {},
  },
};
</script>

<style lang="less" scoped></style>
