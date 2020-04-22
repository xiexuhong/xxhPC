<template lang="pug">
  #forgetPassTwo
    .title 重置密码
    .form
      a-form(:form="form" @submit="next")
        a-form-item
          a-input-search(@search="sendSmsCode" v-decorator="['code',{ rules: [{ required: true, message: 'Please input your code!' }] },]" placeholder="code")
            a-button(slot="enterButton" type="primary" class="sms_btn") {{smsText}}
          span.tips 输入您的手机{{telShow}}收到的验证码
        a-form-item
          a-button.login_btn(type="primary" html-type="submit") 下一步
</template>

<script>
import { smsMixin } from '@/mixins/smsMixin';
import { checkSmsCode } from '@/script/api';
import { mapGetters } from 'vuex';
export default {
  mixins: [smsMixin],
  data() {
    return {
      tel: '',
    };
  },
  computed: {
    ...mapGetters(['country']),
    telShow() {
      return `${this.tel.substring(0, 3)}****${this.tel.substring(
        this.tel.length - 4,
        this.tel.length,
      )}`;
    },
  },
  methods: {
    sendSmsCode() {
      this.sendSms(this.tel, 3);
    },
    goPath(path) {
      this.$router.push(path);
    },
    next(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          await checkSmsCode({
            mobile: this.tel,
            areacode: this.country.number,
            verify: values.code,
            type: 3,
          });
          this.$router.push('/login/forgetThree');
          console.log('Received values of form: ', values);
        }
      });
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'forgetOne' });
  },
  created() {
    this.tel = this.$ls.get('forgetPassTel');
  },
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
    .sms_btn {
      width: 100px;
    }
    .login_btn {
      width: 100%;
    }
    .tips {
      color: #898989;
    }
  }
}
</style>
