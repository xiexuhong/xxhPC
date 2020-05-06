<template>
  <div class="detailContainer">
    <div class="detailContent">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>算力商城</a-breadcrumb-item>
        <a-breadcrumb-item>合约详情</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="detailContentBody">
        <a-row>
          <a-col>
            <ul class="detailHeader">
              <li>
                <img src="@/assets/image/hashrateBtc.png" alt="icon" />
              </li>
              <li>{{ power.name }}</li>
              <li>合约限期</li>
              <li>{{ power.constract_date_num }}天</li>
            </ul>
          </a-col>
        </a-row>
        <a-row class="detailBody">
          <a-col>
            <ul>
              <li>
                <span class="key">單份价格:</span>
                <span
                  style="color:#ffab32; fontSize:20px"
                  v-for="(deposit, index) in power.deposit_arr"
                  :key="deposit.name"
                >
                  <i v-show="index != 0">=</i>
                  <span>{{ deposit.value }}</span>
                  <small>{{ deposit.name }}</small>
                </span>
              </li>
              <li>
                <span class="key">單份合約算力:</span>
                <span class="value">{{ power.unit_power }}</span>
              </li>
              <li>
                <span class="key">日挖礦收益:</span>
                <!-- TODO 该字段没找到 -->
                <span class="value">约0.18USD/份</span>
              </li>
              <li>
                <span class="key">剩餘算力:</span>
                <span class="value">{{ mult(power.base_power, power.num_left) }}T</span>
              </li>
              <li>
                <span class="key">單次下單限額:</span>
                <span class="value">{{ power.once_limit }}T</span>
              </li>
              <li>
                <span class="key">基礎算力:</span>
                <span class="value">{{ power.base_power }}</span>
              </li>
              <li>
                <span class="key">獎勵算力:</span>
                <span class="value">1.30T</span>
              </li>
              <li>
                <span class="key">開挖時間:</span>
                <span class="value">{{ power.time_income }}</span>
              </li>
              <li>
                <span class="key">發放方式:</span>
                <span class="value">{{ power.mode }}</span>
              </li>
            </ul>
          </a-col>
        </a-row>
        <a-row class="charge">
          <a-col>
            <a-button v-show="mult(power.base_power, power.num_left) > 0" size="large">
              <router-link to="/hashrateMarket/hashrateShop/orderDetail">立即购买</router-link>
            </a-button>
            <a-button
              v-show="mult(power.base_power, power.num_left) <= 0"
              class="disabled"
              size="large"
              type="primary"
              disabled
            >已售罄</a-button>
          </a-col>
        </a-row>
        <hr style="backgroundColor: #EEEEEE; height: 1px; margin: 25px 0px" />
        <a-row>
          <a-col>
            <ul class="detailIntro" v-for="(detail) in power.detail" :key="detail.name">
              <li>
                <p>
                  <span>|</span>
                  <span>{{ detail.name }}</span>
                </p>
                <p>{{ detail.desc }}</p>
              </li>
              <!-- <li>
                <p>
                  <span>|</span>
                  <span>合約說明</span>
                </p>
                <p>挖矿收获:照发布日挖矿难度,挖矿收获将与矿场五五分成。锁定期限:180天,期满后算力可退可转。</p>
                <p style="fontSize: 14px; color: #FFAB32">注意:挖矿收获仅为根据当前挖矿难度的预估值,您的收益以实际挖矿收获为准。</p>
              </li>-->
            </ul>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mult } from '@/script/utils';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  created() {
    // console.log(this.power);
  },
  computed: {
    ...mapGetters({ power: 'singleList' }),
    mult: () => mult,
  },
};
</script>

<style lang="scss" scoped>
.detailContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.detailContent {
  width: 60%;
  margin-bottom: 20px;
  .ant-breadcrumb {
    color: #ffab32;
    margin: 10px;
  }

  .detailContentBody {
    background-color: #ffffff;
    padding: 20px;
    .detailHeader {
      li {
        display: inline;
        margin: 0 4px;
      }
      li:nth-child(1) img {
        height: 27px;
        width: 27px;
        position: relative;
        top: -5px;
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
    .detailBody {
      font-size: 16px;
      ul li {
        display: inline-block;
        margin: 5px 5px;
        padding-right: 5px;
        border-right: 1px solid #999999;
        span {
          margin: 0 6px;
        }
        .key {
          font-weight: bold;
        }
      }
    }
    .charge {
      display: flex;
      flex-direction: column;
      align-items: left;
      .ant-btn {
        background-color: #ffab32;
        border-radius: 2px;
        color: #ffffff;
        width: 18%;
      }
      .disabled {
        background-color: #cfcfcf;
        width: 18%;
      }
    }
    .detailIntro li {
      margin-bottom: 40px;
      p {
        margin: 10px 0;
        span {
          font-size: 20px;
          margin-right: 10px;
          color: #262626;
          font-weight: bold;
        }
        span:nth-child(1) {
          color: #ffab32;
          font-weight: bolder;
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .detailContent {
    width: 90%;
  }
}
@media screen and (max-width: 700px) {
  .detailContent {
    width: 100%;
    .detailContentBody {
      .detailHeader {
        li:nth-child(2) {
          font-size: 15px;
        }
        li:nth-child(3) {
          font-size: 8px;
        }
        li:nth-child(4) {
          font-size: 8px;
        }
      }
      .detailBody ul {
        margin: 0;
        li {
          width: 100%;
          font-size: 13px;
          border: none;
        }
      }
      .charge .ant-btn {
        width: 50%;
      }
      .detailIntro li {
        margin-bottom: 10px;
        font-size: 10px;
        p {
          margin: 5px 0;
          span {
            font-size: 10px;
            font-weight: bold;
          }
          span:nth-child(1) {
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>