<template>
  <div class="contractItemContainer">
    <div class="contractItemChoose">
      <ul>
        <!-- TODO 接口未添加筛选参数，功能未实现 -->
        <li>
          <label class="chooseTitle">矿机类型:</label>
          <a-radio-group v-model="chioce.type">
            <a-radio-button value="all">全部</a-radio-button>
            <a-radio-button value="PT">单挖</a-radio-button>
            <a-radio-button value="SW">双挖</a-radio-button>
          </a-radio-group>
        </li>
        <li>
          <label class="chooseTitle">合约状态:</label>
          <a-radio-group v-model="chioce.workType">
            <a-radio-button value="all">全部</a-radio-button>
            <a-radio-button value="YCX">已撤销</a-radio-button>
            <a-radio-button value="ZRCG">转让成功</a-radio-button>
          </a-radio-group>
        </li>
        <li>
          <label class="chooseTitle">锁定期限:</label>
          <a-radio-group v-model="chioce.workType">
            <a-radio-button value="all">全部</a-radio-button>
            <a-radio-button value="30">30天</a-radio-button>
            <a-radio-button value="90">90天</a-radio-button>
            <a-radio-button value="180">180天</a-radio-button>
          </a-radio-group>
        </li>
      </ul>
    </div>
    <div class="contractItemTable">
      <a-table
        :columns="columns"
        :dataSource="datas"
        :rowKey="record => record.id"
        :pagination="{ total: totalNum }"
      >
        <popover slot="totalHashrate" slot-scope="text, record" :power="record" :num="record.num">
          <span class="totalHashrate">{{ mult(record.computingPower, record.num) }} T</span>
        </popover>
        <span slot="regularDateNum" slot-scope="text">{{ text }} 天</span>
        <span slot="goodsDeposit" slot-scope="text, record">
          {{ record.goods_deposit }} x {{ record.num }} = {{ record.total_deposit }}
          {{ record.pay_currency }}
        </span>
        <span class="action" slot="action" slot-scope="text, record">
          <!-- <router-link to>转让</router-link> -->
          <router-link
            :to="{
              path: '/hashrateContract/contractList/orderFade',
              query: {
                orderId: Base64.encode(record.order_id),
              },
            }"
          >退单</router-link>
          <router-link
            :to="{
              path: '/hashrateContract/contractList/orderReorder',
              query: {
                orderId: Base64.encode(record.order_id),
              },
            }"
          >续单</router-link>
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
import popover from '@/components/popover';
import { myUndertakeList } from '@/script/api';
import { mult } from '@/script/utils';
import { Base64 } from 'js-base64';
export default {
  components: {
    popover,
  },
  data() {
    return {
      chioce: {
        //  筛选选项
        type: 'all', //  矿机类型
        workType: 'all', //  合约状态
      },
      datas: [], //  表格数据
      columns: [], //  表头
      totalNum: 0, //  总数据
    };
  },
  created() {
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '金额',
        dataIndex: 'goods_deposit',
        scopedSlots: { customRender: 'goodsDeposit' },
      },
      {
        title: '到手总算力',
        dataIndex: 'totalHashrate',
        scopedSlots: { customRender: 'totalHashrate' },
      },
      {
        title: '合约期限',
        dataIndex: 'regular_date_num',
        scopedSlots: { customRender: 'regularDateNum' },
      },
      {
        title: '合约状态',
        dataIndex: 'state_format',
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
      },
    ];
    this.columns = columns;
    myUndertakeList().then(resp => {
      console.log(resp);
      this.datas = resp.datas.lists;
      this.totalNum = resp.datas.totalNum;
    });
  },
  computed: {
    mult: () => mult,
    Base64: () => Base64,
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
