<template>
  <div class="contractItemContainer">
    <div class="contractItemChoose">
      <ul>
        <li>
          <label class="chooseTitle">选择交互方式:</label>
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
        }"
        :rowKey="record => record.id"
      >
        <a-popover placement="rightTop" slot="totalHashrate" slot-scope="text">
          <div slot="title">
            <p style="color:#595959;textAlign:center">算力构成</p>
          </div>
          <div slot="content">
            <ul>
              <li>
                <span>基础算力</span>
                <span>5.00T</span>
              </li>
              <li>
                <span>浮动算力</span>
                <span>6.50T</span>
              </li>
              <li>
                <span>达标算力</span>
                <span>0.00T</span>
              </li>
              <li>
                <span>期货算力</span>
                <span>0.00T</span>
              </li>
              <li>
                <span>定期算力</span>
                <span>0.00T</span>
              </li>
              <li>
                <span>定期算力</span>
                <span>0.00T</span>
              </li>
            </ul>
          </div>
          <span class="totalHashrate">{{ text }} T</span>
        </a-popover>
        <span class="action" slot="action">
          <router-link to="/hashrateContract/hashrateTransfer">转让</router-link>
          <router-link to="/hashrateContract/contractList/orderFade">退单</router-link>
          <router-link to="/hashrateContract/contractList/orderReorder">续单</router-link>
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
import { getMinePowerContract } from '@/script/api';
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '金额',
    dataIndex: 'amountOfMoney',
    scopedSlots: { customRender: 'amountOfMoney' },
  },
  {
    title: '到手总算力',
    dataIndex: 'computing_power',
    width: '10%',
    scopedSlots: { customRender: 'totalHashrate' },
  },
  {
    title: '合约期限',
    dataIndex: 'contractDate',
    width: '7%',
  },
  {
    title: '合约状态',
    dataIndex: 'contractState',
    width: '7%',
  },
  {
    title: '开挖时间',
    dataIndex: 'beginTime',
  },
  {
    title: '下单时间',
    dataIndex: 'orderTime',
  },
  {
    title: '操作',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' },
    width: '12%',
  },
];
export default {
  props: ['rentedList'], //  继承的数据
  data() {
    return {
      datas: [], //  单元格数据
      columns, //  表头
      chioce: {
        //  筛选选项
        type: 'all', //  矿机类型
        workType: 'all', //  合约状态
        dateType: 'all', //  锁定期限
        payType: 'all', //  订单类型
      },
      pageNum: 1, //  表格页数
    };
  },
  // created() {
  //   this.datas = this.rentedList;
  //   console.log(this.datas);
  // },
  //  不能放在created，因为props异步传输数据，created只工作一次，拿到的是父组件传入的初始值，不是直接请求到的数据，watch会监听数据变化，不会拿到空值
  watch: {
    rentedList() {
      this.datas = this.rentedList;
      console.log(this.datas);
    },
  },
  methods: {
    //  筛选数据
    onChoiceChange() {
      //  获取选项发送请求，获取数据
      getMinePowerContract({
        page: this.pageNum,
        type: this.chioce.type,
        work_type: this.chioce.workType,
        date_type: this.chioce.dateType,
        pay_type: this.chioce.payType,
      }).then(resp => {
        this.datas = resp.datas.rented_list;
        console.log(this.datas);
      });
    },
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
        .ant-radio-button-wrapper {
          border: none;
          box-shadow: none;
        }
        .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),
        .ant-radio-button-wrapper:hover {
          color: #ffab32;
          box-shadow: none;
        }
        .ant-radio-button-wrapper > .ant-radio-button,
        .ant-radio-button-wrapper:not(:first-child)::before {
          display: none;
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
  }
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
}
</style>
