<template>
  <a-col class="login-form" cols="12">
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
        <a-input v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入账号/手机号/邮箱' }] },
        ]" placeholder="账号/手机号/邮箱">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
        <a-input v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码' }] },
        ]" type="password" placeholder="密码">
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-form-item>
          <a-form-checkbox> 记住我&nbsp;<a href="#">忘记密码？</a> </a-form-checkbox>
        </a-form-item>
        <hr />
        <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </a-col>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: 'LoginNormal',
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$postRequest('/auth/oauth/token', {
            grant_type: 'sys_password',
            username: values.userName,
            password: values.password,
          }).then((res) => {
            let data = res.data.result;
            this.$message.success(`登录成功`, 2);
            this.$store.dispatch('handleLogin', data);
            this.$router.push({
              name: this.$config.homeName,
            });
          });
        }
      });
    },
  },
};
</script>
