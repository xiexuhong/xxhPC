<template>
  <div class="contractListContainer">
    <div class="listTitle">
      <p>算力收益</p>
      <ul>
        <li>
          <span>BTC</span>
          <span class="listTitleContent">1.52377962</span>
        </li>
        <li>
          <span>BHP</span>
          <span class="listTitleContent">766.3224</span>
        </li>
      </ul>
    </div>
    <div class="listContent">
      <p class="contentTitle">挖矿收益</p>
      <div class="contentTable">
        <a-table
          :columns="columns"
          :dataSource="data"
          :pagination="{
          pageSizeOptions: ['10', '20', '30', '40'],
          showSizeChanger: true,
        }"
        ></a-table>
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: '产出日期',
    dataIndex: 'outputTime',
    key: 'outputTime',
  },
  {
    title: '总算力',
    dataIndex: 'totalHashrate',
    key: 'totalHashrate',
  },
  {
    title: '产出BTC(含冻结)',
    dataIndex: 'allOutputBTC',
    key: 'allOutputBTC',
  },
  {
    title: '合约冻结',
    key: 'contractFreeze',
    dataIndex: 'contractFreeze',
  },
  {
    title: '产出BHP',
    dataIndex: 'outputBHP',
    key: 'outputBHP',
  },
];

const data = [
  {
    key: '1',
    outputTime: new Date().toString(),
    totalHashrate: '3243.00T',
    allOutputBTC: '0.02607372 BTC≈24.80 USD',
    contractFreeze: '0.00000000 BTC≈0.00 USD',
    outputBHP: '17.8031 BHP≈1.93 USD',
  },
  {
    key: '2',
    outputTime: new Date().toString(),
    totalHashrate: '3243.00T',
    allOutputBTC: '0.02607372 BTC≈24.80 USD',
    contractFreeze: '0.00000000 BTC≈0.00 USD',
    outputBHP: '17.8031 BHP≈1.93 USD',
  },
  {
    key: '3',
    outputTime: new Date().toString(),
    totalHashrate: '3243.00T',
    allOutputBTC: '0.02607372 BTC≈24.80 USD',
    contractFreeze: '0.00000000 BTC≈0.00 USD',
    outputBHP: '17.8031 BHP≈1.93 USD',
  },
  {
    key: '4',
    outputTime: new Date().toString(),
    totalHashrate: '3243.00T',
    allOutputBTC: '0.02607372 BTC≈24.80 USD',
    contractFreeze: '0.00000000 BTC≈0.00 USD',
    outputBHP: '17.8031 BHP≈1.93 USD',
  },
  {
    key: '5',
    outputTime: new Date().toString(),
    totalHashrate: '3243.00T',
    allOutputBTC: '0.02607372 BTC≈24.80 USD',
    contractFreeze: '0.00000000 BTC≈0.00 USD',
    outputBHP: '17.8031 BHP≈1.93 USD',
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
.contractListContainer {
  width: 100%;
  .listTitle {
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
    margin-bottom: 15px;
    p {
      color: #262626;
      font-size: 24px;
    }
    ul {
      width: 100%;
      li {
        display: inline-block;
        width: 25%;
        color: #999999;
        text-align: center;
        border-right: 1px solid #999999;
        span {
          font-size: 18px;
          display: inline-block;
          width: 100%;
        }
        span.listTitleContent {
          font-size: 22px;
          color: #595959;
          font-weight: 500;
          margin-top: 10px;
        }
      }
    }
  }
  .listContent {
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
    .contentTitle {
      color: #262626;
      font-size: 18px;
      border-bottom: 1px solid #f4f4f6;
      padding-bottom: 20px;
    }
    .contentTable {
      background-color: #ffffff;
      font-size: 12px;
      /deep/td {
        padding: 16px 5px;
      }
      /deep/.ant-table-thead > tr > th {
        background-color: #ffffff;
      }
      /deep/.ant-pagination-item-active {
        border: none;
        background-color: #ffab32;
        a {
          color: #ffffff;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .contractListContainer {
    .listTitle {
      padding: 10px;
      margin-bottom: 10px;
      p {
        font-size: 15px;
      }
      ul {
        li {
          width: 50%;
          border-right: none;
          span {
            font-size: 10px;
          }
          span.listTitleContent {
            font-size: 10px;
            margin-top: 5px;
          }
        }
      }
    }
    .listContent {
      padding: 5px;
      .contentTitle {
        font-size: 12px;
        padding-bottom: 10px;
      }
      .contentTable {
        padding: 0;
        overflow: scroll;
      }
    }
  }
}
</style>