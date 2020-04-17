<template>
  <main>
    <div>
      <a-card :bordered="false">
        <div class="breadcrumb ant-breadcrumb">
          <span>
            <span class="ant-breadcrumb-link">
              <a class="router-link-active color_y">賬戶&安全</a>
            </span>
          </span>
        </div>
        <a-card-meta description="上次登錄 2019-11-18 11:08:17 ">
          <template slot="title">
            <div>
              <span>点封皮节骨眼</span>
              <img src="../../../assets/image/account/iconbianji.png" alt />
            </div>
          </template>
          <a-avatar
            slot="avatar"
            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
          />
        </a-card-meta>
        <a-card class="m_top">
          <a-row>
            <a-col :span="12">
              <h3>实名认证</h3>
              <span class="color_9">建議您完成實名認證，以確保財產安全</span>
              <div class="status_v">
                <router-link to="/account/verified" v-if="isVerified">
                  <img src="../../../assets/image/account/icongougou.png" alt />
                  <span class="color_y">已认证</span>
                </router-link>
                <a-button type="primary" v-else @click="goVerify()">去认证>></a-button>
              </div>
            </a-col>
            <a-col :span="12" class="t_right">
              <img src="../../../assets/image/account/icongeren.png" alt />
            </a-col>
          </a-row>
        </a-card>
      </a-card>
      <a-card :bordered="false">
        <div class="ant-list ant-list-split">
          <div class="ant-spin-nested-loading">
            <div class="ant-spin-container">
              <ul class="ant-list-items">
                <div class="ant-list-item">
                  <div class="ant-list-item-meta">
                    <div class="ant-list-item-meta-avatar">
                      <span class="ant-avatar ant-avatar-circle ant-avatar-image">
                        <img src="../../../assets/image/account/iconbanding.png" />
                      </span>
                    </div>
                    <div class="ant-list-item-meta-content">
                      <h4 class="ant-list-item-meta-title">
                        <a>綁定手機</a>
                      </h4>
                      <div class="ant-list-item-meta-description">
                        <span>
                          <span class="security-list-description">
                            <small>綁定手機後，您即可享受手機登錄、動態碼登錄、找回密碼等。為了賬號安全，建議您在更換手機後第一時間更換綁定手機</small>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul class="ant-list-item-action">
                    <li>
                      <a class="color_b">180****0001</a>
                    </li>
                  </ul>
                </div>
                <li class="ant-list-item">
                  <div class="ant-list-item-meta">
                    <div class="ant-list-item-meta-avatar">
                      <span class="ant-avatar ant-avatar-circle ant-avatar-image">
                        <img src="../../../assets/image/account/iconguanlian.png" />
                      </span>
                    </div>
                    <div class="ant-list-item-meta-content">
                      <h4 class="ant-list-item-meta-title">
                        <a>關聯BHPay帳戶</a>
                      </h4>
                      <div class="ant-list-item-meta-description">
                        <span>
                          <span class="security-list-description">
                            <small>國際領先的區塊鏈數字資產錢包，支持主流貨幣的場外交易和兌換</small>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul class="ant-list-item-action">
                    <li>
                      <router-link
                        :to="isAssociated ? '/account/associated_bhpay' : '/account/rela_bhpay'"
                        class="color_b"
                        :class="{'color_y': !isAssociated}"
                      >{{ isAssociated ? '已關聯BHPay' : "關聯BHPay"}}</router-link>
                    </li>
                  </ul>
                </li>
                <li class="ant-list-item">
                  <div class="ant-list-item-meta">
                    <div class="ant-list-item-meta-avatar">
                      <span class="ant-avatar ant-avatar-circle ant-avatar-image">
                        <img src="../../../assets/image/account/icondenglumima.png" />
                      </span>
                    </div>
                    <div class="ant-list-item-meta-content">
                      <h4 class="ant-list-item-meta-title">
                        <a>登錄密碼</a>
                      </h4>
                      <div class="ant-list-item-meta-description">
                        <span>
                          <span class="security-list-description">
                            <small>安全性高的密碼可以使賬號更安全。建議您定期更換密碼，且設置一個包含數字和字母，並且長度超過6位以上的密碼</small>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul class="ant-list-item-action">
                    <li>
                      <a class="color_y" @click="changePwd(true)">修改</a>
                      <a-modal
                        title="修改登錄密碼"
                        centered
                        :footer="null"
                        :visible="isChangePwd"
                        @cancel="() => changePwd(false)"
                      >
                        <a-form-item label="舊密碼">
                          <a-input placeholder="请输入舊密碼" />
                        </a-form-item>
                        <a-form-item label="新密碼">
                          <a-input placeholder="6~16位字母、數字和特殊符號" />
                        </a-form-item>
                        <a-form-item label="确认新密碼">
                          <a-input placeholder="请再次输入新密碼" />
                        </a-form-item>
                        <a-form-item class="t_center">
                          <a-button type="primary">确认修改</a-button>
                        </a-form-item>
                      </a-modal>
                    </li>
                  </ul>
                </li>
                <li class="ant-list-item">
                  <div class="ant-list-item-meta">
                    <div class="ant-list-item-meta-avatar">
                      <span class="ant-avatar ant-avatar-circle ant-avatar-image">
                        <img src="../../../assets/image/account/iconjiaoyimima.png" />
                      </span>
                    </div>
                    <div class="ant-list-item-meta-content">
                      <h4 class="ant-list-item-meta-title">
                        <a>交易密碼</a>
                      </h4>
                      <div class="ant-list-item-meta-description">
                        <span>
                          <span class="security-list-description">保障資產安全</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul class="ant-list-item-action">
                    <li>
                      <a class="color_y" @click="changeTrasPwd(true)">修改</a>
                      <a-modal
                        title="修改交易密碼"
                        centered
                        :footer="null"
                        :visible="isChangeTrasPwd"
                        @cancel="() => changeTrasPwd(false)"
                      >
                        <a-form-item label="舊密碼">
                          <a-input placeholder="请输入舊密碼" />
                        </a-form-item>
                        <a-form-item label="新密碼">
                          <a-input placeholder="6纯数字" />
                        </a-form-item>
                        <a-form-item label="确认新密碼">
                          <a-input placeholder="请再次输入新密碼" />
                        </a-form-item>
                        <a-form-item label="短信驗證碼">
                          <a-input placeholder="请输入短信验证码">
                            <span slot="suffix" class="color_y">獲取驗證碼</span>
                          </a-input>
                        </a-form-item>
                        <a-form-item class="t_center">
                          <a-button type="primary">确认修改</a-button>
                        </a-form-item>
                      </a-modal>
                    </li>
                    <li>
                      <router-link to="/account/forget_trade_pwd" class="color_r">找回</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a-card>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      isChangePwd: false, // 修改登录密码
      isChangeTrasPwd: false, // 修改交易密码
      isAssociated: true, // 是否关联BHPay
      isVerified: false, // 是否实名认证
    };
  },
  methods: {
    changePwd(isChangePwd) {
      this.isChangePwd = isChangePwd;
      console.log('click', isChangePwd);
    },
    changeTrasPwd(isChangeTrasPwd) {
      this.isChangeTrasPwd = isChangeTrasPwd;
      console.log('click', isChangeTrasPwd);
    },
    goVerify() {
      console.log('去认证');
    },
  },
};
</script>
<style scoped>
.content {
  background-color: transparent;
}
.color_b {
  color: #262626;
}
.color_y {
  color: #ffab32;
}
.color_r {
  color: #ef5656;
}
.color_9 {
  color: #999999;
}
.ant-breadcrumb {
  margin-bottom: 2%;
}
.ant-breadcrumb-link {
  font-size: 18px;
}
.ant-card-meta-title img {
  width: 1.5%;
  margin-left: 1%;
  vertical-align: middle;
}
.m_top {
  margin-top: 4%;
}
.t_right {
  text-align: right;
}
.t_right img {
  width: 45%;
}
.status_v {
  margin-top: 2%;
}
.status_v img {
  width: 3.5%;
}
.status_v span {
  margin-left: 1.5%;
  vertical-align: middle;
}
.t_center {
  text-align: center;
}
.t_center button {
  width: 48%;
}
.ant-input-suffix {
  color: #ffab32;
}
</style>