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
              <a-button @click="choosetime(7)">{{$t('assetbills.assetbills03')}}</a-button>
              <a-button @click="choosetime(30)">{{$t('assetbills.assetbills04')}}</a-button>
              <a-button @click="choosetime(90)">{{$t('assetbills.assetbills05')}}</a-button>
            </div>
          </div>
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
          <a-descriptions-item label="类型">
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
    <a-table :columns="columns" :dataSource="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
      <span slot="action" slot-scope="text, record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </span>
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
          key: '1',
          coin: 'John Brown',
          total: 32,
          USD: 'New York No. 1 Lake Park',
          available: '25',
          freze: '7',
        },
      ],
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      columns: [
        {
          title: '时间',
          dataIndex: 'time',
          key: 'time',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.time
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
          title: '类型',
          dataIndex: 'type',
          key: 'type',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.type
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
              });
            }
          },
        },
        {
          title: '账户/提币地址',
          dataIndex: 'address',
          key: 'address',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.address
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
          title: '数量',
          dataIndex: 'number',
          key: 'number',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.number
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
          title: '状态',
          key: 'state',
          scopedSlots: { customRender: 'action' },
        },
      ],
      filterText:"",
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
        case 0: buttonnode[0].classList.add('fontcolor');break;
        case 7: buttonnode[1].classList.add('fontcolor');break;
        case 30: buttonnode[2].classList.add('fontcolor');break;
        case 90: buttonnode[3].classList.add('fontcolor');break;
      }
      console.log(buttonnode)
    },
    options(index){
      var buttonnode = document.querySelectorAll('.options>button');
      for(let item of buttonnode){
        item.classList.remove('fontcolor');
      }
      buttonnode[index].classList.add('fontcolor');
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
