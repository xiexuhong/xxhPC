<template>
  <main
    class="ant-layout-content"
    style="width:97%;height: 100%; margin: 24px 24px 0px; padding-top: 0px;"
  >
    <div class="breadcrumb ant-breadcrumb">
      <span>
        <span class="ant-breadcrumb-link">
          <a class="router-link-active">银行卡管理</a>
        </span>
      </span>
    </div>
    <div>
      <a-row>
        <!-- <a-col :span="8"> -->
        <a-card
          class="bank_info"
          hoverable
          style="min-width:35%;display: inline-block;vertical-align: middle;"
        >
          <a-row>
            <a-col :span="18">
              <small class="op_64">卡號/帳號</small>
            </a-col>
            <a-col :span="6">
              <div class="bank_s">
                <small>储值卡</small>
              </div>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="6" class="card_number">6227</a-col>
            <a-col :span="6" class="card_number">2737</a-col>
            <a-col :span="6" class="card_number">****</a-col>
            <a-col :span="6" class="card_number">1234</a-col>
            <!-- <span>6227 2737 **** 1234</span> -->
          </a-row>
          <a-row>
            <span>
              <small>持卡人姓名</small>
            </span>
          </a-row>
          <a-row>
            <a-col :span="12">
              <small>Tow dog King</small>
            </a-col>
            <a-col :span="12" class="t_right">
              <small>美国美洲银行</small>
            </a-col>
          </a-row>
          <template slot="actions">
            <div class="del_card" @click="del_card()">解绑</div>
          </template>
        </a-card>
        <!-- </a-col> -->
        <!-- <a-col :span="1"></a-col> -->
        <!-- <a-col :span="8"> -->
        <a-card
          style="min-width:35%;display: inline-block;vertical-align: middle;margin-left:5%;margin-top: 1%;"
        >
          <router-link to="/account/add_bank_card" class="t_center">
            <img src="../../../assets/image/account/iconuu.png" alt />
            <div>Add Bank Card</div>
          </router-link>
        </a-card>
        <!-- </a-col> -->
      </a-row>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    del_card() {
      this.$confirm({
        title: '解綁銀行卡',
        content: h => <div style="color:#999999;">您確定要解綁銀行卡嗎？</div>,
        okText: '提交',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    },
  },
};
</script>
<style scoped>
.ant-breadcrumb {
  margin-bottom: 2%;
}
.ant-breadcrumb-link {
  font-size: 18px;
}
.ant-card {
  height: 172px;
}
.bank_info {
  background: url('~@/assets/image/account/iconbgyinhank.png') no-repeat;
  background-size: 100% 100%;
  color: #fff;
}
.bank_s {
  background: url('~@/assets/image/account/bank_bg.png') no-repeat;
  background-size: 100% 100%;
  text-align: center;
}
.t_center {
  text-align: center;
}
.t_center img {
  margin-left: 40%;
}
.del_card {
  text-align: center;
  color: #f62929;
  /* display: none; */
}
.bank_info:hover .del_card {
  display: block;
}
.op_64 {
  opacity: 0.64;
}
.t_right {
  text-align: right;
}
.ant-card .ant-card-body {
  padding: 13px 24px;
}
.card_number {
  text-align: center;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  padding: 5% 2% 6%;
}
</style>