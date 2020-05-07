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
                          <a-menu-item :key="index" v-for="(item,index) in payment_list" @click="checkcurrency(index)"><a-icon type="user" />{{item.currency}}</a-menu-item>
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
                >
                    <a-select-option v-for="(item,index) of data" :key="index">
                      <div v-if="item.is_withdraw == 0" :data-type='item.is_withdraw'>
                        <div>
                            <p>{{$t('withdraw.withdraw16')}}</p>
                        </div>
                      </div>
                      <div v-else>
                          <div :data-type="item.is_withdraw" v-if="item.bank_info.length>0" :id="item.bank_info[0].account_id">
                            <a-icon type="credit-card" />&nbsp;&nbsp;
                            <span>{{$t('withdraw.withdraw17')}}</span>                          
                            {{item.bank_info[0].account_number}}
                            {{item.bank_info[0].account_name}}
                          </div>
                      </div>
                    </a-select-option>
                </a-select>
                <span class="ant-form-text fontcolor" @click="addBankCard()">{{$t('withdraw.withdraw06')}}</span>
                </a-form-item>
                <a-form-model-item :label="$t('withdraw.withdraw11')">
                    <a-input v-model="form.code" :placeholder="$t('withdraw.withdraw12')" @keyup="testCode()"/>
                    <span class="ant-form-text fontcolor" id="w_code" @click="getCode()">{{$t('withdraw.withdraw13')}}</span>
                </a-form-model-item>
                <a-form-item>
                <a-button type="primary" @click="goEnterPwd()">
                    {{$t('withdraw.withdraw07')}}
                </a-button>
                </a-form-item>
              </a-form>
            </div>
            <a-modal
              :title="$t('extractcoin.extractcoin22')"
              style="top: 40%;"
              :visible="visible"
              @ok="handleOk"
              @cancel="handleCancel"
              >
              <a-input v-model="tradersPassword" :placeholder="$t('extractcoin.extractcoin23')"/>
              <span class="ant-form-text" @click="forgetPwd()">
                  {{$t('extractcoin.extractcoin24')}}
              </span>
            </a-modal>
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
import $ from 'jquery';
import { mapGetters} from 'vuex';
import { getAssetList,changeCurrency,getUserAccountInfo,withdraw,sendVerifyCode,checkVerifyCode} from '@/script/api';
import { log } from 'util';
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: {
        currency:"",
        amount:"",
        code:"",
        bankcard:""
      },
      data:'',
      count:"",
      tradersPassword:"",
      isSuccess:false,
      visible:false
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
    ...mapGetters(['payment_list','currency','lang','total','asset_list','available','deviceType']),
  },
  methods: {
    checkcurrency(index) {
        this.form.currency = this.payment_list[index].currency;
        this.$store.state.asset.currency = this.form.currency;
        for (var i = 0; i < this.list.length; i++) {
            if (this.form.currency == this.list[i].currency) {
                this.is_support = this.list[i].is_support;
            }
        }
    }, 
    getCode(){ //获取验证码
        var _t = $('#w_code');
        if (_t.hasClass("dis_code")) {
            return false;
        };
        var TIME_COUNT = 10;
        this.count = TIME_COUNT;
        _t.addClass("dis_code");
        var thiz = this;
        sendVerifyCode({type: "predeposit_withdraw"}).then(()=>{
          _t.html(thiz.count + "s");
          var timer = setInterval(()=>{
            if(thiz.count>1){
              thiz.count--;
              _t.html(thiz.count + "s");
            }
            else{
              clearInterval(timer);
              _t.removeClass("dis_code");
              _t.html(thiz.$t('withdraw.withdraw14'));
            }
          },1000)
        }).catch((res)=>{
          console.log(res)
        });
    },
    testCode() {
      if(this.form.code.length < 6){
        return
      }
      var _this = this;
      var data={
          type: "predeposit_withdraw",
          verify: this.form.code
      };
      checkVerifyCode(data).then(()=>{
        _this.$message.success(_this.$t('withdraw.withdraw15'),1);
      }).catch((res)=>{
        this.$message(res.datas.error)
      });
        
    },    
    addBankCard(){
      this.$router.push({name:'addBankCard',params:{amount:this.form.amount}});
    },
    handleOk(e) {
        this.visible = false;
        var data = {
          verify: this.form.code,
          withdraw_price: this.form.amount,
          account_id: this.form.bankcard,
          trade_pwd: this.tradersPassword,
        };
        // withdraw().then((res)=>{
          // this.isSuccess = true;
        // });
    },
    handleCancel(e) {
        this.visible = false;
    },
    forgetPwd(){

    },
    goEnterPwd(){
      this.visible = true;     
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
    .ant-input {
    max-width: 280px;
    margin-right: 15px;
    }
    .ant-select {
      max-width: 280px;
      margin-right: 15px;
    }
  }
</style>