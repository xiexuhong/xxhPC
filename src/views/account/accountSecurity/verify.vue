<template>
  <main class="ant-layout-content" style="height: 100%; width:99%; margin: 10px; padding-top: 0px;">
    <div class="breadcrumb ant-breadcrumb">
      <span>
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
    <div>
      <a-form>
        <a-form-item label="證件類型">
          <a-input-group compact>
            <a-select defaultValue="护照">
              <a-select-option value="护照">护照</a-select-option>
              <a-select-option value="驾照">驾照</a-select-option>
              <a-select-option value="台胞证">台胞证</a-select-option>
              <a-select-option value="港澳居民来往内地通行证">港澳居民来往内地通行证</a-select-option>
            </a-select>
          </a-input-group>
        </a-form-item>
        <a-form-item label="英文名">
          <a-input placeholder="input placeholder 英文名" />
        </a-form-item>
        <a-form-item label="母語姓名">
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item label="證件號">
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item label="證件拍照">
          <span class="ant-form-item-children">
            <a-upload
              name="avatar"
              listType="picture-card"
              class="avatar-uploader"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'" />
              </div>
            </a-upload>
            <div class="upload_til_text">
              僅支持JPG,GIF,PNG格式圖片，且文件小於
              <span class="color_r">2M</span>
            </div>
          </span>
        </a-form-item>
        <a-form-item>
          <a-button type="primary">提交</a-button>
        </a-form-item>
      </a-form>
    </div>
  </main>
</template>
<style scoped>
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
/* .ant-form-item {
  width: 70% !important;
} */
.ant-select {
  width: 100% !important;
}
.avatar-uploader {
  width: 16%;
  vertical-align: bottom;
}
.upload_til_text {
  display: inline-block;
}
</style>