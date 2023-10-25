<template>
  <b-col class="register-form" cols="12">
    <b-form-group :invalid-feedback="invalidPhoneFeedback">
      <b-form-input placeholder="请输入手机号"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input placeholder="请输入邮箱"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input placeholder="请输入密码"></b-form-input>
    </b-form-group>
    <hr />
    <b-button variant="primary">登录/注册</b-button>
  </b-col>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      registerForm: {
        
      }
    }
  },
  computed: {
    invalidPhoneFeedback() {}
  },
  methods: {
    register() {

    }
  }
};
</script>

<style lang="less" scoped>
</style>