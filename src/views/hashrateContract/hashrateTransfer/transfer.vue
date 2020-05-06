<template>
  <div class="contractItemContainer">
    <div class="contractItemChoose">
      <ul>
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
      </ul>
    </div>
    <div class="contractItemTable">
      <a-table
        :columns="columns"
        :dataSource="datas"
        :rowKey="record => record.id"
        :pagination="{total: totalNum}"
        :loading="tableLoading"
      >
        <span
          slot="goodsDeposit"
          slot-scope="text, record"
        >{{record.goods_deposit}} x {{record.num}} = {{record.total_deposit}} {{record.pay_currency}}</span>
        <popover
          slot="transferHashrate"
          slot-scope="text, record"
          :power="record"
          :num="record.num"
        >
          <span class="totalHashrate">{{mult(record.computingPower, record.num)}} T</span>
        </popover>
        <span class="action" slot="action" slot-scope="text, record">
          <div>
            <a v-if="record.state==0" @click="() => (chargeVisible = true)">撤销</a>
            <a v-else disabled style="color: #999999">无法撤销</a>
          </div>
          <div class="hashrateNodal">
            <a-modal
              title="撤销"
              centered
              v-model="chargeVisible"
              okText="确定撤销"
              cancelText="取消"
              width="350px"
              @ok="confirmCancel"
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
import popover from '@/components/popover';
import { myTransferList, cancelTransfer } from '@/script/api';
import { mult } from '@/script/utils';
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
      totalNum: 0, //  数据总数
      chargeVisible: false, //点击弹窗隐藏/显示
      tableLoading: false, //  数据加载中等待状态
    };
  },
  created() {
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '转让金额',
        dataIndex: 'goods_deposit',
        scopedSlots: { customRender: 'goodsDeposit' },
      },
      {
        title: '合约状态',
        dataIndex: 'state_format',
      },
      {
        title: '转让算力',
        dataIndex: 'transferHashrate',
        scopedSlots: { customRender: 'transferHashrate' },
      },
      {
        title: '转让时间',
        dataIndex: 'time_creat',
      },
      {
        title: '操作',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' },
      },
    ];
    this.columns = columns;
    myTransferList().then(resp => {
      // console.log(resp);
      this.datas = resp.datas.lists;
      this.totalNum = Number(resp.datas.total_page) * Number(resp.datas.pageSize);
      // console.log(this.totalNum);
    });
  },
  computed: {
    mult: () => mult,
  },
  methods: {
    //  页码变化
    onPageChange(page) {
      this.tableLoading = true;
      // this.page = page;
      //  获取选项发送请求，获取数据
      myTransferList({
        page: page,
      }).then(resp => {
        this.datas = resp.datas.lists;
        // console.log(this.datas);
        this.tableLoading = false;
      });
    },
    //  确认撤销
    confirmCancel(orderId) {
      cancelTransfer({ transfer_id: orderId })
        .then(resp => {
          console.log(resp);
          this.tableLoading = true;
          myTransferList().then(resp => {
            console.log(resp);
            this.datas = resp.datas.lists;
            this.totalNum = Number(resp.datas.total_page) * Number(resp.datas.pageSize);
            // console.log(this.totalNum);
            this.tableLoading = false;
          });
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.chargeVisible = false;
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