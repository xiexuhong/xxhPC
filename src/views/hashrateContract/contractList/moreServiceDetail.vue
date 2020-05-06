<template>
  <div class="contractListContainer">
    <div class="listTitle">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>合约列表</a-breadcrumb-item>
        <a-breadcrumb-item>合约详情列表</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="listContent">
      <div class="contentInfo">
        <div class="flex infoTop">
          <span>
            <span class="infoTopTitle">名称</span>
            <span>{{ data.name }}</span>
          </span>
          <span>
            <span class="infoTopTitle">产币天数</span>
            <span>{{ data.period - data.surplus_days }} 天</span>
          </span>
          <span>
            <span class="infoTopTitle">产币量</span>
            <span>{{ data.product }} BTC ≈ {{ data.settle_price }} {{ data.user_currency }}</span>
          </span>
          <span>
            <span class="infoTopTitle">距离结算天数</span>
            <span style="color:#FFAB32">{{ data.surplus_days }} 天</span>
          </span>
          <span>
            <span class="infoTopTitle">合约周期</span>
            <span style="color:#FFAB32">{{ data.period }} 天</span>
          </span>
          <span class="timeSet">
            <span class="infoTopTitle">生效时间</span>
            <span>{{ data.start_time }}</span>
          </span>
          <span>
            <span class="infoTopTitle">锁定算力指数</span>
            <span>{{ data.power_index }} {{ data.currency }}/T*天</span>
          </span>
        </div>
        <div class="flex infoBottom">
          <span>
            <span class="infoTopTitle">止损率</span>
            <span>{{ data.low_limit }}%</span>
          </span>
          <span>
            <span class="infoTopTitle">止损价</span>
            <span>{{ data.low_price }} {{ data.currency }}</span>
          </span>
          <span>
            <span class="infoTopTitle">止盈率</span>
            <span>{{ data.high_limit }}%</span>
          </span>
          <span>
            <span class="infoTopTitle">止盈价</span>
            <span>{{ data.high_price }} {{ data.currency }}</span>
          </span>
          <span>
            <span class="infoTopTitle">合约费用</span>
            <span>{{ data.amount }} {{ data.currency }}</span>
          </span>
          <span class="timeSet">
            <span class="infoTopTitle">结算时间</span>
            <span>{{ data.settle_time }}</span>
          </span>
          <span class="timeSet">
            <span class="infoTopTitle">下单时间</span>
            <span>{{ data.create_at }}</span>
          </span>
        </div>
      </div>
      <div class="contentTable">
        <p class="tableTitle">关联算力包</p>
        <div class="table">
          <a-table
            :columns="columns"
            :dataSource="datass"
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
        <div class="totalInfo" v-if="data.settle_type">
          <span>
            <span class="infoTopTitle">算力产出</span>
            <span>{{ data.returns }} BTC ≈ {{ data.product_price }} {{ data.user_currency }}</span>
          </span>
          <span>
            <span class="infoTopTitle">结算币值</span>
            <span>{{ data.product_price }} {{ data.user_currency }}</span>
          </span>
          <span>
            <span class="infoTopTitle">产出率</span>
            <span>{{ data.product_ray }}%</span>
          </span>
          <span>
            <span class="infoTopTitle">结算类型</span>
            <span>{{ data.settle_type_desc }}</span>
          </span>
          <span>
            <span class="infoTopTitle">结算率</span>
            <span>{{ data.settle_ray }}%</span>
          </span>
          <span>
            <span class="infoTopTitle">实际结算</span>
            <span>{{ data.settle_amount }} USDT ≈ {{ data.settle_price }} CNY</span>
          </span>
          <span class="timeSet" style="textAlign:right">
            <span class="infoTopTitle">结算时间</span>
            <span>{{ data.settle_time }}</span>
          </span>
        </div>
        <div v-else class="totalInfo">
          <p>暂未到达结算日期</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { myInsuranceDetail } from '@/script/api';
import { Base64 } from 'js-base64';

//假数据
import datas from './moreServiceDetail.json';

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
    width: '7%',
  },
];
const datass = [
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
      datass, //  数据列表
      columns, //  表格头
    };
  },
  created() {
    //假数据
    this.data = datas.datas;
    // console.log(Base64.decode(this.$route.query.ins_order_id));
    // myInsuranceDetail({ ins_order_id: Base64.decode(this.$route.query.ins_order_id) }).then(resp => {
    //   console.log(resp);
    //   this.datas = resp.datas;
    // });
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
        flex-wrap: no-wrap;
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
        /deep/ .ant-pagination-item-active {
          border: none;
          background-color: #ffab32;
          a {
            color: #ffffff;
          }
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
        margin-top: 20px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: no-wrap;
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
          padding: 5px;
          flex-wrap: wrap;
          span {
            margin-bottom: 5px;
            &.timeSet {
              width: 40%;
            }
          }
        }
      }
    }
  }
}
</style>
