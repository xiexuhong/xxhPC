<template lang="pug">
  <div id="availableassets">
    <a-card>
      <header>
        <span>资产账单</span>
        <a-dropdown>
          <a-menu slot="overlay">
              <a-menu-item :key="index" v-for="(item,index) in currency_list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px" >{{coin==''?defaultcurrency:coin}}<a-icon type="down" /></a-button>
        </a-dropdown>
      </header>
      <section>
        <p>总资产（估值）：<span>48541515</span></p>
      </section>
      <div>     
        <a-descriptions :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
          <a-descriptions-item label="时间">
          <div class="timing">
            <input type="date" v-model = "starttime"/><span>——</span><input type="date" v-model = "endtime"/>
            <div class="button_area time">
              <a-button class="fontcolor" @click="choosetime(0)">今天</a-button>
              <a-button @click="choosetime(7)">最近一周</a-button>
              <a-button @click="choosetime(30)">最近一月</a-button>
              <a-button @click="choosetime(90)">最近三月</a-button>
            </div>
          </div>
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
          <a-descriptions-item label="类型">
            <div class="button_area options">
              <a-button class="fontcolor" @click="options(0)">全部</a-button>
              <a-button @click="options(1)">充值</a-button>
              <a-button @click="options(2)">提现</a-button>
              <a-button @click="options(3)">提币</a-button>
              <a-button @click="options(4)">转入（BHP分红账户）</a-button>
              <a-button @click="options(5)">转出（BHP分红账户）</a-button>
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
import { changeCurrency } from '@/script/api';
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
      coin:'',
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
  },
  computed:{
    ...mapGetters(['currency_list','defaultcurrency','lang',,'coin_list','balance_list','assetList']),
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
header {
  margin-bottom: 15px;
  span {
    font-size: 18px;
    font-weight: bolder;
  }
}
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
