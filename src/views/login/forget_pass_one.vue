<template lang="pug">
  #forgetPassOne
    .title 重置密码
    .form
      a-form(:form="form" @submit="next")
        a-form-item
          a-input(v-decorator="['userName',{ rules: [{ required: true, message: 'Please input your username!' },{validator:validPhoneNumber}] },]" placeholder="Username")
            span.country(slot="addonBefore")
              CountrySelect
            a-icon(slot="prefix" type="user" style="color: rgba(0,0,0,.25)")
        a-form-item
          a-input-search(v-decorator="['code',{ rules: [{ required: true, message: 'Please input your code!' }] },]" placeholder="code")
            .code(slot="enterButton")
              canvas#imgCode()
        a-form-item
          a-button.login_btn(type="primary" html-type="submit") 下一步
</template>

<script>
import { mapGetters } from 'vuex';
import CountrySelect from './countrySelect';
import Captcha from 'captcha-mini';
import { validMixin } from '@/mixins/validMixin';
export default {
  mixins: [validMixin],
  components: { CountrySelect },
  data() {
    return {
      code: null,
    };
  },
  computed: {
    ...mapGetters(['country', 'deviceType']),
  },
  methods: {
    createCode() {
      const captcha1 = new Captcha({
        lineWidth: 1, //线条宽度
        lineNum: 6, //线条数量
        dotR: 2, //点的半径
        dotNum: 1, //点的数量
        preGroundColor: [10, 80], //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 100, //字体大小
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'], //字体类型
        fontStyle: 'fill', //字体绘制方法，有fill和stroke
        length: 4, //验证码长度
      });
      captcha1.draw(document.querySelector('#imgCode'), r => {
        this.code = r;
      });
    },
    next(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const { userName, code } = values;
          if (this.code.toUpperCase() !== code.toUpperCase()) {
            this.$message.error('验证码错误');
            return;
          }
          this.$ls.set('forgetPassTel', userName);
          this.$router.push('/login/forgetTwo');
        }
      });
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'forgetOne' });
  },
  mounted() {
    this.createCode();
  },
};
</script>

<style lang="scss" scoped>
#forgetPassOne {
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
    /deep/.ant-input-search-button {
      padding: 0;
      .code {
        width: 100px;
        height: 100%;
        #imgCode {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }

    .ant-input-search-button {
      background: #fff;
      border-color: #d9d9d9;
      & > p {
        color: #fff;
        padding: 0 20px;
        margin: 0;
      }
    }
  }
}
</style>
