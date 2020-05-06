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
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { getAssetList, ownCurrency, changeCurrency, payment } from '@/script/api';
export default {
  components: { UserCenter },
  data() {
    return {};
  },
  created() {
    getAssetList().then(res => {
      const { datas } = res;
      if (datas.hasOwnProperty('error')) {
        return;
      }

      this.$store.state.asset.total = this.gettotal(
        datas.asset.asset_total,
        datas.balance.balance_total,
        datas.deposit.valuation,
        datas.total,
      );
      this.$store.state.asset.coin_list = this.getcoin_list(datas.asset.asset_list);
      this.$store.state.asset.balance_list = this.getbalance_list(datas.balance.balance_list);
    });
    ownCurrency().then(res => {
      const { datas } = res;
      this.$store.state.asset.currency_list = datas.currency;
      this.$store.state.asset.defaultcurrency = datas.default;
    });
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
    if (sessionStorage.getItem("store") ) {
        console.log(this.$store);
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))));
        console.log(this.$store);
    }
  },
  computed: {
    ...mapGetters([
      'currencylist',
      'defaultcurrency',
      'lang',
      ,
      'coin_list',
      'balance_list',
      'asset_list',
      'deviceType',
    ]),
  },
  methods: {
    getcoin_list: function(datas) {
      var coin_list = [];
      for (let i = 0; i < datas.length; i++) {
        if (coin_list.length < datas.length) {
          coin_list.push({ id: '', coin: '', total: '', available: '', freeze: '' });
          coin_list[i].id = i;
          coin_list[i].coin = datas[i].coin;
          coin_list[i].total = datas[i].total_num;
          coin_list[i].available = datas[i].num_avail;
          coin_list[i].freeze = datas[i].num_freeze;
          coin_list[i].valuation = datas[i].unify_price;
        }
      }
      return coin_list;
    },
    getbalance_list: function(datas) {
      var balance_list = [];
      for (let i = 0; i < datas.length; i++) {
        if (balance_list.length < datas.length) {
          balance_list.push({ id: '', coin: '', total: '', available: '', freeze: '' });
          balance_list[i].coin = datas[i].currency;
          balance_list[i].total = datas[i].total_num;
          balance_list[i].available = datas[i].money_avail;
          balance_list[i].freeze = datas[i].money_freeze;
          balance_list[i].valuation = datas[i].unify_price;
        }
      }
      return balance_list;
    },
    gettotal: function(total1, total2, total3, total4) {
      var total = {};
      total.asset_total = total1;
      total.balance_total = total2;
      total.deposit = total3;
      total.total = total4;
      return total;
    }
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
      .tit1 {
        font-size: 24px;
        color: #262626;
        line-height: 48px;
        font-weight: bolder;
      }
    }
    section {
      margin: 10px 0;
      .tit2 {
        color: #999999;
      }
      .text {
        font-size: 24px;
        color: #ffab32;
        line-height: 48px;
        font-weight: bolder;
      }
    }
    .ant-table-wrapper {
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
    .ant-select {
      max-width: 180px;
      margin-right: 15px;
    }
    .filter {
      background-color: #fff;
      .ant-input {
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
  .ant-list-split .ant-list-item {
    border: none;
  }
  .ant-list-split .ant-list-header {
    border: none;
  }
  .cover{
        position: fixed;
        background-color: rgba(0,0,0,0.5);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 6;
        .result{
          width: 320px;
          height: 270px;
          padding: 10px;
          background-color: #fff;
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          margin: auto;
          border-radius: 4px;
          z-index: 8;
        }
      }
      .result{
        .transferorder{
          width: 500px;
          margin: 0 auto;
          background-color: #f8f8f8;
          padding: 2vw;
          margin-bottom: 2vw;
        }
      }
}
</style>
