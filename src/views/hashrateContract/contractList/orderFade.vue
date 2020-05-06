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
            <popover :power="power" :num="power.num">
              <span
                class="listTitleContent"
                style="color:#FFAB32;borderBottom: 1px solid #FFAB32;cursor:pointer"
              >{{mult(power.computingPower, power.num)}} T</span>
            </popover>
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
        >{{mult(power.unit_price, fadeNum, power.pay_currency)}} {{ power.pay_currency }}</span>
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
import popover from '@/components/popover';
import { getOrderInfo, getOrderFadeLoss, fadeOrder } from '@/script/api';
import { mult } from '@/script/utils';
export default {
  props: ['orderId'],
  components: {
    popover,
  },
  data() {
    return {
      fadeVisible: false, //点击弹窗隐藏/显示
      fadeNum: 1, //  退单数量
      power: {}, //  退单订单详情
      fadeDatas: '', //  退单损失提示信息
    };
  },
  created() {
    // console.log(this.$route.query.orderId);
    getOrderInfo({ order_id: this.$route.query.orderId }).then(resp => {
      this.power = resp.datas.info;
      // console.log(this.power);
    });
  },
  computed: {
    mult: () => mult,
  },
  methods: {
    //  立即退单
    onFadeClick() {
      //  弹出交易框
      this.fadeVisible = true;
      //提交购买
      getOrderFadeLoss({
        order_id: this.$route.query.orderId, // 订单id
        return_num: this.fadeNum, // 数量
      }).then(resp => {
        // console.log(resp);
        this.fadeDatas = resp.datas;
      });
    },
    confirmFade() {
      fadeOrder({
        order_id: this.$route.query.orderId, // 订单id
        return_num: this.fadeNum, // 数量
      })
        .then(resp => {
          console.log(resp);
          this.$message.info('退单成功！！！');
          //提交成功之后，返回到上个页面
          this.$router.go(-1);
        })
        .finally(() => {
          //  隐藏交易框
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