<template>
  <main class="ant-layout-content" style="height: 100%; margin: 24px 24px 0px; padding-top: 0px;">
    <div class="breadcrumb ant-breadcrumb">
      <span>
        <span class="ant-breadcrumb-link">
          <router-link to="/account/bank_card" class="router-link-active color_y"
            >银行卡管理</router-link
          >
        </span>
        <span class="ant-breadcrumb-separator color_y">></span>
      </span>
      <span class>
        <span class="ant-breadcrumb-link">
          <span>添加银行卡</span>
        </span>
        <span class="ant-breadcrumb-separator">/</span>
      </span>
    </div>
    <div>
      <a-form-item class="currency">
        <a-row>
          <a-col :span="12">
            <span>货币类型</span>
          </a-col>
          <a-col :span="12" class="t_right">
            <span>USDT</span>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item label="姓名">
        <a-input placeholder="input placeholder 英文名" />
      </a-form-item>
      <a-form>
        <a-form-item label="银行">
          <a-input-group compact>
            <a-select defaultValue="摩根大通">
              <a-select-option value="农行">农行</a-select-option>
              <a-select-option value="工商">工商</a-select-option>
              <a-select-option value="建设">建设</a-select-option>
              <a-select-option value="中国银行">中国银行</a-select-option>
            </a-select>
          </a-input-group>
        </a-form-item>
        <a-form-item label="分行代码（可选）">
          <a-input placeholder="input placeholder 英文名" />
        </a-form-item>
        <a-form-item label="分行地址">
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item label="卡号/账号">
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item label="Swift代码">
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item label="城市">
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item label="省/州">
          <a-input placeholder="input placeholder" />
        </a-form-item>
        <a-form-item label="国家">
          <a-input value="中国" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="addBankCaed(true)">提交</a-button>
          <a-modal
            title="安全驗證"
            centered
            :footer="null"
            :visible="isAdd"
            @cancel="() => addBankCaed(false)"
          >
            <a-form-item label="交易密碼">
              <a-input placeholder="input placeholder 英文名" />
              <span class="color_y">忘記密碼?</span>
            </a-form-item>
            <a-form-item class="t_center">
              <a-button type="primary">提交</a-button>
            </a-form-item>
          </a-modal>
        </a-form-item>
      </a-form>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      isAdd: false,
    };
  },
  methods: {
    addBankCaed(isAdd) {
      this.isAdd = isAdd;
      console.log('click', isAdd);
    },
  },
};
</script>
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
.ant-form-item {
  width: 70% !important;
}
.ant-select {
  width: 100% !important;
}
.currency .ant-row {
  background-color: #f8f8f8;
}
.t_right {
  text-align: right;
  padding-right: 2%;
}
.t_center {
  text-align: center;
}
.t_center button {
  width: 48%;
}
</style>
