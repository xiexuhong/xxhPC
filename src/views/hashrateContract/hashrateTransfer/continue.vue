<template>
  <div class="contractItemContainer">
    <div class="contractItemChoose">
      <ul>
        <li>
          <span>矿机类型:</span>
          <span class="all">全部</span>
          <span>单挖</span>
          <span>双挖</span>
        </li>
        <li>
          <span>合约状态:</span>
          <span class="all">全部</span>
          <span>在挖</span>
          <span>待挖</span>
          <span>退单</span>
        </li>
        <li>
          <span>锁定期限:</span>
          <span class="all">全部</span>
          <span>30天</span>
          <span>90天</span>
          <span>180天</span>
        </li>
      </ul>
    </div>
    <div class="contractItemTable">
      <a-table :columns="columns" :dataSource="data" :defaultPageSize="5">
        <a-popover placement="rightTop" slot="totalHashrate" slot-scope="text">
          <div slot="title">
            <p style="color:#595959;textAlign:center">算力构成</p>
            <p style="color:#999999;textAlign:center">720T=200.00+520.00</p>
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
          <span class="totalHashrate">{{ text }}</span>
        </a-popover>
        <span class="action" slot="action">
          <router-link to @click.native="$router.go(0)">转让</router-link>
          <router-link to="/hashrateContract/contractList/orderFade">退单</router-link>
          <router-link to="/hashrateContract/contractList/orderReorder">续单</router-link>
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '金额',
    dataIndex: 'amountOfMoney',
    key: 'amountOfMoney',
  },
  {
    title: '到手总算力',
    dataIndex: 'totalHashrate',
    key: 'totalHashrate',
    width: '10%',
    scopedSlots: { customRender: 'totalHashrate' },
  },
  {
    title: '合约期限',
    key: 'contractDate',
    dataIndex: 'contractDate',
    width: '7%',
  },
  {
    title: '合约状态',
    dataIndex: 'contractState',
    key: 'contractState',
    width: '7%',
  },
  {
    title: '开挖时间',
    dataIndex: 'beginTime',
    key: 'beginTime',
  },
  {
    title: '下单时间',
    dataIndex: 'orderTime',
    key: 'orderTime',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
    width: '12%',
  },
];

const data = [
  {
    key: '1',
    name: '邀请赠送算力',
    amountOfMoney: '6000000.00 USD',
    totalHashrate: '660.00T',
    contractDate: '600天',
    contractState: '正常',
    beginTime: new Date().toString(),
    orderTime: new Date().toString(),
  },
  {
    key: '2',
    name: '邀请赠送算力',
    amountOfMoney: '6000000.00 USD',
    totalHashrate: '660.00T',
    contractDate: '600天',
    contractState: '正常',
    beginTime: new Date().toString(),
    orderTime: new Date().toString(),
  },
  {
    key: '3',
    name: '邀请赠送算力',
    amountOfMoney: '6000000.00 USD',
    totalHashrate: '660.00T',
    contractDate: '600天',
    contractState: '正常',
    beginTime: new Date().toString(),
    orderTime: new Date().toString(),
  },
];
export default {
  data() {
    return {
      data,
      columns,
    };
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
        display: inline-block;
        width: 100%;
        color: #595959;
        font-size: 14px;
        margin-bottom: 8px;
        span {
          display: inline-block;
          width: 8%;
          &.all {
            color: #ffab32;
            margin-left: 10px;
          }
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
    /deep/ .ant-pagination-item-active {
      border: none;
      background-color: #ffab32;
      a {
        color: #ffffff;
      }
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
          span {
            width: 15%;
          }
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