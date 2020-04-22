<template lang="pug">
  #forgetPassThree
    .title 重置密码
    .form
      a-form(:form="form" @submit="submit")
        a-form-item
          a-input(v-decorator="['password',{ rules: [{ required: true, message: 'Please input your Password!' },{validator:validateToNextPassword}] },]" placeholder="Password" type="password" autocomplete="off")
            a-icon(slot="prefix" type="lock" style="color: rgba(0,0,0,.25)")
        a-form-item
          a-input(v-decorator="['confirm',{ rules: [{ required: true, message: 'Please input your Password!' },{validator:compareToFirstPassword}] },]" @blur="handleConfirmBlur" placeholder="confirm Password" type="password" autocomplete="off")
            a-icon(slot="prefix" type="lock" style="color: rgba(0,0,0,.25)")
        a-form-item
          a-button.login_btn(type="primary" html-type="submit") 提交
</template>

<script>
import { mapGetters } from 'vuex';
import { resetPassword } from '@/script/api';
export default {
  data() {
    return {
      tel: '',
      confirmDirty: false,
    };
  },
  computed: {
    ...mapGetters(['country']),
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          await resetPassword({
            account: this.tel,
            password: values.password,
            country: this.country.short,
            areacode: this.country.number,
          });
          this.$router.push('/login/login');
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
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
#forgetPassThree {
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
