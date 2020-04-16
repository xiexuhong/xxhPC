<template lang="pug">
  #login
    .title 登錄R.R.Mine
    .form
      a-form(:form="form" @submit="login")
        a-form-item
          a-input(v-decorator="['userName',{ rules: [{ required: true, message: 'Please input your username!' }] },]" placeholder="Username")
            span.country(slot="addonBefore" @click="countrySelect('/country')") {{country.number}}
            a-icon(slot="prefix" type="user" style="color: rgba(0,0,0,.25)")
        a-form-item
          a-input(v-decorator="['password',{ rules: [{ required: true, message: 'Please input your Password!' }] },]" placeholder="Password" type="password" autocomplete="off")
            a-icon(slot="prefix" type="lock" style="color: rgba(0,0,0,.25)")
        a-form-item
          router-link(to="/login/forgetOne")
            a.forgetpass(href="javascript:;") 忘记密码
          router-link(to="/login/register")
            a.register(href="javascript:;") 注册
          a-button.login_btn(type="primary" html-type="submit") 登录
    a-modal(v-model="visbile" :footer="null" :closable="false" wrapClassName="countryWrap")
      Country(@close="visbile=false")
</template>

<script>
import { mapGetters } from 'vuex';
import Country from './country';
export default {
  components: { Country },
  data() {
    return {
      visbile: false,
    };
  },
  computed: {
    ...mapGetters(['country', 'deviceType']),
  },
  methods: {
    countrySelect(path) {
      if (this.deviceType === 'mobile') {
        this.$router.push(path);
        return;
      }
      this.visbile = true;
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

<style lang="scss" scoped>
#login {
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
    .login_btn {
      width: 100%;
    }
    .forgetpass {
      float: right;
    }
  }
}
</style>
