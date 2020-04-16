<template>
  <div class="orderDetailContainer">
    <div class="orderDetailContent">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>算力商城</a-breadcrumb-item>
        <a-breadcrumb-item>订单总览</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="orderDetailContentBody">
        <div class="title">订单总览</div>
        <div class="content">
          <a-list itemLayout="horizontal">
            <a-list-item>
              <a-row>
                <a-col :span="7">
                  <span class="contentTitle">名稱:</span>
                  <span>BTC 30天算力包</span>
                </a-col>
                <a-col :span="6">
                  <span class="contentTitle">基礎算力:</span>
                  <span>1.30 T</span>
                </a-col>
                <a-col :span="6">
                  <span class="contentTitle">浮動算力:</span>
                  <span>1.30 T</span>
                </a-col>
                <a-col :span="5">
                  <span class="contentTitle">達標算力:</span>
                  <span>1.30 T</span>
                </a-col>
              </a-row>
            </a-list-item>
            <a-list-item>
              <a-row>
                <a-col :span="7">
                  <span class="contentTitle">期貨算力:</span>
                  <span>1.30 T</span>
                </a-col>
                <a-col :span="6">
                  <span class="contentTitle">定期算力:</span>
                  <span>1.30 T</span>
                </a-col>
                <a-col :span="6">
                  <span class="contentTitle">單價:</span>
                  <span>425.0000 USDT</span>
                </a-col>
                <a-col :span="5">
                  <span class="contentTitle">合約類型:</span>
                  <span>BTC</span>
                </a-col>
              </a-row>
            </a-list-item>
            <a-list-item>
              <a-row>
                <a-col :span="7">
                  <span class="contentTitle">合約期限:</span>
                  <span>30天</span>
                </a-col>
                <a-col :span="6">
                  <span class="contentTitle">開挖時間:</span>
                  <span>19/02/2020 00:00:00</span>
                </a-col>
                <a-col :span="6">
                  <span class="contentTitle">算力來源:</span>
                  <span>京都資本</span>
                </a-col>
                <a-col :span="5"></a-col>
              </a-row>
            </a-list-item>
            <div class="choiceInfo">
              <a-row>
                <a-col :span="8">
                  <label for="chargeAmount" class="chargeAmount">购买份数:</label>
                </a-col>
                <a-col :span="8">
                  <a-input-number
                    id="chargeAmount"
                    size="large"
                    :min="0"
                    :defaultValue="1"
                    @change="onChange"
                  />
                </a-col>
                <a-col :span="8">
                  <span class="chargeAmount">份</span>
                </a-col>
              </a-row>
              <a-row style="margin: 20px 0">
                <a-col :span="8">
                  <label class="chargeAmount">选择交互方式:</label>
                </a-col>
                <a-col :span="16">
                  <a-radio-group v-model="value">
                    <a-radio-button value="USDT">USDT</a-radio-button>
                    <a-radio-button value="USD">USD</a-radio-button>
                  </a-radio-group>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="8" class="chargeAmount">可用余额：</a-col>
                <a-col :span="16" class="chargeAmount">1000000000.0000</a-col>
              </a-row>
            </div>
            <div class="hashrateTotal">
              <p>总计：</p>
              <div>
                <span>
                  到手总算力
                  <a-popover
                    trigger="click"
                    :visible="clicked"
                    @visibleChange="handleClickChange"
                    placement="rightTop"
                  >
                    <div slot="content">
                      <ul class="hashratePopover">
                        <li>
                          <span>基础算力</span>
                          <span>5.00T</span>
                        </li>
                        <li>
                          <span>浮动算力</span>
                          <span>6.50T</span>
                        </li>
                        <li>
                          <span>达标算力</span>
                          <span>0.00T</span>
                        </li>
                        <li>
                          <span>期货算力</span>
                          <span>0.00T</span>
                        </li>
                        <li>
                          <span>定期算力</span>
                          <span>0.00T</span>
                        </li>
                      </ul>
                    </div>
                    <span class="infoIcon">!</span>
                  </a-popover>
                  <span class="totalNum">11.50 T</span>
                </span>
                <span>
                  总金额
                  <span class="totalNum">2125.0000 USDT</span>
                </span>
              </div>
            </div>
            <div class="hashrateAgreement">
              <p>
                <span>
                  <a-checkbox
                    :indeterminate="indeterminate"
                    @click="taggleIndeterminate"
                  >我同意《【運算力】委託管理服務協議》/《雲算力服務銷售協議》</a-checkbox>
                </span>
              </p>
              <a-button size="large" @click="() => (chargeVisible = true)">立即购买</a-button>
              <div class="hashrateNodal">
                <a-modal
                  title="安全验证"
                  centered
                  v-model="chargeVisible"
                  okText="提交"
                  cancelText="取消"
                  width="350px"
                  @ok="() => (chargeVisible = false)"
                >
                  <p>交易密码</p>
                  <p>
                    <a-input />
                  </p>
                  <p>忘记密码？</p>
                </a-modal>
              </div>
            </div>
          </a-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false, //点击气泡卡隐藏/显示
      chargeVisible: false, //点击弹窗隐藏/显示
      value: 'USDT', //单选框初始值
      indeterminate: false, //设置协议复选框选中状态样式
    };
  },
  methods: {
    handleClickChange(visible) {
      //点击气泡卡隐藏/显示
      this.clicked = visible;
    },
    taggleIndeterminate() {
      //设置协议复选框选中状态样式
      this.indeterminate = !this.indeterminate;
    },
  },
};
</script>

<style lang="scss" scoped>
.orderDetailContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  .orderDetailContent {
    width: 60%;
    margin-bottom: 20px;
    .ant-breadcrumb {
      color: #ffab32;
      margin: 10px;
    }
    .orderDetailContentBody {
      background-color: #ffffff;
      padding: 20px;
      font-size: 16px;
      .title {
        color: #262626;
        font-size: 24px;
        margin-bottom: 30px;
      }
      .content,
      .ant-list,
      .ant-row {
        width: 100%;
        .contentTitle {
          font-weight: bold;
          margin-right: 5px;
        }
      }
      .choiceInfo {
        width: 50%;
        margin: 20px 0;
        height: 100%;
        .ant-input-number {
          width: 90%;
        }
        .chargeAmount {
          font-weight: bold;
          line-height: 40px;
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
      }
      .hashrateTotal {
        width: 100%;
        margin-bottom: 2.5em;
        div {
          width: 100%;
          height: 95%;
          padding: 15px 0;
          background-color: #f7f9fa;
          display: flex;
          align-items: center;
          text-indent: 2em;
          .totalNum {
            font-size: 2em;
            font-weight: lighter;
            margin-left: 5px;
          }
          .infoIcon {
            display: inline-block;
            width: 19px;
            height: 19px;
            border: 2px solid rgba(210, 210, 210, 1);
            border-radius: 50%;
            font-size: 13px;
            font-weight: bold;
            font-style: italic;
            color: #cfcfcf;
            cursor: pointer;
            text-indent: 0.5em;
          }
        }
      }
      /deep/.hashrateAgreement {
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
          width: 15em;
          background-color: #ffab32;
          border-radius: 2px;
          color: #ffffff;
        }
      }
    }
  }
}
.ant-popover-inner {
  .ant-popover-inner-content {
    .hashratePopover {
      li {
        width: 130px;
        display: flex;
        justify-content: space-between;
        span {
          display: inline-block;
          width: 45%;
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .orderDetailContainer .orderDetailContent {
    width: 90%;
  }
}
@media screen and (max-width: 500px) {
  .orderDetailContainer .orderDetailContent {
    width: 100%;
    .orderDetailContentBody {
      .title {
        font-size: 15px;
        margin-bottom: 5px;
      }
      .content {
        span {
          font-size: 10px;
          &.contentTitle {
            display: block;
          }
        }
      }
      .choiceInfo {
        width: 100%;
        margin: 5px 0;
        font-size: 10px;
        .ant-input-number {
          width: 90%;
        }
        .chargeAmount {
          font-weight: bold;
        }
        .ant-radio-group {
          width: 100%;
        }
        .ant-radio-button-wrapper {
          text-align: center;
          border-radius: 2px;
          width: 40%;
          margin-right: 1em;
        }
      }
      .hashrateTotal {
        margin-bottom: 1em;
        div {
          padding: 5px;
          .totalNum {
            font-size: 1em;
            margin-left: 5px;
          }
          .infoIcon {
            width: 15px;
            height: 18px;
            font-size: 10px;
            text-indent: 0.2em;
          }
        }
      }
      .hashrateAgreement .ant-btn {
        width: 100%;
      }
    }
  }
}
</style>