import { validPhone } from '@/script/formValid';
import { mapGetters } from 'vuex';

export const validMixin = {
  data() {
    return {
      confirmDirty: false,
    };
  },
  computed: {
    ...mapGetters(['country']),
  },
  methods: {
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
    validPhoneNumber(rule, value, callback) {
      if (value && !validPhone(value, this.country.short)) {
        callback('请输入正确得手机号');
      } else {
        callback();
      }
    },
  },
};
