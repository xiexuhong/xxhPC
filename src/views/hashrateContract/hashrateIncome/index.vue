<template>
  <div class="contractListContainer">
    <div class="listTitle">
      <p>算力收益</p>
      <ul>
        <li v-for="statInfoitem in statInfo" :key="statInfoitem.coin">
          <span>{{ statInfoitem.coin }}</span>
          <span class="listTitleContent">{{ statInfoitem.value }}</span>
        </li>
      </ul>
    </div>
    <div class="listContent">
      <p class="contentTitle">挖矿收益</p>
      <div class="contentTable">
        <a-table
          :columns="columns"
          :dataSource="datas"
          :pagination="{
            pageSizeOptions: ['10', '20', '30', '40'],
            showSizeChanger: true,
            onChange: onPageChange,
            onShowSizeChange: onShowPageSizeChange,
            total: totalNum,
          }"
          :rowKey="record => record.id"
          :loading="tableLoading"
        >
          <span slot="power" slot-scope="text">{{ text }}T</span>
          <span slot="BTCProfit" slot-scope="text, record">
            <span v-for="recordItem in record.coin_list" :key="recordItem.coin">
              <span
                v-if="recordItem.coin === 'BTC'"
              >+{{ recordItem.profit }} {{ recordItem.coin }} ≈ {{ recordItem.profit_money }}</span>
            </span>
          </span>
          <span slot="freezeProfit" slot-scope="text, record">
            <span v-for="recordItem in record.coin_list" :key="recordItem.coin">
              <span
                v-if="recordItem.coin === 'BTC'"
              >+{{ recordItem.freeze_profit }} {{ recordItem.coin }} ≈ {{ recordItem.freeze_profit_money }}</span>
            </span>
          </span>
          <span slot="BHPProfit" slot-scope="text, record">
            <span v-for="recordItem in record.coin_list" :key="recordItem.coin">
              <span
                v-if="recordItem.coin === 'BHP'"
              >+{{ recordItem.profit }} {{ recordItem.coin }} ≈ {{ recordItem.profit_money }}</span>
              <span v-else>0.0000</span>
            </span>
          </span>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfitList } from '@/script/api';
export default {
  data() {
    return {
      datas: [], //  列表数据
      columns: [], //  表头
      statInfo: [], //  算力收益
      tableLoading: false, //  数据缓冲中
      totalNum: 0, //  列表总数
    };
  },
  created() {
    this.tableLoading = true;
    const columns = [
      {
        title: '产出日期',
        dataIndex: 'add_date',
      },
      {
        title: '总算力',
        dataIndex: 'power',
        scopedSlots: { customRender: 'power' },
      },
      {
        title: '产出BTC(含冻结)',
        dataIndex: 'BTCProfit',
        scopedSlots: { customRender: 'BTCProfit' },
      },
      {
        title: '合约冻结',
        dataIndex: 'freezeProfit',
        scopedSlots: { customRender: 'freezeProfit' },
      },
      {
        title: '产出BHP',
        dataIndex: 'BHPProfit',
        scopedSlots: { customRender: 'BHPProfit' },
      },
    ];
    this.columns = columns;
    getProfitList({ page: '1', pagesize: '10' }).then(resp => {
      // console.log(resp);
      this.statInfo = resp.datas.stat_info;
      this.datas = resp.datas.profit_list;
      this.totalNum = resp.datas.total_page * 10;
      this.tableLoading = false;
    });
  },
  methods: {
    //  页码变化
    onPageChange(page, pagesize) {
      this.tableLoading = true;
      // this.page = page;
      //  获取选项发送请求，获取数据
      getProfitList({
        curpage: page,
        pagesize: pagesize,
      }).then(resp => {
        this.datas = resp.datas.profit_list;
        // console.log(this.datas);
        this.tableLoading = false;
      });
    },
    //  每页显示条数
    onShowPageSizeChange(current, size) {
      this.tableLoading = true;
      //  获取选项发送请求，获取数据
      getProfitList({
        curpage: '1',
        pagesize: size,
      }).then(resp => {
        this.datas = resp.datas.profit_list;
        // console.log(this.datas);
        this.tableLoading = false;
      });
    },
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