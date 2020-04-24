<template>
    <div id="publictransfer">
       <header>
              <a-breadcrumb separator="">
                <a-breadcrumb-item href=""><router-link to="/asset/assetoverview" class="fontcolor">{{$t('asset.asset03')}}</router-link></a-breadcrumb-item>
                <a-breadcrumb-separator style="color:#ffab32">></a-breadcrumb-separator>
                <a-breadcrumb-item>{{$t('withdraw.withdraw01')}}</a-breadcrumb-item>
              </a-breadcrumb>  
            </header>
        <template v-if="!isSuccess">
            <div>
              <a-form :form="form">
                <a-form-model-item :label="$t('withdraw.withdraw02')">
                    <a-dropdown>
                      <a-menu slot="overlay">
                          <a-menu-item :key="index" v-for="(item,index) in currency_list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
                      </a-menu>
                      <a-button>{{form.currency}}<a-icon type="down" /> </a-button>
                    </a-dropdown>
                    <span class="ant-form-text">{{$t('recharge.recharge05')}}{{available}}{{form.currency}}</span>
                </a-form-model-item>
                <a-form-model-item :label="$t('withdraw.withdraw03')">
                    <a-input v-model="form.amount" :placeholder="$t('withdraw.withdraw04')" />
                </a-form-model-item>
                <a-form-item :label="$t('withdraw.withdraw05')">
                <a-select
                    v-model="form.bankcard"
                    @change="handleSelectChange"
                >
                    <a-select-option v-for="(item,index) of data" :key="index">
                      {{item.bank_info}}
                    </a-select-option>
                </a-select>
                <span class="ant-form-text fontcolor" @click="addBankCard()">{{$t('withdraw.withdraw06')}}</span>
                </a-form-item>
                <a-form-item>
                <a-button type="primary" @click="goWithdraw()">
                    {{$t('withdraw.withdraw07')}}
                </a-button>
                </a-form-item>
              </a-form>
            </div>
        </template>
        <template v-else>
            <a-result
                status="success"
                :title="$t('withdraw.withdraw08')"
                :subTitle="$t('withdraw.withdraw09')"
            >
                <template v-slot:extra>
                    <a-button type="primary" key="console" @click="goReturn()"> {{$t('withdraw.withdraw10')}}</a-button>
                </template>
            </a-result>
        </template>
    </div>
</template>
  
<script>
import { setup } from '@/locales';
import { mapGetters} from 'vuex';
import { getAssetList,changeCurrency,getUserAccountInfo} from '@/script/api';
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: {
        currency:"",
        amount:"",
        bankcard:""
      },
      isSuccess:false
    };
  },
  created(){
     this.form.currency = this.currency;
     getUserAccountInfo().then((res)=>{
       this.data = res.datas.balance_list
       console.log(this.data);
     })
  },
  computed: {
    ...mapGetters(['currency_list','currency','lang','total','asset_list','available','deviceType']),
  },
  methods: {
    checkcurrency(index) {
        this.form.currency = this.currency_list[index];
        this.$store.state.asset.currency = this.form.currency;
        for (var i = 0; i < this.list.length; i++) {
            if (this.form.currency == this.list[i].currency) {
                this.is_support = this.list[i].is_support;
            }
        }
    }, 
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    addBankCard(){
      this.$router.push({name:'addBankCard',params:{amount:this.form.amount}});
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
    goWithdraw(){
      this.isSuccess = true;
    },
    goReturn(){
      this.isSuccess = false;
    }
  },
};
</script>
<style scoped lang="scss">
  #publictransfer{  
    padding:10px;   
    font-size: 14px;
    header{
        margin: 0 0 10px;
        font-size: 16px;
    }
    .ant-btn{
      margin-right: 15px;
    }
}
</style>