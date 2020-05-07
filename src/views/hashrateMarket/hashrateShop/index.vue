<template>
  <!-- 算力市场/算力商城首页 -->
  <a-spin :spinning="spinning" :delay="200">
    <div class="hashContainer">
      <div class="hashContent" v-for="(power, index) in powerList" :key="power.machine_id">
        <a-row type="flex" justify="center" align="top">
          <a-col :span="19">
            <a-row>
              <a-col :span="24">
                <ul class="hashHeader">
                  <li>
                    <img src="@/assets/image/hashrateBtc.png" alt="icon" />
                  </li>
                  <li>{{ power.name }}</li>
                  <li>合约限期</li>
                  <li>{{ power.constract_date_num }}天</li>
                </ul>
              </a-col>
            </a-row>
            <a-row class="hashBody">
              <a-col :span="8">
                <ul>
                  <li>单份价格</li>
                  <li style="color:#ffab32">
                    <span
                      v-for="(deposit, index) in power.deposit_arr"
                      :key="deposit.name"
                      style="display: inline-block"
                    >
                      <span v-show="index != 0">&nbsp;=&nbsp;</span>
                      <span>{{ deposit.value }}</span>
                      <small>{{ deposit.name }}</small>
                    </span>
                  </li>
                </ul>
              </a-col>
              <a-col :span="8">
                <ul>
                  <li>单份合约算力</li>
                  <li>{{ power.unit_power }}</li>
                </ul>
              </a-col>
              <a-col :span="8">
                <ul>
                  <li>日挖矿收益</li>
                  <li>约0.18USD/份</li>
                </ul>
              </a-col>
            </a-row>
            <a-row class="hashBody">
              <a-col :span="8">
                <ul>
                  <li>剩余算力</li>
                  <li>{{ mult(power.base_power, power.num_left) }}T</li>
                </ul>
              </a-col>
              <a-col :span="8">
                <ul>
                  <li>单次下单限额</li>
                  <li>{{ power.once_limit }}T</li>
                </ul>
              </a-col>
              <a-col :span="8">
                <ul>
                  <li>开挖时间</li>
                  <li>{{ power.time_income }}</li>
                </ul>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="5">
            <a-row class="showDetail">
              <a-col :span="24">
                <!-- <a href="#">查看详情 ></a> -->
                <router-link
                  to="/hashrateMarket/hashrateShop/contractDetail"
                  @click.native="setSingleList(index)"
                >查看详情 ></router-link>
              </a-col>
            </a-row>
            <a-row class="charge">
              <a-col :span="24">
                <a-button v-show="mult(power.base_power, power.num_left) > 0" size="large" block>
                  <router-link
                    to="/hashrateMarket/hashrateShop/orderDetail"
                    @click.native="setSingleList(index)"
                  >立即购买</router-link>
                </a-button>
                <a-button
                  v-show="mult(power.base_power, power.num_left) <= 0"
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
  </a-spin>
</template>

<script>
import { mapMutations } from 'vuex';
import { getPowerList } from '@/script/api';
import { mult } from '@/script/utils';
export default {
  data() {
    return {
      powerList: [], //获取算力列表
      spinning: false, //  数据加载loading
    };
  },
  created() {
    this.spinning = true;
    //获取算力列表
    getPowerList().then(resp => {
      // console.log(resp.datas.machine_list);
      this.powerList = resp.datas.machine_list;
      this.spinning = false;
    });
  },
  computed: {
    mult: () => mult,
  },
  methods: {
    //  获取单调数据并传给vuex共享
    ...mapMutations(['GET_SINGLE_LIST']),
    setSingleList(powerItem) {
      this.$store.commit('GET_SINGLE_LIST', this.powerList[powerItem]);
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
}
.hashContent {
  width: 60%;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
}
.hashHeader {
  li {
    display: inline;
    margin: 0 4px;
  }
  li:nth-child(1) img {
    height: 27px;
    width: 27px;
    position: relative;
    top: -12px;
  }
  li:nth-child(2) {
    font-size: 24px;
    color: #262626;
  }
  li:nth-child(3) {
    font-size: 12px;
    color: #ffffff;
    background-color: #ff9d32;
    padding: 5px;
  }
  li:nth-child(4) {
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
  margin-top: 40%;
  .ant-btn {
    display: inline-block;
    background-color: #ffab32;
    border-radius: 2px;
    color: #ffffff;
    justify-content: center;
  }
  .disabled {
    background-color: #cfcfcf;
  }
}
@media screen and (max-width: 500px) {
  .hashContent {
    width: 100%;
    padding: 5px;
  }
  .hashHeader {
    li:nth-child(1) img {
      top: 0;
      display: none;
    }
    li:nth-child(2) {
      font-size: 15px;
      display: block;
    }
    li:nth-child(3) {
      font-size: 8px;
      padding: 3px;
    }
    li:nth-child(4) {
      font-size: 8px;
      padding: 3px;
    }
  }
  .hashBody ul li:nth-child(1) {
    font-size: 10px;
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
}
</style>