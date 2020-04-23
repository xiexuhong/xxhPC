<template>
  <a-layout id="usercenter">
    <UserCenter></UserCenter>
    <div class="content" :class="{ mobileHeader: deviceType !== 'desktop' }">
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </div>
  </a-layout>
</template>

<script>
import UserCenter from '@/components/userCenter';
import { mapGetters } from 'vuex';
import { getAssetList,ownCurrency,changeCurrency } from '@/script/api';
export default {
  components: { UserCenter },
  data() {
    return {};
  },
   created(){
    getAssetList().then((res)=>{
      const {datas} = res;
      if(datas.hasOwnProperty('error')){
          return
      }
      this.$store.state.asset.assetMess = datas;
      var coin_list = [];
      for(let i=0;i<datas.asset.asset_list.length;i++){
        if(coin_list.length<datas.asset.asset_list.length){
          coin_list.push({id:'',coin:'',total:"",available:"",freeze:""});
          coin_list[i].id = i;
          coin_list[i].coin =datas.asset.asset_list[i].coin;
          coin_list[i].total =datas.asset.asset_list[i].total_num;
          coin_list[i].available =datas.asset.asset_list[i].num_avail;
          coin_list[i].freeze =datas.asset.asset_list[i].num_freeze;
          coin_list[i].valuation =datas.asset.asset_list[i].unify_price;
        }      
      };
      var balance_list=[];
      for(let i=0;i<datas.balance.balance_list.length;i++){
        if(balance_list.length<datas.balance.balance_list.length){
          balance_list.push({id:'',coin:'',total:"",available:"",freeze:""});
          balance_list[i].coin =datas.balance.balance_list[i].currency;
          balance_list[i].total =datas.balance.balance_list[i].total_num;
          balance_list[i].available =datas.balance.balance_list[i].money_avail;
          balance_list[i].freeze =datas.balance.balance_list[i].money_freeze;
          balance_list[i].valuation =datas.balance.balance_list[i].unify_price;
        }
      };
      var total ={};
      total.asset_total = datas.asset.asset_total;
      total.balance_total = datas.balance.balance_total;
      total.deposit = datas.deposit.valuation;
      total.total = datas.total;

      this.$store.state.asset.total = total;
      this.$store.state.asset.coin_list = coin_list;
      this.$store.state.asset.balance_list = balance_list;
     });
     ownCurrency().then((res)=>{
       const {datas} = res;
       this.$store.state.asset.currency_list = datas.currency;
       this.$store.state.asset.defaultcurrency = datas.default;
     })
  },
  computed: {
    ...mapGetters(['currencylist','defaultcurrency','lang',,'coin_list','balance_list','asset_list','deviceType']),
  },
};
</script>

<style lang="scss">
p {
  margin: 0;
}
#usercenter {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 15px auto;
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: 10px;
    padding: 10px;
    background-color: #fff;
    header {  
      margin-bottom: 15px;
    .tit1{
        font-size: 24px;
        color: #262626;
        line-height: 48px;
        font-weight: bolder;
      }
    }
    section{
      margin: 10px 0;
      .tit2{
        color: #999999;
      }
      .text{
        font-size: 24px;
        color: #FFAB32;
        line-height: 48px;
        font-weight: bolder;
      }
    }
    .ant-table-wrapper{
      background-color: #fff;
    }
    .ant-layout-content {
      width: 100%;
      box-sizing: border-box;
    }
    .ant-input {
      max-width: 180px;
      margin-right: 15px;
    }
    .filter{
      background-color: #fff;
       .ant-input{
          margin: 0;
        }
    }
  }
  .mobileHeader {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .fontcolor {
    color: #ffab32;
  }
  .ant-form-item {
    margin-bottom: 12px;
  }
  .ant-radio-button-wrapper {
    background-color: #f8f8f8;
    margin-right: 10px;
    border-radius: 5px;
    color: #000;
  }
  .button_area {
    display: flex;
    button {
      margin-right: 15px;
    }
  }
  .ant-list-item {
    padding: 6px 0;
  }
}
</style>
