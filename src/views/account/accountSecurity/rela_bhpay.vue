<template>
  <main class="ant-layout-content" style="height: 100%; margin: 24px 24px 0px; padding-top: 0px;">
    <div class="breadcrumb ant-breadcrumb">
      <span>
        <span class="ant-breadcrumb-link">
          <a href="/account/security" class="router-link-active color_y">帳戶安全</a>
        </span>
        <span class="ant-breadcrumb-separator color_y">></span>
      </span>
      <span class>
        <span class="ant-breadcrumb-link">
          <span>实名认证</span>
        </span>
        <span class="ant-breadcrumb-separator">/</span>
      </span>
    </div>
    <div class="rela_content">
      <div class="t_center">
        <a-avatar :size="64" icon="user" />
        <p>老王</p>
      </div>
      <div class="desc">
        <p style="font-size: 16px;">
          <strong>同意人人礦場進行以下操作</strong>
        </p>
        <p>
          <a-icon :style="{ color: 'red' }" type="close-circle" />獲取您的實名認證信息授權給BHPay
        </p>
        <p>
          <a-icon :style="{ color: 'red' }" type="close-circle" />自動關聯您的BHPay賬戶
        </p>
        <div>
          <a-checkbox defaultChecked />用人人礦場手機尾號(4623)快速開通BHPay
        </div>
      </div>
      <div>
        <a-button type="primary">确认授權</a-button>
        <p>
          確認授權即視為同意
          <a>《用戶授權協議》</a>
        </p>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.desc p {
  margin-bottom: 1em;
}
.color_y {
  color: #ffab32;
}
.t_center {
  text-align: center;
}
.ant-breadcrumb {
  margin-bottom: 2%;
}
.ant-breadcrumb-link {
  font-size: 18px;
}
.ant-layout-content {
  width: 97%;
}
.rela_content {
  width: 50%;
  margin: auto;
}
</style>