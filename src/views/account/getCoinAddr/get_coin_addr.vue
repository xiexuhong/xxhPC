<template>
  <main class="ant-layout-content" style="height: 100%; margin: 24px 24px 0px; padding-top: 0px;">
    <div class="breadcrumb ant-breadcrumb">
      <span>
        <span class="ant-breadcrumb-link">
          <a class="router-link-active">提幣地址管理</a>
        </span>
      </span>
    </div>
    <div>
      <a-form>
        <a-row>
          <a-col :span="2">
            <a-form-item label="币种">
              <a-input-group compact>
                <a-select defaultValue="USDT">
                  <a-select-option value="USDT">USDT</a-select-option>
                  <a-select-option value="CNY">CNY</a-select-option>
                  <a-select-option value="TWD">TWD</a-select-option>
                </a-select>
              </a-input-group>
            </a-form-item>
          </a-col>
          <a-col :span="1">
            <span>-</span>
          </a-col>
          <a-col :span="8">
            <a-form-item label="提币地址">
              <a-input placeholder="请输入钱包地址" />
            </a-form-item>
          </a-col>
          <a-col :span="1">
            <span>-</span>
          </a-col>
          <a-col :span="8">
            <a-form-item label="備註">
              <a-input placeholder="限10个字符以内" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item>
          <a-button type="primary" @click="addCoinAddr(true)">Add</a-button>
          <a-modal
            title="安全驗證"
            centered
            :footer="null"
            :visible="isAdd"
            @cancel="() => addCoinAddr(false)"
          >
            <a-form-item label="交易密碼">
              <a-input placeholder="input placeholder 英文名" />
              <span class="color_y">忘記密碼?</span>
            </a-form-item>
            <a-form-item class="t_center">
              <a-button type="primary">提交</a-button>
            </a-form-item>
          </a-modal>
        </a-form-item>
      </a-form>
      <div v-if="noDatas">
        <a-result title="No Records">
          <template v-slot:icon>
            <img src="../../../assets/image/account/iconshenhezhong.png" alt />
          </template>
        </a-result>
      </div>
      <div class="addrList" v-else>
        <h2>提幣地址列表</h2>
        <a-table :columns="columns" :dataSource="data">
          <a slot="name" slot-scope="text">{{text}}</a>
          <span slot="customTitle">Name</span>
          <span slot="action" slot-scope="text">
            <a>Delete</a>
          </span>
        </a-table>
      </div>
    </div>
  </main>
</template>
<script>
const columns = [
  { title: '币种', dataIndex: 'coin', key: 'coin' },
  { title: '提币地址', dataIndex: 'addr', key: 'addr' },
  { title: '备注', dataIndex: 'des', key: 'des' },
  { title: '操作', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
];

const data = [
  {
    key: 1,
    coin: 'CNY',
    addr: '1Bj2KqbHTMQQDP4cXyU9Roxj8tpLJe7Qw5',
    des: 'New York No. 1 Lake Park',
  },
  {
    key: 2,
    coin: 'USDT',
    addr: '1Bj2KqbHTMQQDP4cXyU9Roxj8tpLJe7Qw5',
    des: 'London No. 1 Lake Park',
  },
  {
    key: 3,
    coin: 'TWD',
    addr: '1Bj2KqbHTMQQDP4cXyU9Roxj8tpLJe7Qw5',
    des: 'Sidney No. 1 Lake Park',
  },
];
export default {
  data() {
    return {
      data,
      columns,
      noDatas: false,
      isAdd: false,
    };
  },
  methods: {
    addCoinAddr(isAdd) {
      this.isAdd = isAdd;
      console.log('click', isAdd);
    },
  },
};
</script>
<style scoped>
.ant-result-title {
  color: #383838;
}
.addrList {
  width: 97%;
}
.color_y {
  color: #ffab32;
}
.t_center {
  text-align: center;
}
.t_center button {
  width: 48%;
}
.ant-breadcrumb-link {
  font-size: 18px;
}
.ant-modal-title {
  border: none;
  text-align: center;
}
#rcDialogTitle2 {
  text-align: center;
}
</style>
