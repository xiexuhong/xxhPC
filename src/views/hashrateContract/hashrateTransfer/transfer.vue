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
          <span>待承接</span>
          <span>转让成功</span>
        </li>
      </ul>
    </div>
    <div class="contractItemTable">
      <a-table :columns="columns" :dataSource="data" :defaultPageSize="5">
        <a-popover placement="rightTop" slot="transferHashrate" slot-scope="text">
          <div slot="title">
            <p style="color:#595959;textAlign:center">总算力</p>
            <p style="color:#999999;textAlign:center">1.00T</p>
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
          <span class="transferHashrate">{{ text }}</span>
        </a-popover>
        <span class="action" slot="action">
          <a @click="() => (chargeVisible = true)">撤销</a>
          <div class="hashrateNodal">
            <a-modal
              title="撤销"
              centered
              v-model="chargeVisible"
              okText="确定撤销"
              cancelText="取消"
              width="350px"
              @ok="() => (chargeVisible = false)"
            >
              <p style="textAlign:center">您确定要撤消转让吗？</p>
            </a-modal>
          </div>
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
    title: '转让金额',
    dataIndex: 'transferAmount',
    key: 'transferAmount',
  },
  {
    title: '合约状态',
    dataIndex: 'contractState',
    key: 'contractState',
    scopedSlots: { customRender: 'totalHashrate' },
  },
  {
    title: '转让算力',
    key: 'transferHashrate',
    dataIndex: 'transferHashrate',
  },
  {
    title: '转让时间',
    dataIndex: 'transferTime',
    key: 'transferTime',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: '邀请赠送算力',
    transferAmount: '6000000.00 USD',
    contractState: '待承接',
    transferHashrate: '1.00T',
    transferTime: new Date().toString(),
  },
  {
    key: '2',
    name: '邀请赠送算力',
    transferAmount: '6000000.00 USD',
    contractState: '待承接',
    transferHashrate: '1.00T',
    transferTime: new Date().toString(),
  },
  {
    key: '3',
    name: '邀请赠送算力',
    transferAmount: '6000000.00 USD',
    contractState: '待承接',
    transferHashrate: '1.00T',
    transferTime: new Date().toString(),
  },
];
export default {
  data() {
    return {
      data,
      columns,
      chargeVisible: false, //点击弹窗隐藏/显示
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
    .transferHashrate {
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
/deep/ .ant-pagination-item-active {
  border: none;
  background-color: #ffab32;
  a {
    color: #ffffff;
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