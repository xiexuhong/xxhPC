<template>
  <main
    class="ant-layout-content"
    style="width:93%;height: 100%; margin: 24px 24px 0px; padding-top: 0px;"
  >
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
    <a-form>
      <a-form-item class="currency" v-if="currency">
        <a-row>
          <a-col :span="12">
            <span>货币类型</span>
          </a-col>
          <a-col :span="12" class="t_right">
            <span>{{ currency }}</span>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item label="货币类型" v-else>
          <a-select :defaultValue="currency" v-model="currency">
            <a-select-option v-for="datas in currencyList" :key="datas.currency" :value="datas.currency">{{ datas.currency }}</a-select-option>
          </a-select>
      </a-form-item>
      <a-form-item label="姓名">
        <a-input placeholder="input placeholder 英文名" v-decorator="['owner_name',{ rules: [{ required: true, message: 'Please input your name!' }] }]" />
      </a-form-item>
      <a-form-item label="银行">
        <a-input-group compact>
          <a-select :defaultValue="sec_bankName">
            <a-select-option v-for="list in bankList" :key="list.id" :id="list.id" :value="list.bank">{{ list.bank }}</a-select-option>
          </a-select>
        </a-input-group>
      </a-form-item>
      <a-form-item label="分行代码（可选）">
        <a-input placeholder="input placeholder 英文名" v-decorator="['branch_na',{ rules: [{ required: false, message: '' }] }]" />
      </a-form-item>
      <a-form-item label="分行地址">
        <a-input placeholder="input placeholder" v-decorator="['address',{ rules: [{ required: true, message: 'Please input your address!' }] }]" />
      </a-form-item>
      <a-form-item label="卡号/账号">
        <a-input placeholder="input placeholder" v-decorator="['account_number',{ rules: [{ required: true, message: 'Please input your account_number!' }] }]" />
      </a-form-item>
      <a-form-item label="Swift代码">
        <a-input placeholder="input placeholder" v-decorator="['address',{ rules: [{ required: true, message: 'Please input your address!' }] }]" />
      </a-form-item>
      <a-form-item label="城市">
        <a-input placeholder="input placeholder" v-decorator="['city',{ rules: [{ required: true, message: 'Please input your city!' }] }]" />
      </a-form-item>
      <a-form-item label="省/州">
        <a-input placeholder="input placeholder" v-decorator="['province',{ rules: [{ required: true, message: 'Please input your province!' }] }]" />
      </a-form-item>
      <a-form-item label="国家">
        <a-input-group compact>
          <a-select :defaultValue="country" v-model="country">
            <a-select-option v-for="country in countryList" :key="country.country" :id="country.country" :value="country.country">{{ country.country_name }}</a-select-option>
          </a-select>
        </a-input-group> 
      </a-form-item>
      <a-form-item label="BSB No" v-show="country === 'NZ' || country === 'AU'">
        <a-input placeholder="input placeholder" v-decorator="['bsb_no',{ rules: [{ required: true, message: 'Please input your bsb_no!' }] }]" />
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
            <router-link to="/login/forgetOne" class="color_y">忘記密碼?</router-link>
          </a-form-item>
          <a-form-item class="t_center">
            <a-button type="primary">提交</a-button>
          </a-form-item>
        </a-modal>
      </a-form-item>
    </a-form>
  </main>
</template>
<script>
import { getBankList } from '@/script/api';

export default {
  data() {
    return {
      isAdd: false,
      bankList: [], // 银行卡列表
      currency: "",
      currencyList: [], // 货币列表
      countryList: [], // 国家列表
      country: "", // 默认国家
      sec_bankName: "", // 默认银行
    };
  },
  async created() {
      const { datas } = await getBankList({
        currency: 'USDT'
      });
      this.bankList = datas.bank_list;
      this.countryList = datas.country_list;
      this.country = datas.user_country;
      this.sec_bankName = datas.bank_list[0].bank;
      // this.currencyList = currencyInfo.balance.balance_list;
      // this.currency = currencyInfo.balance.balance_list[0].currency;
      console.log("余额: ", currencyInfo);
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
