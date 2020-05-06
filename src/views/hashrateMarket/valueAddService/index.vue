<template>
  <!-- 算力市场/算力商城首页 -->
  <div class="hashContainer">
    <div class="hashContent" v-show="totalNum == 0">算力上架中...</div>
    <div class="hashContent" v-for="item in insuranceList" :key="item.id">
      <a-row type="flex" justify="center" align="top">
        <a-col :span="19">
          <a-row>
            <a-col :span="24">
              <ul class="hashHeader">
                <li>{{ item.name }}</li>
                <li>合约周期</li>
                <li>{{item.period}}天</li>
              </ul>
            </a-col>
          </a-row>
          <a-row class="hashBody">
            <a-col :span="8">
              <ul>
                <li>起购金额（每T）</li>
                <li style="color:#ffab32">
                  {{item.price.final_price}}
                  <small>{{currency}}</small>
                  / {{item.price.final_usdt_price}}
                  <small>USDT</small>
                </li>
              </ul>
            </a-col>
            <a-col :span="6">
              <ul>
                <li>剩余份额</li>
                <li>{{item.inventory}}份</li>
              </ul>
            </a-col>
            <a-col :span="5">
              <ul>
                <li>止损率</li>
                <li>{{item.low_limit}}%</li>
              </ul>
            </a-col>
            <a-col :span="5">
              <ul>
                <li>止赢率</li>
                <li>{{item.hign_limit}}%</li>
              </ul>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="5">
          <a-row class="showDetail">
            <a-col :span="24">
              <!-- <a href="#">查看详情 ></a> -->
              <router-link
                to="/hashrateMarket/valueAddService/contractDetail"
                @click.native="onSingleInsurance(item)"
              >查看详情 ></router-link>
            </a-col>
          </a-row>
          <a-row class="charge">
            <a-col :span="24">
              <a-button v-show=" item.inventory > 0" size="large" block>
                <router-link
                  to="/hashrateMarket/valueAddService/orderDetail"
                  @click.native="onSingleInsurance(item)"
                >立即购买</router-link>
              </a-button>
              <a-button
                v-show="!item.inventory || item.inventory <= 0"
                class="disabled"
                size="large"
                block
                disabled
              >已售罄</a-button>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
// import { getInsuranceList } from '@/script/api';
import { mapMutations } from 'vuex';

//  假数据
import indexData from './index.json';

export default {
  data() {
    return {
      insuranceList: [], //  增值服务详情列表
      totalNum: 0, //  增值服务详情列表
      currency: '', //  币种
    };
  },
  created() {
    //  假数据
    this.insuranceList = indexData.datas.data;
    this.totalNum = indexData.datas.total;
    this.currency = indexData.datas.currency;
    // console.log(this.totalNum);

    // getInsuranceList().then(resp => {
    //   // console.log(resp.datas.rented_list);
    //   this.insuranceList = resp.datas.rented_list;
    // });
  },
  methods: {
    //  向vuex里面推数据，共享给详情和支付等页面
    ...mapMutations['GET_SINGLE_INSURANCE'],
    onSingleInsurance(detail) {
      let singleInsurance = {};
      singleInsurance.currency = this.currency;
      singleInsurance.detail = detail;
      this.$store.commit('GET_SINGLE_INSURANCE', singleInsurance);
    },
  },
};
</script>

<style lang="scss" scoped>
.hashContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    margin: 10px;
  }
  .hashContent {
    width: 60%;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #ffffff;
    .hashHeader {
      li {
        display: inline;
        margin: 0 4px;
      }
      li:nth-child(1) {
        font-size: 24px;
        color: #262626;
      }
      li:nth-child(2) {
        font-size: 12px;
        color: #ffffff;
        background-color: #ff9d32;
        padding: 5px;
      }
      li:nth-child(3) {
        font-size: 12px;
        color: #ff9d32;
        background-color: #fff6ec;
        padding: 5px;
      }
    }
    .showDetail {
      padding-top: 20px;
      text-align: right;
      a {
        color: #ffab32;
        font-size: 14px;
      }
    }
    .hashBody ul li {
      padding: 5px;
    }
    .hashBody ul li:nth-child(1) {
      font-size: 14px;
      color: #999999;
    }
    .hashBody ul li:nth-child(2) {
      font-size: 20px;
      font-weight: 600;
      color: #262626;
    }
    .charge {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30%;
      ul {
        margin: 0px;
      }
      .ant-btn {
        background-color: #ffab32;
        border-radius: 2px;
        color: #ffffff;
      }
      .disabled {
        background-color: #cfcfcf;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .hashContainer .hashContent {
    width: 100%;
    padding: 5px;
    .hashBody ul li:nth-child(1) {
      font-size: 11px;
    }
    .hashBody ul li:nth-child(2) {
      font-size: 10px;
    }
    .charge {
      margin-top: 100%;
      .ant-btn {
        font-size: 10px;
      }
    }
    .hashHeader {
      li:nth-child(1) {
        font-size: 15px;
        display: block;
        // padding-right: 120px;
      }
      li:nth-child(2) {
        font-size: 8px;
      }
      li:nth-child(3) {
        font-size: 8px;
      }
    }
  }
}
</style>