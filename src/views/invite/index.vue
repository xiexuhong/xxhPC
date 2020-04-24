<template lang="pug">
  #invite
    .banner
    .form
        .title 我的專屬分享方式
        a-form(:form="form" @submit="submit")
            a-form-item(label="註冊鏈接")
                a-input-search(addonBefore="Http://" v-decorator="['url',{}]")
                    a-button(slot="enterButton" type="primary") 复制
            a-form-item(label="邀请码")
                a-input-search(v-decorator="['invite_code',{initialValue:invite_code}]")
                    a-button(slot="enterButton" type="primary") 复制
            a-form-item(label="邮箱")
                a-input(v-decorator="['email',{}]")
            a-form-item()
                a-button(type="primary") 发送
        .rules
            .text 邀請規則
            .content
                span 用戶註冊並下單合約包（合約包≧1T）,即可獲贈900元(0.3T)獎勵算力,還可獲贈邀請好友的基礎算力的0.1倍獎勵算力
                span 邀請多個好友，獎勵算力可累加，無獎勵上限 
                span 如您的好友發生退單行為，則自動扣回相應獎勵算力 ·您所獲贈的獎勵算力
                span 開挖時間為次日00：00：00，獲贈算力收益將自動累加到您的礦場賬戶
        a-tabs(defaultActiveKey="1" @change="onChange")
            a-tab-pane(key="1" tab="邀請記錄") 
                a-table(:columns="column1" :dataSource="data1" :pagination="false")
            a-tab-pane(key="2" tab="邀請列表") 
                a-table(:columns="column2" :dataSource="data2" :pagination="false")
</template>

<script>
import { mapGetters } from 'vuex';
import { getInviteList } from '@/script/api';
const column1 = [
  {
    title: '邀请注册',
    dataIndex: 'num',
    key: 'num',
  },
  {
    title: '好友下单',
    dataIndex: 'rent_num',
    key: 'rent_num',
  },
  {
    title: '留存奖励算力',
    dataIndex: 'power',
    key: 'power',
  },
];
const column2 = [
  {
    title: '注册时间',
    dataIndex: 'register',
    key: 'register',
  },
  {
    title: '首次下单时间',
    dataIndex: 'first',
    key: 'first',
  },
  {
    title: '注册账户',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: '奖励算力',
    dataIndex: 'power',
    key: 'power',
  },
];
export default {
  components: {},
  data() {
    return {
      column1,
      column2,
      invite_code: null,
      data1: [],
      data2: [],
    };
  },
  computed: {
    ...mapGetters(['deviceType']),
  },
  methods: {
    async requestInviteList(page) {
      const { datas } = await getInviteList({ page });
      const { list, invite_code } = datas;
      this.invite_code = invite_code;
      this.data1 = [{ num: list.num, rent_num: list.rent_num, power: list.power, key: 0 }];
      this.data2 = list.list || [];
    },
    onChange(val) {},
    submit() {},
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'invite' });
  },
  created() {
    this.requestInviteList(1);
  },
};
</script>

<style lang="scss" scoped>
#invite {
  .banner {
    width: 100%;
    height: 224px;
    background: #ccc;
    margin-bottom: 30px;
  }
  .form {
    .title {
      font-size: 18px;
      font-weight: 400;
      color: rgba(38, 38, 38, 1);
    }
  }
  .rules {
    .text {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 183, 87, 1);
      margin-bottom: 10px;
    }
    .content {
      background: rgba(250, 250, 250, 1);
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      padding: 20px;
      & > span {
        margin: 5px 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .banner {
      height: 82px;
      margin-bottom: 10px;
    }
    .form {
      padding: 10px;
    }
  }
}
</style>
