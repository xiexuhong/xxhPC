<template>
  <div id="assetmenu">
    <a-menu
      mode="inline"
      :openKeys="openKeys"
      @openChange="onOpenChange"
      :defaultSelectedKeys="['1']"
      :class="{mobileHeader: deviceType !== 'desktop'}"
    >
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="user" />我的资产
        </span>
        <a-menu-item key="1">
          <router-link to="/asset/assetoverview">资产总览</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/asset/available_assets">可用资产</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/asset/digiccy">数字货币</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/asset/assetbills">资产账单</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="laptop" />算力合约
        </span>
        <a-menu-item key="5">
          <router-link to="/hashrateContract/contractList">我的合约</router-link>
        </a-menu-item>
        <a-menu-item key="6">
          <router-link to="/hashrateContract/hashrateIncome">算力收益</router-link>
        </a-menu-item>
        <a-menu-item key="7">
          <router-link to="/hashrateContract/hashrateTransfer">算力转让</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title">
          <a-icon type="notification" />我的账户
        </span>
        <a-menu-item key="9">
          <router-link to="/account/security">账户&安全</router-link>
        </a-menu-item>
        <a-menu-item key="10">
          <router-link to="/account/bank_card">银行卡管理</router-link>
        </a-menu-item>
        <a-menu-item key="11">
          <router-link to="/account/get_coin_addr">提币地址管理</router-link>
        </a-menu-item>
        <a-menu-item key="12">
          <router-link to="/account/power_age">算龄</router-link>
        </a-menu-item>
        <a-menu-item key="13">
          <router-link to="/account/invite">推荐奖励</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { localesEumn } from '@/locales';
import { mapGetters, mapMutations } from 'vuex';
import { getAssetList,ownCurrency,changeCurrency } from '@/script/api';
export default {
  data() {
    return {
      local: 'zh',
      localesEumn: localesEumn,
      collapsed: false,
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1', 'sub2', 'sub4'],
    };
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
      this.$store.state.asset.coin_list = coin_list;
      this.$store.state.asset.balance_list = balance_list;
     });
     ownCurrency().then((res)=>{
       const {datas} = res;
       console.log(datas);
       this.$store.state.asset.currency_list = datas.currency;
       this.$store.state.asset.defaultcurrency = datas.default;
     })
  },
  computed: {
    ...mapGetters(['currencylist','defaultcurrency','lang',,'coin_list','balance_list','asset_list','deviceType']),
  },
  methods: {
    ...mapMutations(['getList']),
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    goPath(path) {
      this.$router.push(path);
    },
    chooseLocale(val) {
      this.local = val.key;
    },
    chooseMenu(val) {
      console.log(val);
      this.collapsed = false;
    },
    drawerClose() {
      this.collapsed = false;
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
<style lang="scss" scoped>
#assetmenu {
  .mobileHeader {
    display: none;
    padding: 0;
  }
}
</style>