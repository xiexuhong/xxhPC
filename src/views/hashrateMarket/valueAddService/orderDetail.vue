<template>
  <div class="detailContainer">
    <div class="detailContent">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>算力商城</a-breadcrumb-item>
        <a-breadcrumb-item>合约详情</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="detailContentBody">
        <a-row>
          <a-col :span="12">
            <div class="chooseLeft">
              <div class="leftTitle">
                <span class="leftTitleLeft">選擇套保算力包</span>
                <span class="leftTitleRight">最多關聯：100T(到手算力)</span>
              </div>
              <div class="leftBody">
                <div class="leftBodyIntro">
                  <p>1.结算前，关联算力不可进行退单/转让/续单操作;</p>
                  <p>2.合约创建后，若算力锁定时间早于结算时间，将自动延长至结算时间；</p>
                </div>
                <div class="leftBodyCards">
                  <a-card hoverable title="BTC 90天算力包">
                    <p>
                      <span class="leftInfoLeft">
                        <span class="leftInfoTitle">总金额</span>
                        <span>4250.00 USD</span>
                      </span>
                      <span class="leftInfoRight">
                        <span class="leftInfoRightTitle">总算力</span>
                        <span>10T</span>
                      </span>
                    </p>
                    <p>
                      <span class="leftInfoLeft">
                        <span class="leftInfoTitle">开挖时间</span>
                        <span>06/02/2020 00:00:00</span>
                      </span>
                      <span class="leftInfoRight">
                        <span class="leftInfoRightTitle">基础算力</span>
                        <span>5T</span>
                      </span>
                    </p>
                    <p>
                      <span class="leftInfoLeft">
                        <span class="leftInfoTitle">锁定时间</span>
                        <span>06/02/2020 00:00:00</span>
                      </span>
                      <span class="leftInfoRight">
                        <span class="leftInfoRightTitle">奖励算力</span>
                        <span>5T</span>
                      </span>
                    </p>
                  </a-card>
                  <a-card hoverable title="BTC 90天算力包">
                    <p>
                      <span class="leftInfoLeft">
                        <span class="leftInfoTitle">总金额</span>
                        <span>4250.00 USD</span>
                      </span>
                      <span class="leftInfoRight">
                        <span class="leftInfoRightTitle">总算力</span>
                        <span>10T</span>
                      </span>
                    </p>
                    <p>
                      <span class="leftInfoLeft">
                        <span class="leftInfoTitle">开挖时间</span>
                        <span>06/02/2020 00:00:00</span>
                      </span>
                      <span class="leftInfoRight">
                        <span class="leftInfoRightTitle">基础算力</span>
                        <span>5T</span>
                      </span>
                    </p>
                    <p>
                      <span class="leftInfoLeft">
                        <span class="leftInfoTitle">锁定时间</span>
                        <span>06/02/2020 00:00:00</span>
                      </span>
                      <span class="leftInfoRight">
                        <span class="leftInfoRightTitle">奖励算力</span>
                        <span>5T</span>
                      </span>
                    </p>
                  </a-card>
                  <a-card hoverable title="BTC 90天算力包">
                    <p>
                      <span class="leftInfoLeft">
                        <span class="leftInfoTitle">总金额</span>
                        <span>4250.00 USD</span>
                      </span>
                      <span class="leftInfoRight">
                        <span class="leftInfoRightTitle">总算力</span>
                        <span>10T</span>
                      </span>
                    </p>
                    <p>
                      <span class="leftInfoLeft">
                        <span class="leftInfoTitle">开挖时间</span>
                        <span>06/02/2020 00:00:00</span>
                      </span>
                      <span class="leftInfoRight">
                        <span class="leftInfoRightTitle">基础算力</span>
                        <span>5T</span>
                      </span>
                    </p>
                    <p>
                      <span class="leftInfoLeft">
                        <span class="leftInfoTitle">锁定时间</span>
                        <span>06/02/2020 00:00:00</span>
                      </span>
                      <span class="leftInfoRight">
                        <span class="leftInfoRightTitle">奖励算力</span>
                        <span>5T</span>
                      </span>
                    </p>
                  </a-card>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="12">
            <div class="orderRight">
              <div class="rightTitle">订单总览</div>
              <div class="rightInfo">
                <p>
                  <span class="rightInfoLeft">
                    <span class="rightInfoTitle">名称：</span>
                    <span>算力收益套保合约</span>
                  </span>
                  <span>
                    <span class="rightInfoTitle">套保周期：</span>
                    <span>90天</span>
                  </span>
                </p>
                <p>
                  <span class="rightInfoLeft">
                    <span class="rightInfoTitle">止损率：</span>
                    <span>90%</span>
                  </span>
                  <span>
                    <span class="rightInfoTitle">止损价：</span>
                    <span>9000.0000 USDT</span>
                  </span>
                </p>
                <p>
                  <span class="rightInfoLeft">
                    <span class="rightInfoTitle">止赢率：</span>
                    <span>200%</span>
                  </span>
                  <span>
                    <span class="rightInfoTitle">止盈价：</span>
                    <span>20000.0000 USDT</span>
                  </span>
                </p>
                <p>
                  <span class="rightInfoLeft">
                    <span class="rightInfoTitle">生效时间：</span>
                    <span>18/02/2020 00:00:00</span>
                  </span>
                  <span>
                    <span class="rightInfoTitle">结算时间：</span>
                    <span>19/05/2020 00:00:00</span>
                  </span>
                </p>
              </div>
              <div class="interactMode">
                <label for="interactMode" class="interModeLabelTile">选择交互方式：</label>
                <a-radio-group v-model="value">
                  <a-radio-button value="USDT">USDT</a-radio-button>
                  <a-radio-button value="USD">USD</a-radio-button>
                </a-radio-group>
                <p>可用餘額：1000000000.0000</p>
              </div>
              <div class="hashrateAgreement">
                <p>
                  <span>
                    <a-checkbox :indeterminate="indeterminate" @click="taggleIndeterminate">
                      我同意
                      <span style="color:#FFAB32">《套保合約服務協議》</span>
                    </a-checkbox>
                  </span>
                </p>
                <a-button size="large" block>立即购买</a-button>
              </div>
            </div>
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
      value: 'USDT', //USDT/USD单选框初始值
      indeterminate: false, //设置协议复选框选中状态样式
    };
  },
  methods: {
    taggleIndeterminate() {
      //设置协议复选框选中状态样式
      this.indeterminate = !this.indeterminate;
    },
  },
};
</script>

<style lang="scss">
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
  .detailContent {
    width: 60%;
    .detailContentBody {
      background-color: #ffffff;
      padding: 20px;
      font-size: 16px;
      .chooseLeft {
        width: 100%;
        border-right: 1px solid #eeeeee;
        padding-right: 20px;
        .leftTitle {
          width: 100%;
          margin: 10px 0 20px 0;
          .leftTitleLeft {
            color: #262626;
            font-size: 18px;
            font-weight: bolder;
          }
          .leftTitleRight {
            float: right;
            color: #898989;
            font-size: 14px;
            padding-top: 3px;
          }
        }
        .leftBody {
          .leftBodyIntro {
            color: #999999;
            font-size: 14px;
          }
          .leftBodyCards {
            font-size: 14px;
            width: 100%;
            .ant-card {
              background-color: #fafafa;
              border-radius: 8px;
              border-color: #fafafa;
              margin-bottom: 20px;
              .ant-card-head {
                border: none;
              }
              .ant-card-body {
                padding: 0 24px 0 24px;
                span {
                  display: inline-block;
                }
                .leftInfoLeft {
                  width: 65%;
                }
                .leftInfoRight {
                  width: 35%;
                }
                .leftInfoTitle {
                  color: #999999;
                }
                .leftInfoTitle {
                  width: 30%;
                }
                .leftInfoRightTitle {
                  width: 60%;
                }
              }
            }
            .ant-card:hover {
              border-color: #ffa441;
              background-color: rgba(255, 164, 65, 0.04);
            }
          }
        }
      }
      .orderRight {
        width: 100%;
        padding-left: 20px;
        .rightTitle {
          margin: 10px 0 20px 0;
          color: #262626;
          font-size: 18px;
          font-weight: bolder;
        }
        .rightInfo {
          font-size: 14px;
          width: 100%;
          p {
            border-bottom: 1px solid #eeeeee;
            padding: 10px 0;
          }
          span {
            display: inline-block;
          }
          .rightInfoLeft {
            width: 50%;
          }
          .rightInfoTitle {
            font-weight: bold;
          }
        }
        .interactMode {
          .interModeLabelTile {
            display: block;
            color: #262626;
            font-size: 16px;
            font-weight: bolder;
            margin: 10px 0 20px 0;
          }
          .ant-radio-group {
            width: 100%;
          }
          .ant-radio-button-wrapper {
            padding: 0px;
            text-align: center;
            border-radius: 2px;
            width: 40%;
            margin-right: 1em;
          }
          .ant-radio-button-wrapper:hover {
            color: #ffab32;
          }
          .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
            color: #ffab32;
            border: 1px solid #ffab32;
            box-shadow: none;
          }
          p {
            color: #999999;
            font-size: 14px;
            margin: 25px 0 35px 0;
          }
        }
        .hashrateAgreement {
          .ant-checkbox-inner,
          .ant-checkbox-wrapper:hover .ant-checkbox-inner,
          .ant-checkbox:hover .ant-checkbox-inner,
          .ant-checkbox-input:focus + .ant-checkbox-inner {
            border-color: #ffab32;
          }
          .ant-checkbox-indeterminate .ant-checkbox-inner::after {
            background-color: #ffab32;
          }
          p .ant-checkbox-wrapper {
            color: #898989;
            font-size: 0.8em;
          }
          .ant-btn {
            background-color: #ffab32;
            border-radius: 2px;
            color: #ffffff;
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
  }
}
@media screen and (max-width: 500px) {
  .detailContainer .detailContent {
    width: 100%;
  }
}
</style>
