<template>
  <main
    class="ant-layout-content"
    style="height: 100%; margin: 24px 12px 0px; padding-top: 0px;width: 97.8%;"
  >
    <div class="breadcrumb ant-breadcrumb">
      <span class>
        <span class="ant-breadcrumb-link">
          <router-link to="/account/security" class="router-link-active color_y">帳戶安全</router-link>
        </span>
        <span class="ant-breadcrumb-separator color_y">></span>
      </span>
      <span class>
        <span class="ant-breadcrumb-link">
          <span>BHPAY授權</span>
        </span>
        <span class="ant-breadcrumb-separator">/</span>
      </span>
    </div>
    <a-result status="success" title="恭喜您" subTitle="您的BHPay賬戶已经创建成功" style="padding: 24px 15px">
      <template v-slot:extra>
        <a-button class="m_buttom">去人人礦場提幣</a-button>
        <a-button type="primary">下載BHPay錢包開啟新體驗</a-button>
      </template>
      <div class="desc">
        <p>
          <span>賬戶:</span>
          <span class="t_left">201911151136058744435</span>
          <span class="copy">複製</span>
        </p>
        <p>
          <span>姓名:</span>
          <span class="t_left">小白</span>
        </p>
      </div>
    </a-result>
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
.ant-result-content {
  padding: 24px 15px !important;
}
.ant-breadcrumb {
  margin-bottom: 2%;
}
.ant-breadcrumb-link {
  font-size: 18px;
}
.desc span {
  margin-bottom: 1em;
  display: inline-block;
  width: 25%;
  text-align: center;
}
.desc span:nth-child(2) {
  width: 60%;
}
.desc span:nth-child(3) {
  width: 13%;
}
.color_y {
  color: #ffab32;
}
.t_left {
  text-align: left !important;
}
.copy {
  text-align: right !important;
  color: #ffab32;
}
button {
  width: 100%;
  display: block;
}
.m_buttom {
  margin-bottom: 2%;
  color: #ffab32;
  border-color: #ffab32;
}
</style>