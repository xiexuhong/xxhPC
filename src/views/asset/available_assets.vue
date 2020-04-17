<template lang="pug">
  <div id="availableassets">
    <a-card>
      <header>
        <span>法币资产</span>
        <a-dropdown>
          <a-menu slot="overlay">
              <a-menu-item :key="index" v-for="(item,index) in list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px" >{{coin==''?defaultcurrency:coin}}<a-icon type="down" /> </a-button>
        </a-dropdown>
      </header>
      </header>
      <section>
        <p>总资产（估值）：<span>48541515</span></p>
      </section>
      <div>     
        <template>
          <div>
            <a-descriptions bordered :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
              <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
              <a-descriptions-item label="Billing">Prepaid</a-descriptions-item>
              <a-descriptions-item label="Time">18:00:00</a-descriptions-item>
              <a-descriptions-item label="Amount">$80.00</a-descriptions-item>
              <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
              <a-descriptions-item label="Official">$60.00</a-descriptions-item>
            </a-descriptions>
          </div>
        </template>
        <div class="button_area">
          <a-button><router-link to="/asset/recharge">充值</router-link></a-button>
          <a-button><router-link to="/asset/withdraw">提现</router-link></a-button>
          <a-button><router-link to="/asset/recharge">账单</router-link></a-button>
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
import {mapState} from 'vuex'
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];
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
          title: '折合USD',
          dataIndex: 'USD',
          key: 'USD',
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
          dataIndex: 'freze',
          key: 'freze',
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
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
      filterText:"",
      isHide:false,
      coin:""
    };
  },
  computed: 
    mapState({
        list(e){
          return e.asset.currencylist;
        },
        defaultcurrency(e){
          return e.asset.defaultcurrency;
        },
    }),
  methods: {
    checkcurrency(index) {
      this.coin = this.list[index];
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
  },
  created() {
    console.log(this.$route.query);
  },
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
