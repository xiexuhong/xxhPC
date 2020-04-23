<template lang="pug">  
  <main>
    <a-card>
      <div id="assetview">     
          <div class="left">
            <header>
              <span class="tit1">资产总览</span>
              <a-dropdown>
                <a-menu slot="overlay">
                    <a-menu-item :key="index" v-for="(item,index) in currency_list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
                </a-menu>
                <a-button style="margin-left: 8px" >{{defaultcurrency}}<a-icon type="down" /> </a-button>
              </a-dropdown>
            </header>
            <section>
              <p class="tit2">总资产（估值）：</p>
              <p class="text">{{total.total}}&nbsp;{{defaultcurrency}}</p>
            </section>
            <a-descriptions bordered :layout="layout">
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
          <div class="right" v-if="deviceType==='desktop'">
            <span class='tit3'>资产趋势图</span>
            <button @click="getData(0)" class="normalData" :class="{'activeData':isWeek}">周</button>
            <button @click="getData(1)" class="normalData" :class="{'activeData':isMonth}">月</button>
            <p class='tit4'>净资产总额（{{defaultcurrency}}）</p>
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
          <a-input-search placeholder="input search text" v-model="filterText" type="text" />
        </div>
        <a-checkbox @change="onChange">隐藏零资产</a-checkbox>
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
          // splitLine:{show: false},   //去除网格线
          // axisTick:{ //y轴刻度线
          //   show:false
          // },
          // axisLine:{ //y轴
          //   show:false
          // }
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
      columns1: [
        {
          title: '币种',
          dataIndex: 'coin',
          key: 'coin',
        },
        {
          title: '总量',
          dataIndex: 'total',
          key: 'total',
        },
        {
          title: '估值',
          dataIndex: 'valuation',
          key: 'valuation',
        },
        {
          title: '可用',
          dataIndex: 'available',
          key: 'available',
        },
        {
          title: '冻结',
          dataIndex: 'freeze',
          key: 'freeze',
        },
      ],
      columns2: [
        {
          title: '币种',
          dataIndex: 'coin',
          key: 'coin',
        },
        {
          title: '可用',
          dataIndex: 'available',
          key: 'available',
        },
        {
          title: '冻结',
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
    this.columns = this.deviceType==='desktop'?this.columns1:this.columns2;
    this.getData(0);
    console.log(this.$t('myCome.myCome03'));
    getAssetList().then((res)=>{
      const {datas} = res;
      if(datas.hasOwnProperty('error')){
          return
      }
      this.$store.state.asset.assetMess = datas;
     });
     ownCurrency().then((res)=>{
       const {datas} = res;
       this.$store.state.asset.currency_list = datas.currency;
       this.$store.state.asset.defaultcurrency = datas.default;
     })
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
      this.$store.state.asset.defaultcurrency = this.currency_list[index];
      changeCurrency({currency:this.defaultcurrency}).then((res) => {
          console.log(res);
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
