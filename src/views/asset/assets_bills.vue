<template lang="pug">
  <div id="assetbills">
    <a-card>
      <header>
        <span  class="tit1">{{$t('asset.asset05')}}</span>
        <a-dropdown>
          <a-menu slot="overlay">
              <a-menu-item :key="index" v-for="(item,index) in currency_list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px" >{{defaultcurrency}}<a-icon type="down" /></a-button>
        </a-dropdown>
      </header>
      <section>
        <p class="tit2">{{$t('assetoverview.assetoverview01')}}</p>
        <p class="text">{{total.total}}&nbsp;{{defaultcurrency}}</p>
      </section>       
      <div>     
        <a-descriptions :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
          <a-descriptions-item :label="$t('assetbills.assetbills01')">
          <div class="timing">
            <input type="date" v-model = "starttime"/><span>——</span><input type="date" v-model = "endtime"/>
            <div class="button_area time">
              <a-button class="fontcolor" @click="choosetime(0)">{{$t('assetbills.assetbills02')}}</a-button>
              <a-button @click="choosetime(6)">{{$t('assetbills.assetbills03')}}</a-button>
              <a-button @click="choosetime(30)">{{$t('assetbills.assetbills04')}}</a-button>
              <a-button @click="choosetime(90)">{{$t('assetbills.assetbills05')}}</a-button>
            </div>
          </div>
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
          <a-descriptions-item :label="$t('assetbills.assetbills06')">
            <div class="button_area options">
              <a-button class="fontcolor" @click="options(0)">{{$t('assetoption.assetoption07')}}</a-button>
              <a-button @click="options(1)">{{$t('assetoption.assetoption01')}}</a-button>
              <a-button @click="options(2)">{{$t('assetoption.assetoption02')}}</a-button>
              <a-button @click="options(3)">{{$t('assetoption.assetoption03')}}</a-button>
              <a-button @click="options(4)">{{$t('assetoption.assetoption08')}}</a-button>
              <a-button @click="options(5)">{{$t('assetoption.assetoption09')}}</a-button>
            </div>
          </a-descriptions-item>
        </a-descriptions>
        
      </div>
    </a-card>
    <br />
    <a-table :columns="columns" :dataSource="filterList">
    </a-table>
  </div> 
</template>

<script>
import { setup } from '@/locales';
import { mapGetters} from 'vuex';
import { changeCurrency,getBill } from '@/script/api';
export default {
  data() {
    return {
      data: [
        {
          time: '2020.4.24',
          type: 'withdraw',
          coin: 'usd',
          address: 'New York No. 1 Lake Park',
          number: '125',
          state: '审核中',
        },
        {
          time: '2020.4.20',
          type: 'rollin',
          coin: 'usdt',
          address: 'New York No. 1 Lake Park',
          number: '125',
          state: '审核中',
        },
        {
          time: '2020.4.17',
          type: 'recharge',
          coin: 'twd',
          address: 'New York No. 1 Lake Park',
          number: '125',
          state: '已支付',
        },
        {
          time: '2020.3.24',
          type: 'recharge',
          coin: 'usd',
          address: 'New York No. 1 Lake Park',
          number: '125',
          state: '成功',
        },
        {
          time: '2020.3.15',
          type: 'rollout',
          coin: 'usdt',
          address: 'New York No. 1 Lake Park',
          number: '125',
          state: '成功',
        },
        {
          time: '2020.1.30',
          type: 'getcoin',
          coin: 'BTC',
          address: 'New York No. 1 Lake Park',
          number: '125',
          state: '失败',
        },
      ],
      columns: [
        {
          title: this.$t('assetoverview.assetoverview09'),
          dataIndex: 'time',
          key: 'time'
        },
        {
          title: this.$t('assetoverview.assetoverview10'),
          dataIndex: 'type',
          key: 'type'
        },
        {
          title: this.$t('assetoverview.assetoverview11'),
          dataIndex: 'coin',
          key: 'coin'
        },
        {
          title: this.$t('assetoverview.assetoverview17'),
          dataIndex: 'address',
          key: 'address'
        },
        {
          title: this.$t('assetoverview.assetoverview18'),
          dataIndex: 'number',
          key: 'number'
        },
        {
          title: this.$t('assetoverview.assetoverview19'),
          dataIndex: 'state',
          key: 'state'
        },
      ],
      filterText:"",
      filterItem:"",
      starttime:'',
      endtime:'',
      isHide:false
    };
  },
  created() {
    var datetoday = new Date();
    var year = datetoday.getFullYear();
    var month = datetoday.getMonth()+1;
    var day = datetoday.getDate();
    while(4-year.length>0){
      year = '0'+year;
    }
    if(month<10){
      month = '0'+month;
    }
    if(day<10){
      day = '0'+day;
    }
    this.starttime = `${year+'-'+month+'-'+day}`;
    this.endtime = `${year+'-'+month+'-'+day}`;
    getBill().then((res)=>{
      const {datas} = res;
      console.log(datas)
    })
  },
  computed:{
    ...mapGetters(['currency_list','defaultcurrency','lang','coin_list','total']),
    filterList() {
      var _this = this;
      return this.data.filter(function(e) {
          var date = new Date(e.time);
          var startdate = new Date(_this.starttime);
          var enddate = new Date(_this.endtime);
          startdate.setDate(startdate.getDate() - 1);
          enddate.setDate(enddate.getDate() +1);
          return date.getTime()<enddate.getTime()&&date.getTime()>startdate.getTime();
      }).filter(function(e){
          var content ="";
          switch(_this.filterText){
            case 1:content="recharge";break;
            case 2:content="withdraw";break;
            case 3:content="getcoin";break;
            case 4:content="rollin";break;
            case 5:content="rolliout";break;
            default:content="";
          }
          return e.type.slice(0, content.length) === content.toLowerCase()
      });
    },
  },
  methods: {
    checkcurrency(index) {
      this.$store.state.asset.defaultcurrency = this.currency_list[index];
      changeCurrency({currency:this.defaultcurrency}).then((res) => {
          console.log(res);
      })
    }, 
    choosetime(days){
      var date = new Date();
      date.setDate(date.getDate() - days);
      var month = date.getMonth() + 1; //月份从0开始所以需要+1
      var day = date.getDate();
      if(month<10){
        month = '0'+month;
      }
      if(day<10){
        day = '0'+day;
      }
      this.starttime = date.getFullYear() + '-' + month + '-' + day;
      var buttonnode = document.querySelectorAll('.time>button');
      for(let item of buttonnode){
        item.classList.remove('fontcolor');
      }
      switch(days){
        case 0: buttonnode[0].classList.add('fontcolor');this.filterText = "0";break;
        case 7: buttonnode[1].classList.add('fontcolor');this.filterText = "7";break;
        case 30: buttonnode[2].classList.add('fontcolor');this.filterText = "30";break;
        case 90: buttonnode[3].classList.add('fontcolor');this.filterText = "90";break;
      }
      this.filterItem = "time";
    },
    options(index){
      var buttonnode = document.querySelectorAll('.options>button');
      for(let item of buttonnode){
        item.classList.remove('fontcolor');
      }
      buttonnode[index].classList.add('fontcolor');
      this.filterItem = "type";
      this.filterText = index;
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
    
    onPanelChange(value, mode) {
      // eslint-disable-next-line no-console
      console.log(value, mode);
    },
  }  
};
</script>

<style lang="scss" scoped>
.timing{
  display: flex;
}
.button_area {
  display: flex;
  button {
    border: none;
    box-shadow: none;
    color: #999999;
  }
  .fontcolor{
    color: #ffab32;
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
