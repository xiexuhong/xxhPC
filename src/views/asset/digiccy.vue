<template lang="pug">
  <div id="availableassets">
    <a-card>
      <header>
        <span>数字资产</span>
        <a-dropdown>
          <a-menu slot="overlay">
              <a-menu-item :key="index" v-for="(item,index) in currency_list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px" >{{coin==''?defaultcurrency:coin}}<a-icon type="down" /> </a-button>
        </a-dropdown>
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
        <a-table :columns="columns" :dataSource="coin_list">
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
import {mapGetters} from 'vuex';
import { changeCurrency } from '@/script/api';

export default {
  data() {
    return {
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
          dataIndex: 'valuation',
          key: 'valuation',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.valuation
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
  computed: {
    ...mapGetters(['currency_list','defaultcurrency','lang',,'coin_list','balance_list','assetList']),
  },
  methods: {
    checkcurrency(index) {
      this.$store.state.asset.defaultcurrency = this.currencylist[index];
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
