<template>
  <div class="contractListContainer">
    <div class="listTitle">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>合约列表</a-breadcrumb-item>
        <a-breadcrumb-item>退单</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="listContent">
      <div class="contentInfo">
        <div class="flex infoTop">
          <span>
            <span class="infoTopTitle">名称</span>
            <span>算力宝</span>
          </span>
          <span>
            <span class="infoTopTitle">产币天数</span>
            <span>90</span>
          </span>
          <span>
            <span class="infoTopTitle">产币量</span>
            <span>0.3330095 BTC</span>
          </span>
          <span>
            <span class="infoTopTitle">距离结算天数</span>
            <span style="color:#FFAB32">0</span>
          </span>
          <span>
            <span class="infoTopTitle">合约周期</span>
            <span style="color:#FFAB32">90天</span>
          </span>
          <span class="timeSet">
            <span class="infoTopTitle">生效时间</span>
            <span>{{new Date().toString()}}</span>
          </span>
          <span>
            <span class="infoTopTitle">锁定算力指数</span>
            <span>0.15587253 USD/T*D</span>
          </span>
        </div>
        <div class="flex infoBottom">
          <span>
            <span class="infoTopTitle">止损率</span>
            <span>90%</span>
          </span>
          <span>
            <span class="infoTopTitle">止损价</span>
            <span>9000.0000 USDT</span>
          </span>
          <span>
            <span class="infoTopTitle">止盈率</span>
            <span>200%</span>
          </span>
          <span>
            <span class="infoTopTitle">止盈价</span>
            <span>20000.0000 USDT</span>
          </span>
          <span>
            <span class="infoTopTitle">合约费用</span>
            <span>25.00 USD</span>
          </span>
          <span class="timeSet">
            <span class="infoTopTitle">结算时间</span>
            <span>{{new Date().toString()}}</span>
          </span>
          <span class="timeSet">
            <span class="infoTopTitle">下单时间</span>
            <span>{{new Date().toString()}}</span>
          </span>
        </div>
      </div>
      <div class="contentTable">
        <p class="tableTitle">关联算力包</p>
        <div class="table">
          <a-table
            :columns="columns"
            :dataSource="data"
            :pagination="{
          pageSizeOptions: ['10', '20', '30', '40'],
          showSizeChanger: true,
        }"
          >
            <span class="state" slot="state" style="color:#1EA584">挖矿中</span>
          </a-table>
        </div>
      </div>
      <div class="contentTotal">
        <p class="totalTitle">结算统计</p>
        <div class="totalInfo">
          <span>
            <span class="infoTopTitle">算力产出</span>
            <span>0.03330095 BTC</span>
          </span>
          <span>
            <span class="infoTopTitle">结算币值</span>
            <span>21043.56 USD</span>
          </span>
          <span>
            <span class="infoTopTitle">产出率</span>
            <span>210%</span>
          </span>
          <span>
            <span class="infoTopTitle">结算类型</span>
            <span>止盈债回购</span>
          </span>
          <span>
            <span class="infoTopTitle">结算率</span>
            <span>200%</span>
          </span>
          <span>
            <span class="infoTopTitle">实际结算</span>
            <span>667.40051369 USDT</span>
          </span>
          <span class="timeSet" style="textAlign:right">
            <span class="infoTopTitle">结算时间</span>
            <span>{{new Date().toString()}}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: '订单号',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
    width: '18%',
  },
  {
    title: '算力包',
    dataIndex: 'hashratePack',
    key: 'hashratePack',
    width: '8%',
  },
  {
    title: '总金额',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
    width: '10%',
  },
  {
    title: '总算力',
    key: 'totalHashrate',
    dataIndex: 'totalHashrate',
    width: '8%',
  },
  {
    title: '基础算力',
    dataIndex: 'baseHashrate',
    key: 'baseHashrate',
    width: '8%',
  },
  {
    title: '奖励算力',
    dataIndex: 'awardHashrate',
    key: 'awardHashrate',
    width: '8%',
  },
  {
    title: '开挖时间',
    dataIndex: 'beginTime',
    key: 'beginTime',
  },
  {
    title: '锁定时间',
    dataIndex: 'lockTime',
    key: 'lockTime',
  },
  {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
    scopedSlots: { customRender: 'state' },
  },
];

const data = [
  {
    key: '1',
    ordernumber: '2019123012831237128',
    hashratePack: 'BTC 90天算力包',
    totalAmount: '4250.00 USD',
    totalHashrate: '10T',
    baseHashrate: '5T',
    awardHashrate: '5T',
    beginTime: new Date().toString(),
    lockTime: new Date().toString(),
  },
  {
    key: '2',
    ordernumber: '2019123012831237128',
    hashratePack: 'BTC 90天算力包',
    totalAmount: '4250.00 USD',
    totalHashrate: '10T',
    baseHashrate: '5T',
    awardHashrate: '5T',
    beginTime: new Date().toString(),
    lockTime: new Date().toString(),
  },
  {
    key: '3',
    ordernumber: '2019123012831237128',
    hashratePack: 'BTC 90天算力包',
    totalAmount: '4250.00 USD',
    totalHashrate: '10T',
    baseHashrate: '5T',
    awardHashrate: '5T',
    beginTime: new Date().toString(),
    lockTime: new Date().toString(),
  },
  {
    key: '4',
    ordernumber: '2019123012831237128',
    hashratePack: 'BTC 90天算力包',
    totalAmount: '4250.00 USD',
    totalHashrate: '10T',
    baseHashrate: '5T',
    awardHashrate: '5T',
    beginTime: new Date().toString(),
    lockTime: new Date().toString(),
  },
  {
    key: '5',
    ordernumber: '2019123012831237128',
    hashratePack: 'BTC 90天算力包',
    totalAmount: '4250.00 USD',
    totalHashrate: '10T',
    baseHashrate: '5T',
    awardHashrate: '5T',
    beginTime: new Date().toString(),
    lockTime: new Date().toString(),
  },
  {
    key: '6',
    ordernumber: '2019123012831237128',
    hashratePack: 'BTC 90天算力包',
    totalAmount: '4250.00 USD',
    totalHashrate: '10T',
    baseHashrate: '5T',
    awardHashrate: '5T',
    beginTime: new Date().toString(),
    lockTime: new Date().toString(),
  },
  {
    key: '7',
    ordernumber: '2019123012831237128',
    hashratePack: 'BTC 90天算力包',
    totalAmount: '4250.00 USD',
    totalHashrate: '10T',
    baseHashrate: '5T',
    awardHashrate: '5T',
    beginTime: new Date().toString(),
    lockTime: new Date().toString(),
  },
  {
    key: '8',
    ordernumber: '2019123012831237128',
    hashratePack: 'BTC 90天算力包',
    totalAmount: '4250.00 USD',
    totalHashrate: '10T',
    baseHashrate: '5T',
    awardHashrate: '5T',
    beginTime: new Date().toString(),
    lockTime: new Date().toString(),
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
  padding: 20px;
  background-color: #ffffff;
  .listTitle {
    width: 100%;
    margin-bottom: 15px;
    .ant-breadcrumb {
      color: #ffab32;
      margin-bottom: 30px;
      font-size: 16px;
    }
  }
  .listContent {
    width: 100%;
    background-color: #ffffff;
    font-size: 14px;
    color: #262626;
    .contentInfo {
      width: 100%;
      background-color: #fafafa;
      padding: 20px;
      .flex {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        span {
          &.timeSet {
            width: 20%;
          }
          display: inline-block;
          &.infoTopTitle {
            color: #999999;
            width: 100%;
          }
        }
      }
      .infoTop {
        border-bottom: 1px solid #eeeeee;
      }
    }
    .contentTable {
      margin-top: 40px;
      .tableTitle {
        font-size: 16px;
      }
      .table {
        /deep/td {
          padding: 16px 5px;
        }
        /deep/.ant-table-thead > tr > th {
          background-color: #ffffff;
        }
      }
    }
    .contentTotal {
      width: 100%;
      margin-top: 20px;
      .totalTitle {
        font-size: 16px;
      }
      .totalInfo {
        background-color: #fafafa;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        span {
          margin-bottom: 10px;
          &.timeSet {
            width: 20%;
          }
          display: inline-block;
          &.infoTopTitle {
            color: #999999;
            width: 100%;
          }
        }
      }
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
  .contractListContainer {
    .listTitle {
      padding: 5px 10px 5px 10px;
      margin-bottom: 1px;
      .ant-breadcrumb {
        margin-bottom: 5px;
        font-size: 12px;
      }
    }
    .listContent {
      padding: 10px;
      font-size: 10px;
      .contentInfo {
        width: 100%;
        padding: 10px;
        .flex {
          span {
            margin-bottom: 5px;
            &.timeSet {
              width: 100%;
            }
          }
        }
        .infoTop {
          border-bottom: none;
        }
      }
      .contentTable {
        margin-top: 10px;
        .tableTitle {
          font-size: 12px;
        }
        .table {
          font-size: 10px;
          overflow: scroll;
          /deep/td {
            padding: 5px 1px;
          }
        }
      }
      .contentTotal {
        width: 100%;
        margin-top: 10px;
        .totalTitle {
          font-size: 16px;
        }
        .totalInfo {
          padding: 10px;
          span {
            margin-bottom: 5px;
            &.timeSet {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>