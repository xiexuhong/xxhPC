<template>
  <main class="ant-layout-content" style="height: 100%; margin: 24px 24px 0px; padding-top: 0px;">
    <div class="breadcrumb ant-breadcrumb">
      <span class>
        <span class="ant-breadcrumb-link">
          <router-link to="/account/security" class="router-link-active color_y">帳戶安全</router-link>
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
    <a-result status="success" title="您的實名信息已通過認證">
      <div class="desc">
        <p>
          <span>證件類型:</span>
          <span>護照</span>
        </p>
        <p>
          <span>證件號:</span>
          <span>G1234567</span>
        </p>
        <p>
          <span>姓名:</span>
          <span>王二狗</span>
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
  width: 60%;
  margin: auto;
  border-radius: 1%;
}
.desc span {
  margin-bottom: 1em;
  display: inline-block;
  width: 50%;
  text-align: center;
}
.color_y {
  color: #ffab32;
}
.ant-breadcrumb {
  margin-bottom: 2%;
}
.ant-breadcrumb-link {
  font-size: 18px;
}
</style>