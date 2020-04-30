<template>
  <div class="serviceItemContainer">
    <div class="serviceItemTable">
      <a-table
        :columns="columns"
        :dataSource="datas"
        :pagination="{
          pageSizeOptions: ['10', '20', '30', '40'],
          showSizeChanger: true,
          onChange: onPageChange,
        }"
        :rowKey="record => record.id"
        :loading="tableLoading"
      >
        <span slot="name" slot-scope="text, record">{{ record.insurance_info.name }}</span>
        <span
          slot="amountOfMoney"
          slot-scope="text, record"
        >{{ record.insurance_info.amount }} {{ record.insurance_info.currency }}</span>
        <span slot="hedgeCycle" slot-scope="text, record">{{ record.insurance_info.period }}</span>
        <span slot="status" slot-scope="text, record">{{ record.workText }}</span>
        <span slot="effectiveDate" slot-scope="text, record">{{ record.insurance_info.start_time }}</span>
        <span
          slot="settlementDate"
          slot-scope="text, record"
        >{{ record.insurance_info.settle_time }}</span>
        <span slot="orderDate" slot-scope="text, record">{{ record.insurance_info.create_at }}</span>
        <span class="action" slot="action" slot-scope="text, record">
          <router-link
            :to="{
            path: '/hashrateContract/contractList/moreServiceDetail',
            query: {
              ins_order_id: record.insurance_info.id
            }
          }"
          >查看详情</router-link>
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
import { myInsuranceList } from '@/script/api';

//假数据
import falseDatas from './moreServiceItem.json';

export default {
  data() {
    return {
      datas: [], //  表格数据
      columns: [], //  表头
      totalNum: [], //  模拟总数
      tableLoading: false, //  获取数据缓loading
    };
  },
  created() {
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        scopedSlots: { customRender: 'name' },
      },
      {
        title: '金额',
        dataIndex: 'amountOfMoney',
        scopedSlots: { customRender: 'amountOfMoney' },
      },
      {
        title: '套保周期',
        dataIndex: 'hedgeCycle',
        scopedSlots: { customRender: 'hedgeCycle' },
      },
      {
        title: '状态',
        dataIndex: 'status',
        scopedSlots: { customRender: 'status' },
      },
      {
        title: '生效时间',
        dataIndex: 'effectiveDate',
        scopedSlots: { customRender: 'effectiveDate' },
      },
      {
        title: '结算时间',
        dataIndex: 'settlementDate',
        scopedSlots: { customRender: 'settlementDate' },
      },
      {
        title: '下单时间',
        dataIndex: 'orderDate',
        scopedSlots: { customRender: 'orderDate' },
      },
      {
        title: '操作',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' },
      },
    ];
    this.columns = columns;
    // myInsuranceList().then(resp => {
    //   // console.log(resp);
    //   this.datas = resp.datas.rented_list;
    //   this.totalNum = Number(resp.datas.total_page) * 10;
    //   // console.log(this.datas);
    // });

    //  假数据
    this.datas = falseDatas.datas.rented_list;
    this.totalNum = Number(falseDatas.datas.total_page) * 10;
  },
  methods: {
    //  页码变化
    onPageChange(page) {
      this.tableLoading = true;
      // this.page = page;
      //  获取选项发送请求，获取数据
      myInsuranceList({
        page: page,
      }).then(resp => {
        this.datas = resp.datas.rented_list;
        // console.log(this.datas);
        this.tableLoading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.serviceItemContainer {
  width: 100%;
  .serviceItemTable {
    background-color: #ffffff;
    padding: 20px;
    font-size: 12px;
    /deep/td {
      padding: 16px 5px;
    }
    /deep/.ant-table-thead > tr > th {
      background-color: #ffffff;
    }
    .action a {
      display: inline-block;
      color: #ffab32;
    }
    /deep/.ant-pagination-item-active {
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

@media screen and (max-width: 500px) {
  .serviceItemContainer {
    .serviceItemTable {
      padding: 0;
      overflow: scroll;
      /deep/td {
        padding: 5px 2px;
      }
      .action a {
        display: block;
        width: 40px;
      }
    }
  }
  /deep/.ant-pagination-options {
    display: inline-block;
  }
}
</style>