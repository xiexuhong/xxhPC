<template>
  <div class="detailContainer">
    <div class="detailContent">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>算力商城</a-breadcrumb-item>
        <a-breadcrumb-item>合约详情</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="detailContentBody">
        <a-row type="flex" justify="center" align="top">
          <a-col :span="18">
            <a-row>
              <a-col :span="24">
                <ul class="detailHeader">
                  <li>算力包</li>
                  <li>合约限期</li>
                  <li>90天</li>
                </ul>
              </a-col>
            </a-row>
            <a-row class="detailBody">
              <a-col :span="12">
                <ul>
                  <li>起购金额（每T）</li>
                  <li style="color:#ffab32">0.7704usd/0.7704usd</li>
                </ul>
              </a-col>
              <a-col :span="4">
                <ul>
                  <li>剩余份额</li>
                  <li>352分</li>
                </ul>
              </a-col>
              <a-col :span="4">
                <ul>
                  <li>止损率</li>
                  <li>90%</li>
                </ul>
              </a-col>
              <a-col :span="4">
                <ul>
                  <li>止赢率</li>
                  <li>200%</li>
                </ul>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="6">
            <a-row class="charge">
              <a-col :span="24">
                <a-button size="large" block>
                  <router-link to="/hashrateMarket/valueAddService/orderDetail">立即购买</router-link>
                </a-button>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
        <hr style="backgroundColor: #EEEEEE; height: 1px; margin: 25px 0px" />
        <a-row>
          <a-col>
            <ul class="detailIntro">
              <li>
                <p>
                  <span>|</span>
                  <span>合約规则</span>
                </p>
                <p>1．创建合约时，以实时BTC算力指数、甲方佣户）所指定止盈率/止损率、合约周期、关联算力数额计算止盈价/止损介</p>
                <p>2．合约期内关联算力所产出的BTC每日发放后即时锁仓，由本智能合约托管；</p>
                <p>3．合约到期结算时，以合约周期内关联算力实际产出BTC数量、实时币价计算结算介</p>
                <p style="textIndent:2em">3.1若止损价结算价止盈价，本智能合约将对关联算力所产出BTC解锁；</p>
                <p style="textIndent:2em">3.2若结算价&#60;止损价，本智能合约将代乙方以止损价回购关联算力所产生的BTC，回购费以USDT向甲方支付；</p>
                <p style="textIndent:2em">3.3若结算价>止盈价，本智能合约将代乙方以止盈价回购关联算力所产生的BTC，回购费以USDT向甲方支付；</p>
                <p>4．本合约仅支持90/180天算力合约包，合约有效期内算力包不可进行除续期外的任何操作；</p>
                <p style="fontSize: 14px; color: #999999">*本平台币价均取自币安、OKcoin、火币三大交易所均值，10秒更新一次。</p>
              </li>
              <li>
                <p>
                  <span>|</span>
                  <span>场景示例</span>
                </p>
                <p>小明持有一个10T算力包，到手算力30T，当前算力指数为1 CNY/T*天，可预估90天后将收入约1350元（30*1*90*50%）。为了降低收益波动风险，小明为这部分算力创建了一份止损率为90%，止盈率为200%的套保合约，合约期限90天，可算出合约的止损价为1215元，止盈价为2700元。合约生效后（创建次日0点生效），小明这部分算力每日产出的BTC将被冻结。</p>
                <p>1.实际产出的BTC折合1400元，在止损/止盈价(1215-2700)之间，小明直接获得这部分BTC；</p>
              </li>
            </ul>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.detailContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: break-all;
  .ant-breadcrumb {
    color: #ffab32;
    margin: 10px;
  }
  ul {
    margin: 10px;
  }
  .detailContent {
    width: 60%;
    .detailContentBody {
      background-color: #ffffff;
      padding: 20px;
      font-size: 16px;
      .detailHeader {
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
      .detailBody ul li {
        padding: 5px;
      }
      .detailBody ul li:nth-child(1) {
        font-size: 14px;
        color: #999999;
      }
      .detailBody ul li:nth-child(2) {
        font-size: 20px;
        font-weight: 600;
        color: #262626;
      }
      .charge {
        margin-top: 40%;
        .ant-btn {
          background-color: #ffab32;
          border-radius: 2px;
          color: #ffffff;
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
}

@media screen and (max-width: 1000px) {
  .detailContainer .detailContent {
    width: 90%;
  }
}
@media screen and (max-width: 700px) {
  .detailContainer .detailContent {
    width: 100%;
    .charge {
      margin-top: 60%;
    }
  }
}
@media screen and (max-width: 500px) {
  .detailContainer .detailContent {
    width: 100%;
    .charge {
      margin-top: 130%;
    }
  }
}
</style>