<template lang="pug">  
  <main>
    <a-card>
      <div id="assetview">     
          <div class="left">
            <header>
              <span class="tit1">{{$t('asset.asset01')}}</span>
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
            <a-descriptions bordered :layout="layout">
              <a-descriptions-item :label="$t('assetoverview.assetoverview02')">{{total.total}}&nbsp;{{defaultcurrency}}</a-descriptions-item>
              <a-descriptions-item :label="$t('assetoverview.assetoverview03')">{{total.asset_total}}&nbsp;{{defaultcurrency}}</a-descriptions-item>
              <a-descriptions-item :label="$t('assetoverview.assetoverview04')">{{total.deposit}}&nbsp;{{defaultcurrency}}</a-descriptions-item>
            </a-descriptions>
            <div class="button_area">
              <a-button><router-link to="/asset/recharge">{{$t('assetoption.assetoption01')}}</router-link></a-button>
              <a-button><router-link to="/asset/withdraw">{{$t('assetoption.assetoption02')}}</router-link></a-button>
              <a-button><router-link to="/asset/extractcoin">{{$t('assetoption.assetoption03')}}</router-link></a-button>
              <a-button><router-link to="/asset/assetbills">{{$t('assetoption.assetoption04')}}</router-link></a-button>
            </div>
          </div>
          <div class="right" v-if="deviceType==='desktop'">
            <span class='tit3'>{{$t('assetoverview.assetoverview05')}}</span>
            <button @click="getData(0)" class="normalData" :class="{'activeData':isWeek}">{{$t('assetoverview.assetoverview06')}}</button>
            <button @click="getData(1)" class="normalData" :class="{'activeData':isMonth}">{{$t('assetoverview.assetoverview07')}}</button>
            <p class='tit4'>{{$t('assetoverview.assetoverview08')}}（{{defaultcurrency}}）</p>
            <ve-line :data="chartData" :settings="chartSettings"  :extend="chartExtend" class="charts" height='300px' :tooltip-visible="false" :loading="loading" :legend-visible="false"></ve-line>
          </div>
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
    <a-table :dataSource="filterList" :columns="columns" >
    </a-table>
  </main> 
</template>

<script>
import { setup } from '@/locales';
import {mapState, mapGetters,mapMutations } from 'vuex';
import { getAssetList,ownCurrency,changeCurrency } from '@/script/api';
import 'v-charts/lib/style.css'
import { log } from 'util';
export default {
  data() {
    this.chartSettings = {
        area:true,
        itemStyle:{ //面积图颜色设置
          color:{
              type:'linear',
              x:0,
              y:0,
              x2:0,
              y2:1,
              colorStops:[
                  {
                      offset: 0,
                      color: '#FABF38', // 0% 处的颜色
                  }, 
                  {
                      offset: 1, 
                      color: '#FABF38' // 100% 处的颜色
                  },
              ],
              globalCoord: false // 缺省为 false
          }            
      },
    }
  
    return {
      chartExtend:{
        xAxis: {
          show:true,
          axisLabel:{
            interval:5
          }
        },
        yAxis: {
          show: false,
        }
      },
      isWeek: true,
      isMonth: false,
      loading: false,
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '2018-01-01', '访问用户': 193},
          { '日期': '2018-01-02', '访问用户': 35},
          { '日期': '2018-01-03', '访问用户': 29},
          { '日期': '2018-01-05', '访问用户': 17},
          { '日期': '2018-01-10', '访问用户': 32},
          { '日期': '2018-01-13', '访问用户': 53},
          { '日期': '2018-01-20', '访问用户': 43}
        ]
      },
      columns: [],
      columns1:[],
      columns2: [
        {
          title: this.$t('assetoverview.assetoverview11'),
          dataIndex: 'coin',
          key: 'coin',
        },
        {
          title: this.$t('assetoverview.assetoverview14'),
          dataIndex: 'available',
          key: 'available',
        },
        {
          title: this.$t('assetoverview.assetoverview15'),
          dataIndex: 'freeze',
          key: 'freeze',
        },
      ],
      filterText:"",
      isHide:false,
      langArr:""
    };
  },
  created(){
    this.columns1= [
        {
          title: this.$t('assetoverview.assetoverview11'),
          dataIndex: 'coin',
          key: 'coin',
        },
        {
          title: this.$t('assetoverview.assetoverview12'),
          dataIndex: 'total',
          key: 'total',
        },
        {
          title: this.$t('assetoverview.assetoverview13')+`(${this.defaultcurrency})`,
          dataIndex: 'valuation',
          key: 'valuation',
        },
        {
          title: this.$t('assetoverview.assetoverview14'),
          dataIndex: 'available',
          key: 'available',
        },
        {
          title: this.$t('assetoverview.assetoverview15'),
          dataIndex: 'freeze',
          key: 'freeze',
        },
      ];
    this.columns = this.deviceType==='desktop'?this.columns1:this.columns2;
    this.getData(0);
  },
  computed: {
    ...mapGetters(['currency_list','defaultcurrency','lang','total','asset_list','deviceType']),
    filterList() {
      var _this = this;
      return this.asset_list.filter(function(e) {
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
    layout(){
      var s = this.deviceType==='desktop'?'vertical':'horizontal';
      return  s
    }
  },
  methods: {
    checkcurrency(index) {
      var _this = this;
      _this.$store.state.asset.defaultcurrency = _this.currency_list[index];
      changeCurrency({currency:_this.defaultcurrency}).then((res) => {
          _this.columns1 = [
            {
              title: _this.$t('assetoverview.assetoverview11'),
              dataIndex: 'coin',
              key: 'coin',
            },
            {
              title: _this.$t('assetoverview.assetoverview12'),
              dataIndex: 'total',
              key: 'total',
            },
            {
              title: _this.$t('assetoverview.assetoverview13')+`(${_this.defaultcurrency})`,
              dataIndex: 'valuation',
              key: 'valuation',
            },
            {
              title: _this.$t('assetoverview.assetoverview14'),
              dataIndex: 'available',
              key: 'available',
            },
            {
              title: _this.$t('assetoverview.assetoverview15'),
              dataIndex: 'freeze',
              key: 'freeze',
            },
          ];
          _this.columns = _this.deviceType==='desktop'?_this.columns1:_this.columns2;
      }).then(()=>{
        getAssetList().then((res)=>{
        const {datas} = res;
        if(datas.hasOwnProperty('error')){
            return
        }
        console.log(datas);
        _this.$store.state.asset.total = _this.gettotal(datas.asset.asset_total,datas.balance.balance_total,datas.deposit.valuation,datas.total);
        _this.$store.state.asset.coin_list = _this.getcoin_list(datas.asset.asset_list);
        _this.$store.state.asset.balance_list = _this.getbalance_list(datas.balance.balance_list);
      });
      })
      
    }, 
    getData(index){
      if(index == 0){
        this.isWeek=true;
        this.isMonth=false;
        this.chartExtend.xAxis.axisLabel.interval=5
      }
      else{
        this.isWeek=false;
        this.isMonth=true;
        this.chartExtend.xAxis.axisLabel.interval=3
      }
      this.loading = true;
      // ajax get data ....
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    onChange(e) {
      this.isHide = e.target.checked;
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
#assetview{
  display: flex;
  align-items: center;
  .left{
    display: flex;
    flex-direction: column;
    .ant-descriptions{
      text-align: center;
    }
  }
  .right{
    flex: 1;
    text-align: right;
    .tit3{
      margin-right: 10px;
    }
    .tit4{
      color: #999999;
      font-size: 13px;
      line-height: 26px;
    }
    .charts{
      flex: 1;
      margin-left: 30px;
    }
    .normalData{
      width: 50px;
      height: 25px;
      border: 1px solid #EDAD0E;
      background-color: #fff;
    }
    .activeData{
      background-color: #FABF38;
      color: #fff;
    }
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
