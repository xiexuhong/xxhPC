<template>
  <main
    id="forgetTradePwd"
    class="ant-layout-content"
    style="width:90%;height: 100%; margin: 24px 24px 0px; padding-top: 0px;"
  >
    <div>
      <div class="page-header-index-wide">
        <div class="breadcrumb ant-breadcrumb">
          <span class>
            <span class="ant-breadcrumb-link">
              <router-link to="/account/security" class="router-link-active color_y"
                >帳戶&安全</router-link
              >
            </span>
            <span class="ant-breadcrumb-separator color_y">></span>
          </span>
          <span class>
            <span class="ant-breadcrumb-link">
              <span>交易密碼找回</span>
            </span>
            <span class="ant-breadcrumb-separator">/</span>
          </span>
        </div>
        <div>
          <a-form :form="form" @submit="submitTradePwd">
            <a-form-item label="短信验证码">
              <a-input
                placeholder="请输入短信验证码"
                v-decorator="[
                  'code',
                  { rules: [{ required: true, message: 'Please input your code!' }] },
                ]"
              >
                <span slot="suffix" class="color_y" @click="sendCode()">{{ codeText }}</span>
              </a-input>
              <span class="code_til_text">輸入您的手機 {{ userInfo.mobile }} 收到的驗證碼</span>
            </a-form-item>
            <a-form-item label="手持身份证拍照">
              <span class="ant-form-item-children">
                <a-upload
                  listType="picture-card"
                  class="avatar-uploader"
                  :showUploadList="false"
                  name="img"
                  action="/member/upload-img"
                  method="post"
                  :data="renrenInfo"
                  :beforeUpload="beforeUpload"
                  @change="handleChange"
                >
                  <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                  <div v-else>
                    <a-icon :type="loading ? 'loading' : 'plus'" />
                    <div class="ant-upload-text">选择文件</div>
                  </div>
                </a-upload>
                <div class="upload_til_text">
                  <span class="dis_block">
                    僅支持JPG,GIF,PNG格式圖片，且文件小於
                    <span class="color_r">2M</span>
                  </span>
                  <span class="dis_block"
                    >1、身份證或護照上所有清晰可見，照片需免冠，建議未化妝。手持證件人五官清晰，照片內容真實有效，不得做任何修改。</span
                  >
                  <span class="dis_block"
                    >2、個人手寫的內容包含“RRMine"&個人簽名和“當前日期"，字跡工整，不得塗改</span
                  >
                  <span class="dis_block">注：為保護用戶隱私，本照片僅用於找回交易密碼。</span>
                </div>
              </span>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit">提交</a-button>
              <a-tooltip class="til"
                >溫馨提示：找回密碼申請提交後，1-3個工作日將受到處理結果。</a-tooltip
              >
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import { verifyCode } from '@/mixins/verifyCode';
import { resetTradePwd } from '@/script/api';

export default {
  mixins: [verifyCode],
  data() {
    return {
      loading: false,
      imageUrl: '',
      userInfo: {},
      renrenInfo: {},
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  created() {
    this.userInfo = this.$ls.get('userInfo');
    this.renrenInfo = this.$ls.get('renrenInfo');
    console.log('renrenInfo: ' + JSON.stringify(this.renrenInfo));
  },
  methods: {
    sendCode() {
      this.sendVerifyCode(this.userInfo.token, 'reset_trade_pwd');
    },
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        console.log('info: ', info);
        this.imageUrl = info.file.originFileObj;
        this.loading = false;
      }
    },
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/gif';
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG/png/gif image!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    },
    submitTradePwd(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const { code } = values;
          const { datas } = await resetTradePwd({
            photo: '',
            verify: code,
          });
          console.log('datas: ' + datas);
          this.$router.push('/account/security');
        }
      });
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'submitTradePwd' });
  },
};
</script>
<style lang="scss" scoped>
.color_y {
  color: #ffab32;
}
.color_r {
  color: #e14343;
}
.ant-breadcrumb {
  margin-bottom: 2%;
}
.ant-breadcrumb-link {
  font-size: 18px;
}
.ant-form {
  .ant-form-item:first-child {
    margin-bottom: 0;
  }
  .ant-form-item {
    .ant-input-affix-wrapper,
    button {
      width: 70% !important;
    }
  }
}
.code_til_text {
  display: inline-block;
  width: 100%;
}
.upload_til_text {
  .dis_block {
    display: block;
  }
  p {
    margin-bottom: 0;
  }
}
.til {
  display: block;
}
#forgetTradePwd .content .ant-input {
  max-width: 100%;
}
</style>
