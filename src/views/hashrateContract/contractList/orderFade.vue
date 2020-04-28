<template>
  <div class="contractListContainer">
    <div class="listTitle">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>合约列表</a-breadcrumb-item>
        <a-breadcrumb-item>退单</a-breadcrumb-item>
      </a-breadcrumb>
      <ul>
        <li>
          <span>名称</span>
          <span class="listTitleContent">{{ power.name }}</span>
        </li>
        <li>
          <span>金额</span>
          <span class="listTitleContent">
            {{ power.allow_cancel == 2 ? power.continueTotalDeposit :
            (power.work_state != 0 ? power.rawTotalDeposit :
            power.totalDeposit) }}{{ power.pay_currency }}
          </span>
        </li>
        <li>
          <span>
            到手总算力
            <a-popover
              trigger="click"
              :visible="clicked"
              @visibleChange="handleClickChange"
              placement="rightTop"
            >
              <div slot="title">
                <p style="color:#595959;textAlign:center">总算力</p>
                <p
                  style="color:#999999;textAlign:center"
                >{{ (power.computingPower * power.num).toFixed(2) }}T</p>
              </div>
              <div slot="content">
                <ul>
                  <li>
                    <span>基础算力</span>
                    <span>{{ power.basePower * power.num }}T</span>
                  </li>
                  <li>
                    <span>浮动算力</span>
                    <span>{{ power.floatPower * power.num }}T</span>
                  </li>
                  <li>
                    <span>达标算力</span>
                    <span>{{ power.pePower * power.num }}T</span>
                  </li>
                  <li>
                    <span>期货算力</span>
                    <span>{{ power.futuresPower * power.num }}T</span>
                  </li>
                  <li>
                    <span>定期算力</span>
                    <span>{{ power.regularPower * power.num }}T</span>
                  </li>
                  <li v-if="power.inviterPower > 0">
                    <span>邀请算力</span>
                    <span>{{ power.inviterPower * power.num }}T</span>
                  </li>
                  <li v-if="power.tdPower > 0">
                    <span>成长算力</span>
                    <span>{{ power.tdPower * power.num }}T</span>
                  </li>
                  <li v-if="power.couponPower > 0">
                    <span>优惠券算力</span>
                    <span>{{ power.couponPower * power.num }}T</span>
                  </li>
                </ul>
              </div>
              <span
                class="listTitleContent"
                style="color:#FFAB32;borderBottom: 1px solid #FFAB32;cursor:pointer"
              >{{(power.computingPower * power.num).toFixed(2)}} T</span>
            </a-popover>
          </span>
        </li>
        <li>
          <span>合约期限</span>
          <span class="listTitleContent">{{ power.regularDateNum }}天</span>
        </li>
        <li>
          <span>状态</span>
          <span class="listTitleContent">{{ power.display_status }}</span>
        </li>
        <li>
          <span>开挖时间</span>
          <span class="listTitleContent">{{ power.time_income }}</span>
        </li>
        <li>
          <span>下单时间</span>
          <span class="listTitleContent">{{ power.time_creat }}</span>
        </li>
        <li>
          <span>锁定时间</span>
          <span class="listTitleContent">{{power.auto_stop_date}}</span>
        </li>
      </ul>
    </div>
    <div class="listContent">
      <p>
        <label for="fadeAmount">退单份数：</label>
      </p>
      <p>
        <a-input-number
          id="fadeAmount"
          name="fadeAmount"
          :min="1"
          :max="power.num"
          style="width:30%"
          v-model="fadeNum"
        />
      </p>
      <p style="marginTop:5px">拥有算力份数：{{ power.num }}份</p>
      <p>
        <span>退单方式：</span>
        <span>金额将按照下单金额退还</span>
      </p>
      <p>
        退单金额：
        <span
          style="color:#595959"
        >{{(power.unit_price*fadeNum).toFixed(2)}} {{power.pay_currency}}</span>
      </p>
      <div>
        <a-button size="large" @click="onFadeClick">立即退单</a-button>
        <div class="hashrateNodal">
          <a-modal
            title="退单损失"
            centered
            v-model="fadeVisible"
            okText="确认退单"
            cancelText="取消"
            width="350px"
            @ok="confirmFade"
          >
            <p>{{ fadeDatas }}</p>
          </a-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrderInfo, getOrderFadeLoss, fadeOrder } from '@/script/api';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      clicked: false, //点击气泡卡隐藏/显示
      fadeVisible: false, //点击弹窗隐藏/显示
      fadeNum: 1, //  退单数量
      power: {}, //  退单订单详情
      fadeDatas: '', //  退单损失提示信息
      orderId: '', //  路由传过来的订单编号
    };
  },
  created() {
    // console.log(this.orderId);
    // getOrderInfo({ order_id: this.orderId }).then(resp => {
    //   this.power = resp.datas.info;
    //   // console.log(this.power);
    // });
  },
  mounted() {
    // this.$nextTick(function() {
    //   sessionStorage.setItem('reOrderId', this.$route.params.orderId);
    //   this.orderId = this.$route.params.orderId
    //     ? this.$route.params.orderId
    //     : sessionStorage.getItem('reOrderId');
    //   console.log(this.orderId);
    //   getOrderInfo({ order_id: this.orderId }).then(resp => {
    //     this.power = resp.datas.info;
    //     // console.log(this.power);
    //   });
    // });
  },
  computed: {
    // ...mapGetters({ orderId: 'orderId' }),
  },
  methods: {
    handleClickChange(visible) {
      //点击气泡卡隐藏/显示
      this.clicked = visible;
    },
    //  立即退单
    onFadeClick() {
      //  弹出交易框
      this.fadeVisible = true;
      //提交购买
      getOrderFadeLoss({
        order_id: this.orderId, // 订单id
        return_num: this.fadeNum, // 数量
      }).then(resp => {
        // console.log(resp);
        this.fadeDatas = resp.datas;
      });
    },
    confirmFade() {
      fadeOrder({
        order_id: this.orderId, // 订单id
        return_num: this.fadeNum, // 数量
      })
        .then(resp => {
          console.log(resp);
          this.$message.info('退单成功！！！');
          //  退单成功，隐藏交易框
          this.fadeVisible = false;
          //提交成功之后，返回到上个页面
          this.$router.go(-1);
        })
        .catch(() => {
          //  退单成功，隐藏交易框
          this.fadeVisible = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.contractListContainer {
  width: 100%;
  .listTitle {
    width: 100%;
    padding: 20px 20px 10px 20px;
    background-color: #ffffff;
    margin-bottom: 15px;
    .ant-breadcrumb {
      color: #ffab32;
      margin-bottom: 30px;
      font-size: 16px;
    }
    ul {
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-wrap: no-wrap;
      li {
        // width: 12%;
        color: #999999;
        text-align: center;
        margin-right: 5px;
        span {
          font-size: 14px;
          display: inline-block;
          width: 100%;
        }
        span.listTitleContent {
          font-size: 12px;
          color: #595959;
          font-weight: 500;
          margin-top: 10px;
        }
      }
    }
  }
  .listContent {
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
    font-size: 14px;
    color: #999999;
    min-height: 500px;
    p,
    div {
      margin-bottom: 20px;
    }
    .ant-btn {
      background-color: #ffab32;
      border-radius: 2px;
      color: #ffffff;
      width: 20%;
    }
  }
  /deep/.ant-radio-checked .ant-radio-inner {
    border-color: #ffab32;
  }
  /deep/.ant-radio-inner::after {
    background-color: #ffab32;
  }
}
.ant-popover-inner {
  width: 100%;
  border-bottom: 1px solid #f4f4f6;
  .ant-popover-inner-content {
    color: #999999;
    ul {
      width: 100%;
      li {
        height: 2em;
        span {
          display: inline-block;
          width: 50%;
          text-align: center;
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .contractListContainer {
    .listTitle {
      padding: 5px 10px 5px 10px;
      margin-bottom: 1px;
      .ant-breadcrumb {
        margin-bottom: 5px;
        font-size: 12px;
      }
      ul {
        flex-wrap: wrap;
        li {
          width: 30%;
          margin-right: 2px;
          span {
            font-size: 10px;
            &.listTitleContent {
              font-size: 10px;
              font-weight: 500;
              margin-top: 2px;
            }
          }
        }
      }
    }
    .listContent {
      padding: 10px;
      font-size: 10px;
      div .ant-btn {
        width: 100%;
      }
    }
  }
}
</style>