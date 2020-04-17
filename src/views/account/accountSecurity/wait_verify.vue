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
    <a-result title="審核中" subTitle="請等待1~3個工作日進行審核">
      <template v-slot:icon>
        <img src="../../../assets/image/account/iconshenhezhong.png" alt />
      </template>
    </a-result>
  </main>
</template>

<style scoped>
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
