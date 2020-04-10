<template lang="pug">
  #login
    .title 登錄R.R.Mine
    .form
      a-form(:form="form" @submit="login")
        a-form-item
          a-input(v-decorator="['userName',{ rules: [{ required: true, message: 'Please input your username!' }] },]" placeholder="Username")
            span.country(slot="addonBefore" @click="goPath('/country')") +86
            a-icon(slot="prefix" type="user" style="color: rgba(0,0,0,.25)")
        a-form-item
          a-input(v-decorator="['password',{ rules: [{ required: true, message: 'Please input your Password!' }] },]" placeholder="Password" type="password" autocomplete="off")
            a-icon(slot="prefix" type="lock" style="color: rgba(0,0,0,.25)")
        a-form-item
          a.forgetpass(href="javascript:;" @click="goPath('/user/forgetOne')") 忘记密码
          a.register(href="javascript:;" @click="goPath('/user/register')") 注册
          a-button.login_btn(type="primary" html-type="submit") 登录
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['country']),
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
    this.form = this.$form.createForm(this, { name: 'login' });
  },
  created() {},
};
</script>

<style lang="scss">
#login {
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
    .country {
      cursor: pointer;
    }
    .login_btn {
      width: 100%;
    }
    .forgetpass {
      float: right;
    }
  }
}
</style>
