<template>
  <div class="contractItemContainer">
    <div class="contractItemChoose">
      <ul>
        <li>
          <label class="chooseTitle">矿机类型:</label>
          <a-radio-group v-model="chioce.type" @change="onChoiceChange">
            <a-radio-button value="all">全部</a-radio-button>
            <a-radio-button value="PT">单挖</a-radio-button>
            <a-radio-button value="SW">双挖</a-radio-button>
          </a-radio-group>
        </li>
        <li>
          <label class="chooseTitle">合约状态:</label>
          <a-radio-group v-model="chioce.workType" @change="onChoiceChange">
            <a-radio-button value="all">全部</a-radio-button>
            <a-radio-button value="KW">在挖</a-radio-button>
            <a-radio-button value="DW">待挖</a-radio-button>
            <a-radio-button value="TZ">退单</a-radio-button>
          </a-radio-group>
        </li>
        <li>
          <label class="chooseTitle">锁定期限:</label>
          <a-radio-group v-model="chioce.dateType" @change="onChoiceChange">
            <a-radio-button value="all">全部</a-radio-button>
            <a-radio-button value="30">30天</a-radio-button>
            <a-radio-button value="90">90天</a-radio-button>
            <a-radio-button value="180">180天</a-radio-button>
          </a-radio-group>
        </li>
        <li>
          <label class="chooseTitle">订单类型:</label>
          <a-radio-group v-model="chioce.payType" @change="onChoiceChange">
            <a-radio-button value="all">全部</a-radio-button>
            <a-radio-button value="P">购买</a-radio-button>
            <a-radio-button value="S">承接</a-radio-button>
          </a-radio-group>
        </li>
      </ul>
    </div>
    <div class="contractItemTable">
      <a-table
        :columns="columns"
        :dataSource="datas"
        :pagination="{
          pageSizeOptions: ['10', '20', '30', '40'],
          showSizeChanger: true,
          onChange: onPageChange,
          total: totalNum,
        }"
        :rowKey="record => record.id"
        :loading="tableLoading"
      >
        <span slot="deposit" slot-scope="text, record">
          {{ record.allow_cancel == 2 ? record.continue_total_deposit_coin :
          (record.work_state != 0 ? record.raw_total_deposit :
          record.total_deposit) }}{{ record.pay_currency }}
        </span>
        <span slot="regularDateNum" slot-scope="text">{{ text }}天</span>
        <a-popover placement="rightTop" slot="computingPower" slot-scope="text, record">
          <div slot="title">
            <p style="color:#595959;textAlign:center">算力构成</p>
            <p style="color:#999999;textAlign:center">{{ record.computingPower * record.num }}T</p>
          </div>
          <div slot="content">
            <ul>
              <li>
                <span>基础算力</span>
                <span>{{ record.basePower * record.num }}T</span>
              </li>
              <li>
                <span>浮动算力</span>
                <span>{{ (record.floatPower * record.num).toFixed(2) }}T</span>
              </li>
              <li>
                <span>达标算力</span>
                <span>{{ record.pePower * record.num }}T</span>
              </li>
              <li>
                <span>期货算力</span>
                <span>{{ record.futuresPower * record.num }}T</span>
              </li>
              <li>
                <span>定期算力</span>
                <span>{{ record.regularPower * record.num }}T</span>
              </li>
              <li v-if="record.inviterPower > 0">
                <span>邀请算力</span>
                <span>{{ record.inviterPower * record.num }}T</span>
              </li>
              <li v-if="record.tdPower > 0">
                <span>成长算力</span>
                <span>{{ record.tdPower * record.num }}T</span>
              </li>
              <li v-if="record.couponPower > 0">
                <span>优惠券算力</span>
                <span>{{ record.couponPower * record.num }}T</span>
              </li>
            </ul>
          </div>
          <span class="totalHashrate">{{ record.computingPower * record.num }}T</span>
        </a-popover>
        <span class="action" slot="action" slot-scope="text, record">
          <!-- 暂时不出
            <router-link
            to="/hashrateContract/hashrateTransfer"
            v-show="record.work_state != 0|| record.returnable == 0"
            @click.native="setSingleContract(record)"
          >转让</router-link>-->
          <router-link
            :to="{
            path: '/hashrateContract/contractList/orderFade',
            query: {
              orderId: record.orderId
            }
          }"
          >退单</router-link>
          <router-link
            :to="{
            path: '/hashrateContract/contractList/orderReorder',
            query: {
              orderId: record.orderId
            }
          }"
          >{{ record.isRegular == '1' && record.allow_renewal == true ? '续单' : '转期' }}</router-link>
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
import { getContractList } from '@/script/api';
export default {
  props: ['rentedList'],
  data() {
    return {
      datas: [], //  单元格数据
      columns: [], //  表头
      totalNum: 0, //  列表总数
      chioce: {
        //  筛选选项
        type: 'all', //  矿机类型
        workType: 'all', //  合约状态
        dateType: 'all', //  锁定期限
        payType: 'all', //  订单类型
      },
      tableLoading: false, //  数据加载过程中状态loading
    };
  },
  created() {
    //  表格表头
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '金额',
        dataIndex: 'deposit',
        scopedSlots: { customRender: 'deposit' },
      },
      {
        title: '到手总算力',
        dataIndex: 'computingPower',
        width: '10%',
        scopedSlots: { customRender: 'computingPower' },
      },
      {
        title: '合约期限',
        dataIndex: 'regularDateNum',
        scopedSlots: { customRender: 'regularDateNum' },
        width: '7%',
      },
      {
        title: '合约状态',
        dataIndex: 'display_status',
        width: '7%',
      },
      {
        title: '开挖时间',
        dataIndex: 'time_income',
      },
      {
        title: '下单时间',
        dataIndex: 'time_creat',
      },
      {
        title: '操作',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' },
        width: '12%',
      },
    ];
    this.columns = columns;
    // this.datas = this.rentedList;
    // console.log(this.datas);
  },
  //  不能放在created，因为props异步传输数据，created只工作一次，拿到的是父组件传入的初始值，不是直接请求到的数据，watch会监听数据变化，不会拿到空值
  watch: {
    rentedList() {
      this.tableLoading = true;
      this.datas = this.rentedList.rented_list;
      this.totalNum = Number(this.rentedList.totalNum);
      // console.log(this.datas);
      this.tableLoading = false;
    },
  },
  methods: {
    //  筛选数据
    onChoiceChange() {
      this.tableLoading = true;
      //  获取选项发送请求，获取数据
      getContractList({
        page: '1',
        type: this.chioce.type,
        work_type: this.chioce.workType,
        date_type: this.chioce.dateType,
        pay_type: this.chioce.payType,
      }).then(resp => {
        this.datas = resp.datas.rented_list;
        // console.log(this.datas);
        this.tableLoading = false;
      });
    },
    //  页码变化
    onPageChange(page) {
      this.tableLoading = true;
      // this.page = page;
      //  获取选项发送请求，获取数据
      getContractList({
        page: page,
        type: this.chioce.type,
        work_type: this.chioce.workType,
        date_type: this.chioce.dateType,
        pay_type: this.chioce.payType,
      }).then(resp => {
        this.datas = resp.datas.rented_list;
        // console.log(this.datas);
        this.tableLoading = false;
      });
    },
    //  乘法
    mult: (power, num) => (power * num).toFixed(2),
  },
};
</script>

<style lang="scss" scoped>
.contractItemContainer {
  width: 100%;
  .contractItemChoose {
    width: 100%;
    margin-bottom: 15px;
    background-color: #ffffff;
    padding: 20px;
    ul {
      width: 100%;
      li {
        display: block;
        width: 100%;
        color: #595959;
        font-size: 14px;
        margin-bottom: 8px;
        .chooseTitle {
          display: inline-block;
          width: 100px;
        }
      }
    }
  }
  .contractItemTable {
    background-color: #ffffff;
    padding: 20px;
    font-size: 12px;
    /deep/td {
      padding: 16px 5px;
    }
    /deep/.ant-table-thead > tr > th {
      background-color: #ffffff;
    }
    .totalHashrate {
      color: #ffab32;
      border-bottom: 1px solid #ffab32;
      cursor: pointer;
    }
    .action a {
      display: inline-block;
      color: #ffab32;
      margin: 5px 2px;
    }
    /deep/ .ant-pagination-item-active {
      border: none;
      background-color: #ffab32;
      a {
        color: #ffffff;
      }
    }
    /deep/.ant-select-open .ant-select-selection {
      border-color: #999999;
      box-shadow: none;
    }
    /deep/.ant-select-focused .ant-select-selection,
    /deep/.ant-select-selection:hover,
    /deep/.ant-select-selection:focus,
    /deep/.ant-select-selection:active,
    /deep/.ant-select-focused {
      border-color: #ffab32;
    }
    /deep/.ant-select-dropdown-menu-item-selected,
    /deep/.ant-select-dropdown-menu-item:hover:not(.ant-select-dropdown-menu-item-disabled) {
      background-color: #ffab32;
      color: #ffffff;
    }
  }
}
.ant-popover-inner {
  width: 100%;
  border-bottom: 1px solid #f4f4f6;
  .ant-popover-inner-content {
    color: #999999;
    ul {
      width: 100%;
      li {
        height: 2em;
        span {
          display: inline-block;
          width: 50%;
          text-align: center;
        }
      }
    }
  }
}
.ant-radio-button-wrapper {
  border: none;
  box-shadow: none;
  margin-right: 5px !important;
}
.ant-radio-button-wrapper:hover {
  color: #ffab32;
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  color: #ffab32 !important;
  box-shadow: none;
}
.ant-radio-button-wrapper > .ant-radio-button,
.ant-radio-button-wrapper:not(:first-child)::before {
  display: none;
}
@media screen and (max-width: 500px) {
  .contractItemContainer {
    .contractItemChoose {
      margin-bottom: 5px;
      padding: 5px;
      ul {
        li {
          font-size: 10px;
          margin-bottom: 5px;
        }
      }
    }
    .contractItemTable {
      padding: 10px;
      font-size: 10px;
      overflow: scroll;
      /deep/td {
        padding: 5px 1px;
      }
      .action a {
        display: block;
        color: #ffab32;
        margin: 5px 10px;
        padding: 5px 10px;
        width: 100%;
      }
    }
  }
  /deep/.ant-pagination-options {
    display: inline-block;
  }
}
</style>
