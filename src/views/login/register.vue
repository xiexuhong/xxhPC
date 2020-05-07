<template lang="pug">
  #register
    .title 注册
    .form
      a-form(:form="form" @submit="register")
        a-form-item
          a-input(v-decorator="['account',{ rules: [{ required: true, message: 'Please input your username!' },{validator:validPhoneNumber}] },]" placeholder="Username")
            span.country(slot="addonBefore")
              CountrySelect
            a-icon(slot="prefix" type="user" style="color: rgba(0,0,0,.25)")
        a-form-item
          a-input(v-decorator="['password',{ rules: [{ required: true, message: 'Please input your Password!' },{validator:validateToNextPassword}] },]" placeholder="Password" type="password" autocomplete="off")
        a-form-item
          a-input(v-decorator="['confirm',{ rules: [{ required: true, message: 'Please input your Password!' },{validator:compareToFirstPassword}] },]" @blur="handleConfirmBlur" placeholder="confirm Password" type="password" autocomplete="off")
        a-form-item
          a-input-search(@search="sendSmsCode" v-decorator="['verify',{ rules: [{ required: true, message: 'Please input your code!' }] },]" placeholder="code" type="tel")
            a-button(slot="enterButton" type="primary" class="sms_btn") {{smsText}}
        a-form-item
          a-input(placeholder="邀请码" type="text" v-decorator="['invite_code', {}]")
        a-form-item
          .between
            a-checkbox.contact(v-model="isRead") 我已阅读
              a(href="javascript:;") 《用户协议》
            span.login 已有账号
              router-link(to="/login/login")
                a(href="javascript:;") 登录
          a-button.register_btn(type="primary" html-type="submit") 注册
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import CountrySelect from './countrySelect';
import { checkSmsCode, register } from '@/script/api';
import { smsMixin } from '@/mixins/smsMixin';
import { validMixin } from '@/mixins/validMixin';
export default {
  components: { CountrySelect },
  mixins: [smsMixin, validMixin],
  computed: {
    ...mapGetters(['country', 'deviceType']),
  },
  data() {
    return {
      isRead: true,
    };
  },
  methods: {
    ...mapMutations(['saveUser']),
    sendSmsCode() {
      (async () => {
        const { account } = await this.form.validateFields(['account']);
        this.sendSms(account, 1);
      })();
    },
    register(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const { account, verify, password, invite_code } = values;
          await checkSmsCode({
            mobile: account,
            areacode: this.country.number,
            type: 1,
            verify: verify,
          });
          const { datas } = await register({
            account,
            password,
            invite_code,
            country: this.country.short,
            areacode: this.country.number,
          });
          this.saveUser(datas);
          this.$router.push('/');
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
    .sms_btn {
      width: 100px;
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
