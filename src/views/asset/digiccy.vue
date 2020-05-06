<template lang="pug">
  <div id="availableassets">
    <a-card>
      <header>
        <span  class="tit1">{{$t('asset.asset04')}}</span>
        <a-dropdown>
          <a-menu slot="overlay">
              <a-menu-item :key="index" v-for="(item,index) in currency_list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px" >{{defaultcurrency}}<a-icon type="down" /> </a-button>
        </a-dropdown>
      </header>
      <section>
        <p class="tit2">{{$t('assetoverview.assetoverview01')}}</p>
        <p class="text">{{total.total}}&nbsp;{{defaultcurrency}}</p>
      </section>       
      <div class="button_area">
        <a-button><router-link to="/asset/extractcoin">{{$t('assetoption.assetoption03')}}</router-link></a-button>
        <a-button><router-link to="/asset/assetbills">{{$t('assetoption.assetoption04')}}</router-link></a-button>
      </div>
    </a-card>
    <br />
    <div class="filter">
      <div class="searchBox">
        <div class="search">
          <div class="icon">
            //- <img src="../../image/svg/search.svg" alt="" />
          </div>
          <a-input-search :placeholder="$t('assetoption.assetoption05')" v-model="filterText" type="text" />
        </div>
        <a-checkbox @change="onChange">{{$t('assetoption.assetoption06')}}</a-checkbox>
      </div>
    </div>
    <a-table :columns="columns" :dataSource="filterList" >
      <span slot="action" slot-scope="text, record">
        <a>{{$t('assetoption.assetoption03')}}</a>
        <a-divider type="vertical" />
        <a>{{$t('assetoption.assetoption04')}}</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </span>
    </a-table>
  </div> 
</template>

<script>
import { setup } from '@/locales';
import {mapGetters} from 'vuex';
import { changeCurrency,getAssetList } from '@/script/api';

export default {
  data() {
    return {
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      columns:[],
      columns1:[],
      columns2:[
        {
          title: this.$t('assetoverview.assetoverview11'),
          dataIndex: 'coin',
          key: 'coin'
        },
        {
          title: this.$t('assetoverview.assetoverview14'),
          dataIndex: 'available',
          key: 'available'
        },
        {
          title: this.$t('assetoverview.assetoverview15'),
          dataIndex: 'freeze',
          key: 'freeze'
        },
        {
          title: this.$t('assetoverview.assetoverview16'),
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
      filterText:"",
      isHide:false
    };
  },
  created(){
    this.columns1 =  [
        {
          title: this.$t('assetoverview.assetoverview11'),
          dataIndex: 'coin',
          key: 'coin'
        },
        {
          title: this.$t('assetoverview.assetoverview12'),
          dataIndex: 'total',
          key: 'total'
        },
        {
          title: this.$t('assetoverview.assetoverview13')+`(${this.defaultcurrency})`,
          dataIndex: 'valuation',
          key: 'valuation'
        },
        {
          title: this.$t('assetoverview.assetoverview14'),
          dataIndex: 'available',
          key: 'available'
        },
        {
          title: this.$t('assetoverview.assetoverview15'),
          dataIndex: 'freeze',
          key: 'freeze'
        },
        {
          title: this.$t('assetoverview.assetoverview16'),
          key: 'action',
          scopedSlots: { customRender: 'action' },
        }
      ];
    this.columns = this.deviceType==='desktop'?this.columns1:this.columns2;
  },
  computed: {
    ...mapGetters(['currency_list','defaultcurrency','total','lang','coin_list','deviceType']),
    filterList() {
      var _this = this;
      return this.coin_list.filter(function(e) {
        if(_this.isHide){
          return e.valuation > 0
        }
        if (!_this.filterText) return e;
        if (!e.coin) return;
        return (
          e.coin.slice(0, _this.filterText.length) === _this.filterText.toUpperCase()
        );
      });
    },
  },
  methods: {
    checkcurrency(index) {
      this.$store.state.asset.defaultcurrency = this.currency_list[index];
      changeCurrency({currency:this.defaultcurrency}).then((res) => {
        console.log(res);
        this.columns1 =  [
          {
            title: this.$t('assetoverview.assetoverview11'),
            dataIndex: 'coin',
            key: 'coin'
          },
          {
            title: this.$t('assetoverview.assetoverview12'),
            dataIndex: 'total',
            key: 'total'
          },
          {
            title: this.$t('assetoverview.assetoverview13')+`(${this.defaultcurrency})`,
            dataIndex: 'valuation',
            key: 'valuation'
          },
          {
            title: this.$t('assetoverview.assetoverview14'),
            dataIndex: 'available',
            key: 'available'
          },
          {
            title: this.$t('assetoverview.assetoverview15'),
            dataIndex: 'freeze',
            key: 'freeze'
          },
          {
            title: this.$t('assetoverview.assetoverview16'),
            key: 'action',
            scopedSlots: { customRender: 'action' },
          }
        ];
        this.columns = this.deviceType==='desktop'?this.columns1:this.columns2;
      }).then(()=>{
        getAssetList().then((res)=>{
          const {datas} = res;
          if(datas.hasOwnProperty('error')){
              return
          }
          this.$store.state.asset.total = this.gettotal(datas.asset.asset_total,datas.balance.balance_total,datas.deposit.valuation,datas.total);
          this.$store.state.asset.coin_list = this.getcoin_list(datas.asset.asset_list);
          this.$store.state.asset.balance_list = this.getbalance_list(datas.balance.balance_list);
        });
      })
      
    }, 
    getcoin_list:function(datas){
      var coin_list = [];
      for(let i=0;i<datas.length;i++){
        if(coin_list.length<datas.length){
          coin_list.push({id:'',coin:'',total:"",available:"",freeze:""});
          coin_list[i].id = i;
          coin_list[i].coin =datas[i].coin;
          coin_list[i].total =datas[i].total_num;
          coin_list[i].available =datas[i].num_avail;
          coin_list[i].freeze =datas[i].num_freeze;
          coin_list[i].valuation =datas[i].unify_price;
        }      
      };
      return coin_list;
    },
    getbalance_list:function(datas){
      var balance_list=[];
      for(let i=0;i<datas.length;i++){
        if(balance_list.length<datas.length){
          balance_list.push({id:'',coin:'',total:"",available:"",freeze:""});
          balance_list[i].coin =datas[i].currency;
          balance_list[i].total =datas[i].total_num;
          balance_list[i].available =datas[i].money_avail;
          balance_list[i].freeze =datas[i].money_freeze;
          balance_list[i].valuation =datas[i].unify_price;
        }
      };
      return balance_list;
    },
    gettotal:function(total1,total2,total3,total4){
      var total ={};
      total.asset_total =total1;
      total.balance_total = total2;
      total.deposit = total3;
      total.total = total4;
      return total;
    },
    onChange(e) {
      this.isHide = e.target.checked;
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
