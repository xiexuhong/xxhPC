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
                <img src="../../../../public/hashrateMarket/btc.png" alt="icon" />
              </li>
              <li>BTC 30天算力包</li>
              <li>合约限期</li>
              <li>30天</li>
            </ul>
          </a-col>
        </a-row>
        <a-row class="detailBody">
          <a-col>
            <ul>
              <li>
                <span class="key">單份价格:</span>
                <span style="color:#ffab32; fontSize:22px">425.00USD=425.00USDT</span>
              </li>|
              <li>
                <span class="key">單份合約算力:</span>
                <span class="value">1T+130%+(0-25)%</span>
              </li>|
              <li>
                <span class="key">日挖礦收益:</span>
                <span class="value">约0.18USD/份</span>
              </li>|
              <li>
                <span class="key">剩餘算力:</span>
                <span class="value">48T</span>
              </li>
            </ul>
            <ul>
              <li>
                <span class="key">單次下單限額:</span>
                <span class="value">5T</span>
              </li>|
              <li>
                <span class="key">基礎算力:</span>
                <span class="value">1.00T</span>
              </li>|
              <li>
                <span class="key">獎勵算力:</span>
                <span class="value">1.30T</span>
              </li>|
              <li>
                <span class="key">開挖時間:</span>
                <span class="value">19/02/2020 00:00:00</span>
              </li>|
              <li>
                <span class="key">發放方式:</span>
                <span class="value">日结，次日发放至账户</span>
              </li>
            </ul>
          </a-col>
        </a-row>
        <a-row class="charge">
          <a-col>
            <a-button v-show="unSellOut" size="large">
              <router-link to="/hashrateMarket/hashrateShop/orderDetail">立即购买</router-link>
            </a-button>
            <a-button v-show="!unSellOut" class="disabled" size="large" type="primary" disabled>已售罄</a-button>
          </a-col>
        </a-row>
        <hr style="backgroundColor: #EEEEEE; height: 1px; margin: 25px 0px" />
        <a-row>
          <a-col>
            <ul class="detailIntro">
              <li>
                <p>
                  <span>|</span>
                  <span>算力介绍</span>
                </p>
                <p>算力来源为大型实体矿场专业矿机矩阵。算力包的算力=基准算力+基准算力上浮+产品算力奖励。其中: 基准算力1.0TH/S、基准算</p>
              </li>
              <li>
                <p>
                  <span>|</span>
                  <span>合約說明</span>
                </p>
                <p>挖矿收获:照发布日挖矿难度,挖矿收获将与矿场五五分成。锁定期限:180天,期满后算力可退可转。</p>
                <p style="fontSize: 14px; color: #FFAB32">注意:挖矿收获仅为根据当前挖矿难度的预估值,您的收益以实际挖矿收获为准。</p>
              </li>
              <li>
                <p>
                  <span>|</span>
                  <span>風險介紹</span>
                </p>
                <p>请根据自身实际情况谨慎选择算力类型。数字货币价格涨跌、矿池难度提升等因素均会造成您持有算力的挖矿收益波动。预估收益是根据按发布日当前挖矿难度估算，实得收益将根据合约周期内矿场实际获得得数字资产总量进行发行，实际收益与预估收益存在偏差可能。</p>
              </li>
              <li>
                <p>
                  <span>|</span>
                  <span>免責聲明</span>
                </p>
                <p>平台不对用户获得的数字资产进行精准承诺，收益数量根据挖矿产出按照算力贡献分发，挖矿收益受市场行情波动影响非恒定，平台历史同期各种数字仅供参考，用户应自己独立破案段后做出决策，自愿下单共享算力进行数字资产投资的用户，其行为产生的投资风险由用户自行承担。</p>
              </li>
            </ul>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unSellOut: true, //算力是否售罄，默认未售罄
    };
  },
};
</script>

<style lang="scss">
.detailContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.detailContent {
  width: 60%;
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
    .detailBody {
      font-size: 16px;
      ul {
        margin-left: -15px;
        li {
          display: inline;
          margin: 0 10px;
          span {
            margin: 0 6px;
          }
          .key {
            font-weight: bold;
          }
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
    .detailContentBody .detailBody ul li {
      display: block;
    }
  }
}
</style>