<template>
  <div class="detailContainer">
    <div class="detailContent">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>增值服务</a-breadcrumb-item>
        <a-breadcrumb-item>订单总览</a-breadcrumb-item>
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
                <div class="leftBodyCards" v-show="!totalNum || totalNum <= 0">没有数据...</div>
                <div class="leftBodyCards" v-for="data in powerList" :key="data.id">
                  <a-card hoverable :title="data.name">
                    <p>
                      <span class="leftInfoLeft">
                        <span class="leftInfoTitle">总金额</span>
                        <span>
                          {{ data.work_state != 0 ? data.raw_total_deposit_coin :
                          data.total_deposit_coin }}{{ data.pay_currency }}
                        </span>
                      </span>
                      <span class="leftInfoRight">
                        <span class="leftInfoRightTitle">总算力</span>
                        <span>{{ mult(data.computing_power, data.num) }}T</span>
                      </span>
                    </p>
                    <p>
                      <span class="leftInfoLeft">
                        <span class="leftInfoTitle">开挖时间</span>
                        <span>{{ data.time_income }}</span>
                      </span>
                      <span class="leftInfoRight">
                        <span class="leftInfoRightTitle">基础算力</span>
                        <span>{{ mult(data.base_power, data.num) }}T</span>
                      </span>
                    </p>
                    <p>
                      <span class="leftInfoLeft">
                        <span class="leftInfoTitle">锁定时间</span>
                        <span>{{ data.regular_end_date }}</span>
                      </span>
                      <span class="leftInfoRight">
                        <span class="leftInfoRightTitle">奖励算力</span>
                        <span>{{ mult((data.computing_power - data.base_power), data.num) }}T</span>
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
                    <span>{{ powerOrder.detail.name }}</span>
                  </span>
                  <span>
                    <span class="rightInfoTitle">套保周期：</span>
                    <span>{{ powerOrder.detail.period }}天</span>
                  </span>
                </p>
                <p>
                  <span class="rightInfoLeft">
                    <span class="rightInfoTitle">止损率：</span>
                    <span>{{ powerOrder.detail.low_limit }}%</span>
                  </span>
                  <span>
                    <span class="rightInfoTitle">止损价：</span>
                    <span style="color: #ffab32;">9000.0000 USDT</span>
                  </span>
                </p>
                <p>
                  <span class="rightInfoLeft">
                    <span class="rightInfoTitle">止赢率：</span>
                    <span>{{ powerOrder.detail.hign_limit }}%</span>
                  </span>
                  <span>
                    <span class="rightInfoTitle">止盈价：</span>
                    <span style="color: #ffab32;">20000.0000 USDT</span>
                  </span>
                </p>
                <p>
                  <span class="rightInfoLeft">
                    <span class="rightInfoTitle">生效时间：</span>
                    <span>{{ powerOrder.detail.start_time }}</span>
                  </span>
                  <span>
                    <span class="rightInfoTitle">结算时间：</span>
                    <span>{{ powerOrder.detail.settle_time }}</span>
                  </span>
                </p>
              </div>
              <div class="interactMode">
                <label for="interactMode" class="interModeLabelTile">选择交互方式：</label>
                <a-radio-group v-model="value">
                  <a-radio-button value="USDT">USDT</a-radio-button>
                  <a-radio-button value="USD">USD</a-radio-button>
                </a-radio-group>
                <p>
                  可用餘額：{{ surplusPowerNum =
                  value === 'USDT'
                  ? surplusPower[0].payment_avail
                  : surplusPower[1].payment_avail }}
                </p>
              </div>
              <div class="hashrateAgreement">
                <p>
                  <span>
                    <a-checkbox :indeterminate="indeterminate" @click="taggleIndeterminate">
                      我同意
                      <a href style="color:#FFAB32">《套保合約服務協議》</a>
                    </a-checkbox>
                  </span>
                </p>
                <a-button :disabled="!indeterminate" size="large" block @click="onChargeClick">立即购买</a-button>
                <div class="hashrateNodal">
                  <a-modal
                    title="安全验证"
                    centered
                    v-model="chargeVisible"
                    okText="确认购买"
                    cancelText="取消"
                    width="350px"
                    @ok="confirmCharge"
                  >
                    <p>交易密码</p>
                    <p>
                      <a-input />
                    </p>
                    <router-link to="/account/forget_trade_pwd">
                      <p>忘记密码？</p>
                    </router-link>
                  </a-modal>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import { getPurchasableOrder, getSurplusPower } from '@/script/api';
import { mult } from '@/script/utils';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      chargeVisible: false, //点击弹窗隐藏/显示
      value: 'USDT', //USDT/USD单选框初始值
      indeterminate: false, //设置协议复选框选中状态样式
      powerList: [], //  选择套保算力包
      orderDetail: {}, //  套保订单详情
      totalNum: 0, //  card总数
      isSign: '', //  签名，用于下单
      surplusPower: [{ payment_avail: '' }, { payment_avail: '' }], //  可用余额,解决属性初次加载不存在的报错
      surplusPowerNum: [], //  可用余额依据不同选择方式的具体数额
    };
  },
  created() {
    getPurchasableOrder().then(resp => {
      // console.log(resp);
      this.powerList = resp.datas.rented_list;
      this.totalNum = resp.datas.total;
    });
    getSurplusPower({ type: 'rent' }).then(resp => {
      // console.log(resp);
      this.surplusPower = resp.datas.list;
      this.surplusPowerNum = this.surplusPower[0].payment_avail;
      // console.log(this.surplusPower);
    });
    console.log(this.powerOrder);
  },
  computed: {
    ...mapGetters({ powerOrder: 'singleInsurance' }),
    mult: () => mult,
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
    //  立即购买
    onChargeClick() {
      //  判断余额是否充足
      if (
        this.surplusPowerNum < 0 ||
        this.surplusPowerNum < this.mult(this.unitPriceNum, this.chargeAmount, this.currencyValue)
      ) {
        this.$message.info('您的余额不足，请及时充值！！！');
      } else {
        //  余额充足，弹出交易框
        this.chargeVisible = true;
      }
    },
    //  确认购买
    confirmCharge() {
      //交易密码验证            可能需要专门提出来写
      if (true) return false;

      //提交购买
      rentPower({
        // machine_id: this.power.machine_id, // 矿机id
        // machine_type, // 矿机类型
        // num: this.chargeAmount, // 租用数量
        // payment_code: this.currencyValue, // 支付方式
      }).then(resp => {
        console.log(resp);
        this.$message.info('恭喜您购买成功！！！');
        //  购买成功，弹出交易框
        this.chargeVisible = false;
        //提交成功之后，返回到上个页面
        this.$router.go(-1);
      });
    },
  },
};
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
  .detailContent {
    width: 60%;
    margin-bottom: 20px;
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
              /deep/ .ant-card-body {
                padding: 0 20px 0 20px;
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
        width: 29%;
        padding-left: 20px;
        position: fixed;
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
            background-color: #ffab32;
            border-radius: 2px;
            color: #ffffff;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .detailContainer {
    .detailContent {
      width: 100%;
      margin-bottom: 10px;
      .detailContentBody {
        padding: 5px;
        font-size: 10px;
        .chooseLeft {
          padding-right: 5px;
          .leftTitle {
            width: 100%;
            margin: 10px 0 10px 0;
            .leftTitleLeft {
              font-size: 15px;
            }
            .leftTitleRight {
              float: left;
              width: 100%;
              font-size: 10px;
              padding: 3px 0 5px 0;
            }
          }
          .leftBody {
            .leftBodyIntro {
              font-size: 10px;
            }
            .leftBodyCards {
              font-size: 10px;
              width: 100%;
              .ant-card {
                margin-bottom: 10px;
                /deep/ .ant-card-body {
                  padding: 0 5px 0 5px;
                  span {
                    display: block;
                  }
                  .leftInfoLeft {
                    width: 100%;
                  }
                  .leftInfoRight {
                    width: 100%;
                  }
                  .leftInfoTitle {
                    width: 100%;
                  }
                  .leftInfoRightTitle {
                    width: 100%;
                  }
                }
              }
            }
          }
        }
        .orderRight {
          padding-left: 5px;
          width: 49%;
          .rightTitle {
            margin: 10px 0 0 0;
            font-size: 15px;
          }
          .rightInfo {
            font-size: 10px;
            p {
              padding: 5px 0;
            }
            span {
              display: inline-block;
            }
            .rightInfoLeft {
              width: 100%;
            }
          }
          .interactMode {
            .interModeLabelTile {
              font-size: 10px;
              margin: 5px 0 10px 0;
            }
            .ant-radio-button-wrapper {
              padding: 0px;
              text-align: center;
              border-radius: 2px;
              width: 42%;
            }
            p {
              font-size: 10px;
              margin: 10px 0 15px 0;
            }
          }
        }
      }
    }
  }
}
</style>
