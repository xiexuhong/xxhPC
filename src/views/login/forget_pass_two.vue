<template lang="pug">
  #forgetPassTwo
    .title 重置密码
    .form
      a-form(:form="form" @submit="login")
        a-form-item
          a-input-search(v-decorator="['code',{ rules: [{ required: true, message: 'Please input your code!' }] },]" placeholder="code")
            a-button(slot="enterButton" type="primary") 发送验证码
          span.tips 输入您的手机181****5817收到的验证码
        a-form-item
          a-button.login_btn(type="primary" html-type="submit") 下一步
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
      this.goPath('/user/forgetThree');
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

<style lang="scss" scoped>
#forgetPassTwo {
  background: #fff;
  width: 100%;
  max-width: 512px;
  .title {
    text-align: center;
    font-weight: 400;
    color: rgba(38, 38, 38, 1);
    font-size: 18px;
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
