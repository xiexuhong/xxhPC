<template>
  <div class="serviceItemContainer">
    <div class="serviceItemTable">
      <a-table
        :columns="columns"
        :dataSource="data"
        :pagination="{
          pageSizeOptions: ['10', '20', '30', '40'],
          showSizeChanger: true,
        }"
      >
        <span class="action" slot="action">
          <router-link to="/hashrateContract/contractList/moreServiceDetail">查看详情</router-link>
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
    title: '套保周期',
    dataIndex: 'hedgeCycle',
    key: 'hedgeCycle',
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
  },
  {
    title: '生效时间',
    dataIndex: 'effectiveDate',
    key: 'effectiveDate',
  },
  {
    title: '结算时间',
    dataIndex: 'settlementDate',
    key: 'settlementDate',
  },
  {
    title: '下单时间',
    dataIndex: 'orderDate',
    key: 'orderDate',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
    width: '8%',
  },
];

const data = [
  {
    key: '1',
    name: '邀请赠送算力',
    amountOfMoney: '6000000.00 USD',
    hedgeCycle: '600天',
    state: '进行中',
    effectiveDate: '在挖',
    settlementDate: new Date().toString(),
    orderDate: new Date().toString(),
  },
  {
    key: '2',
    name: '邀请赠送算力',
    amountOfMoney: '6000000.00 USD',
    hedgeCycle: '600天',
    state: '进行中',
    effectiveDate: '在挖',
    settlementDate: new Date().toString(),
    orderDate: new Date().toString(),
  },
  {
    key: '3',
    name: '邀请赠送算力',
    amountOfMoney: '6000000.00 USD',
    hedgeCycle: '600天',
    state: '进行中',
    effectiveDate: '在挖',
    settlementDate: new Date().toString(),
    orderDate: new Date().toString(),
  },
  {
    key: '4',
    name: '邀请赠送算力',
    amountOfMoney: '6000000.00 USD',
    hedgeCycle: '600天',
    state: '进行中',
    effectiveDate: '在挖',
    settlementDate: new Date().toString(),
    orderDate: new Date().toString(),
  },
  {
    key: '5',
    name: '邀请赠送算力',
    amountOfMoney: '6000000.00 USD',
    hedgeCycle: '600天',
    state: '进行中',
    effectiveDate: '在挖',
    settlementDate: new Date().toString(),
    orderDate: new Date().toString(),
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
  }
}
/deep/.ant-pagination-item-active {
  border: none;
  background-color: #ffab32;
  a {
    color: #ffffff;
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
}
</style>