import { mapGetters } from 'vuex';
import { sendVerifyCode } from '@/script/api';

export const verifyCode = {
  data() {
    return {
      timeout: 0,
    };
  },
  computed: {
    ...mapGetters(['country']),
    codeText() {
      return this.timeout === 0
        ? '发送验证码'
        : this.timeout < 10
        ? `0${this.timeout}s`
        : `${this.timeout}s`;
    },
  },
  watch: {
    timeout(val) {
      if (val > 0) {
        setTimeout(() => {
          this.timeout--;
        }, 1000);
      }
    },
  },
  methods: {
    async sendVerifyCode(token, type) {
      if (this.timeout > 0) return;
      try {
        await sendVerifyCode({
          token: token,
          type: type,
        });
        this.timeout = 60;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
