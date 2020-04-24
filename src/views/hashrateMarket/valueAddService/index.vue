<template>
  <!-- 算力市场/算力商城首页 -->
  <div class="hashContainer">
    <div class="hashContent" v-for="insurance in insuranceList" :key="insurance.id">
      <a-row type="flex" justify="center" align="top">
        <a-col :span="19">
          <a-row>
            <a-col :span="24">
              <ul class="hashHeader">
                <li>{{ insurance.name }}</li>
                <li>合约限期</li>
                <li>90天</li>
              </ul>
            </a-col>
          </a-row>
          <a-row class="hashBody">
            <a-col :span="8">
              <ul>
                <li>起购金额（每T）</li>
                <li style="color:#ffab32">0.7704usd/0.7704usd</li>
              </ul>
            </a-col>
            <a-col :span="6">
              <ul>
                <li>剩余份额</li>
                <li>352分</li>
              </ul>
            </a-col>
            <a-col :span="5">
              <ul>
                <li>止损率</li>
                <li>90%</li>
              </ul>
            </a-col>
            <a-col :span="5">
              <ul>
                <li>止赢率</li>
                <li>200%</li>
              </ul>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="5">
          <a-row class="showDetail">
            <a-col :span="24">
              <!-- <a href="#">查看详情 ></a> -->
              <router-link to="/hashrateMarket/valueAddService/contractDetail">查看详情 ></router-link>
            </a-col>
          </a-row>
          <a-row class="charge">
            <a-col :span="24">
              <a-button size="large" block>
                <router-link to="/hashrateMarket/valueAddService/orderDetail">立即购买</router-link>
              </a-button>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { getInsuranceList } from '@/script/api';
export default {
  data() {
    return {
      insuranceList: [], //  增值服务详情列表
    };
  },
  created() {
    getInsuranceList().then(resp => {
      // console.log(resp.datas.rented_list);
      this.insuranceList = resp.datas.rented_list;
    });
  },
  methods: {
    // 乘法
    mult: (basePrice, number) => number * basePrice,
    //  获取单调数据并传给vuex共享
    ...mapMutations(['GET_SINGLE_INSURANCE']),
    setSingleInsurance(insuranceItem) {
      this.$store.commit('GET_SINGLE_LIST', this.insuranceList[insuranceItem]);
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
  word-break: break-all;
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
        padding: 5px;
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
    }
  }
}

@media screen and (max-width: 1000px) {
  .hashContainer .hashContent {
    width: 90%;
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
        font-size: 20px;
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