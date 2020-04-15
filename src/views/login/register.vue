<template lang="pug">
  #register
    .title 注册
    .form
      a-form(:form="form" @submit="register")
        a-form-item
          a-input(v-decorator="['userName',{ rules: [{ required: true, message: 'Please input your username!' }] },]" placeholder="Username")
            span.country(slot="addonBefore" @click="countrySelect('/country')") {{country.number}}
            a-icon(slot="prefix" type="user" style="color: rgba(0,0,0,.25)")
        a-form-item
          a-input(v-decorator="['password',{ rules: [{ required: true, message: 'Please input your Password!' }] },]" placeholder="Password" type="password" autocomplete="off")
        a-form-item
          a-input(v-decorator="['confirmpassword',{ rules: [{ required: true, message: 'Please input your Password!' }] },]" placeholder="confirm Password" type="password" autocomplete="off")
        a-form-item
          a-input-search(v-decorator="['code',{ rules: [{ required: true, message: 'Please input your code!' }] },]" placeholder="code" type="tel")
            a-button(slot="enterButton" type="primary") 发送验证码
        a-form-item
          a-input(placeholder="邀请码" type="text")
        a-form-item
          .between
            a-checkbox.contact 我已阅读
              a(href="javascript:;") 《用户协议》
            span.login 已有账号
              router-link(to="/login/login")
                a(href="javascript:;") 登录
          a-button.register_btn(type="primary" html-type="submit") 注册
    a-modal(v-model="visbile" :footer="null" :closable="false" wrapClassName="countryWrap")
      Country(@close="visbile=false")
</template>

<script>
import { mapGetters } from 'vuex';
import Country from './country';
export default {
  components: { Country },
  computed: {
    ...mapGetters(['country', 'deviceType']),
  },
  data() {
    return {
      visbile: false,
    };
  },
  methods: {
    countrySelect(path) {
      if (this.deviceType === 'mobile') {
        this.$router.push(path);
        return;
      }
      this.visbile = true;
    },
    register(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  created() {},
};
</script>

<style lang="scss" scoped>
#register {
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
    .country {
      cursor: pointer;
    }
    .register_btn {
      width: 100%;
    }
    .between {
      display: flex;
      justify-content: space-between;
      .login {
        & > a {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
