<template lang="pug">  
  <main>
    <a-card>
      <header>
        <span>资产总览</span>
        <a-dropdown>
          <a-menu slot="overlay">
              <a-menu-item :key="index" v-for="(item,index) in currency_list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px" >{{defaultcurrency}}<a-icon type="down" /> </a-button>
        </a-dropdown>
      </header>
      
      <div id="assetview">     
          <div class="left">
            <section>
              <p>总资产（估值）：</p>
              <span>{{total.total}}&nbsp;{{defaultcurrency}}</span>
            </section>
            <a-descriptions bordered layout="vertical">
              <a-descriptions-item label="总资产（估值）">{{total.total}}&nbsp;{{defaultcurrency}}</a-descriptions-item>
              <a-descriptions-item label="可用资金（估值）">{{total.asset_total}}&nbsp;{{defaultcurrency}}</a-descriptions-item>
              <a-descriptions-item label="合约金额（估值）">{{total.deposit}}&nbsp;{{defaultcurrency}}</a-descriptions-item>
            </a-descriptions>
            <div class="button_area">
              <a-button><router-link to="/asset/recharge">充值</router-link></a-button>
              <a-button><router-link to="/asset/withdraw">提现</router-link></a-button>
              <a-button><router-link to="/asset/extractcoin">提币</router-link></a-button>
              <a-button><router-link to="/asset/assetbills">账单</router-link></a-button>
            </div>
          </div>
          <ve-line :data="chartData" class="charts"></ve-line>
      </div>
    </a-card>
    <br />
    <div class="filter">
      <div class="searchBox">
        <div class="search">
          <div class="icon">
            //- <img src="../../image/svg/search.svg" alt="" />
          </div>
          <input class="weui-input" v-model="filterText" type="text"/>
        </div>
        <label for="s11" class="weui-cell weui-check__label radio" style="padding-left:0;">
          <div class="weui-cell__hd">
            <input type="checkbox" v-model="isHide" class="weui-check" name="checkbox1" id="s11" checked="checked"/>
            <i class="weui-icon-checked"></i>
          </div>
          <div class="weui-cell__bd">隐藏零资产</div>
        </label>
      </div>
    </div>
      
    <a-table :dataSource="asset_list" :columns="columns" >
    </a-table>
  </main> 
</template>

<script>
import { setup } from '@/locales';
import {mapState, mapGetters,mapMutations } from 'vuex';
import { getAssetList,ownCurrency,changeCurrency } from '@/script/api';
export default {
  data() {
    return {
     chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      columns: [
        {
          title: '币种',
          dataIndex: 'coin',
          key: 'coin',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.coin
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          },
        },
        {
          title: '总量',
          dataIndex: 'total',
          key: 'total',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.total
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: '估值',
          dataIndex: 'valuation',
          key: 'valuation',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.usd
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: '可用',
          dataIndex: 'available',
          key: 'available',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.available
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: '冻结',
          dataIndex: 'freeze',
          key: 'freeze',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.freze
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
      ],
      filterText:"",
      isHide:false,
      langArr:""
    };
  },
  created(){
    console.log(this.$t('myCome.myCome03'));
    getAssetList().then((res)=>{
      const {datas} = res;
      if(datas.hasOwnProperty('error')){
          return
      }
      this.$store.state.asset.assetMess = datas;
      console.log( this.$store.state.asset.assetMess);
     });
     ownCurrency().then((res)=>{
       const {datas} = res;
       console.log(datas);
       this.$store.state.asset.currency_list = datas.currency;
       this.$store.state.asset.defaultcurrency = datas.default;
     })
  },
  computed: {
    ...mapGetters(['currency_list','defaultcurrency','lang','total','asset_list']),
  },
  methods: {
    checkcurrency(index) {
      this.$store.state.asset.defaultcurrency = this.currency_list[index];
      changeCurrency({currency:this.defaultcurrency}).then((res) => {
          console.log(res);
      })
    }, 
    handleSearch(selectedKeys, confirm, dataIndex) {
      confirm();
      this.searchText = selectedKeys[0];
      this.searchedColumn = dataIndex;
    },
    handleReset(clearFilters) {
      clearFilters();
      this.searchText = '';
    },
    changeLang() {
      setup('en');
    },
    handleButtonClick(e) {
      console.log('click left button', e);
    },
    handleMenuClick(e) {
      console.log('click', e);
    },
    recharge() {
      console.log('recharge');
    },
  }
};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 15px;
  
  span {
    font-size: 18px;
    font-weight: bolder;
  }
}
#assetview{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left{
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .charts{
    flex: 1;
  }
}
.button_area {
  display: flex;
  margin: 10px 0;
  button {
    margin-right: 15px;
  }
}

.filter{
  padding: 10px;
  .searchBox{
    display: flex;
    justify-content: space-between;
    label{
      display: flex;
    }
  }
}
</style>
