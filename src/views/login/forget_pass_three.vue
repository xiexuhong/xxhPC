<template lang="pug">
  #forgetPassThree
    .title 重置密码
    .form
      a-form(:form="form" @submit="login")
        a-form-item
          a-input(v-decorator="['password',{ rules: [{ required: true, message: 'Please input your Password!' }] },]" placeholder="Password" type="password" autocomplete="off")
            a-icon(slot="prefix" type="lock" style="color: rgba(0,0,0,.25)")
        a-form-item
          a-input(v-decorator="['confirmpassword',{ rules: [{ required: true, message: 'Please confirm your Password!' }] },]" placeholder="Confirm Password" type="password" autocomplete="off")
            a-icon(slot="prefix" type="lock" style="color: rgba(0,0,0,.25)")
        a-form-item
          a-button.login_btn(type="primary" html-type="submit") 提交
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goPath(path) {
      this.$router.push(path);
    },
    login(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'forgetOne' });
  },
  created() {},
};
</script>

<style lang="scss">
#forgetPassThree {
  background: #fff;
  width: 100%;
  max-width: 512px;
  .title {
    text-align: center;
    font-weight: 400;
    color: rgba(38, 38, 38, 1);
    font-size: 28px;
    line-height: 60px;
  }
  .form {
    padding: 0 20px;
    .login_btn {
      width: 100%;
    }
    .tips {
      color: #898989;
    }
  }
}
</style>
