<template>
    <div id="publictransfer">
        <template>
            <header>
              <a-breadcrumb separator="">
                <a-breadcrumb-item href=""><router-link to="/asset/assetoverview" class="fontcolor">资产总览</router-link></a-breadcrumb-item>
                <a-breadcrumb-separator style="color:#ffab32">></a-breadcrumb-separator>
                <a-breadcrumb-item>提现</a-breadcrumb-item>
              </a-breadcrumb>  
            </header>
        </template>
         <template>
            <div>
                <template>
                    <a-form :form="form">
                        <a-form-model-item label="选择币种">
                            <a-dropdown>
                              <a-menu slot="overlay">
                                  <a-menu-item :key="index" v-for="(item,index) in currency_list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
                              </a-menu>
                              <a-button style="margin-left: 8px" >{{defaultcurrency}}<a-icon type="down" /> </a-button>
                            </a-dropdown>
                        </a-form-model-item>
                       <a-form-model-item label="提现金额">
                            <a-input v-model="form.fieldA" placeholder="请输入一个整数" />
                        </a-form-model-item>
                        <a-form-item label="提现方式">
                        <a-select
                            v-decorator="[
                            'gender',
                            { rules: [{ required: true, message: 'Please select your gender!' }] },
                            ]"
                            placeholder="Select a option and change input text above"
                            @change="handleSelectChange"
                        >
                            <a-select-option value="male">
                            male
                            </a-select-option>
                            <a-select-option value="female">
                            female
                            </a-select-option>
                        </a-select>
                        </a-form-item>
                        <a-form-item>
                        <a-button type="primary" html-type="submit">
                            申请提现
                        </a-button>
                        </a-form-item>
                    </a-form>
                    </template>
            </div>
        </template>
    </div>
</template>
  
<script>
import { setup } from '@/locales';
import { mapGetters} from 'vuex';
import { getAssetList,changeCurrency } from '@/script/api';
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  computed: {
    ...mapGetters(['currency_list','defaultcurrency','lang','total','asset_list','deviceType']),
  },
  methods: {
    checkcurrency(index) {
      this.$store.state.asset.defaultcurrency = this.currency_list[index];
      changeCurrency({currency:this.defaultcurrency}).then((res) => {
          console.log(res);
      });
      getAssetList().then((res)=>{
        const {datas} = res;
        if(datas.hasOwnProperty('error')){
            return
        }
        // this.$store.state.asset.total = this.gettotal(datas.asset.asset_total,datas.balance.balance_total,datas.deposit.valuation,datas.total);
        // this.$store.state.asset.coin_list = this.getcoin_list(datas.asset.asset_list);
        // this.$store.state.asset.balance_list = this.getbalance_list(datas.balance.balance_list);
      });
    }, 
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
    handleMenuClick(e) {
      console.log('click', e);
    },
  },
};
</script>
<style scoped lang="scss">
  #publictransfer{  
        padding:10px;        
        max-width: 400px;
        font-size: 14px;
        header{
            margin: 0 0 10px;
            font-size: 16px;
        }
    }
  #components-table-demo-size h4 {
    margin-bottom: 16px;
  }
</style>