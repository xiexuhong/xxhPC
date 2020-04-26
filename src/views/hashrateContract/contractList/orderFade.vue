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
            {{ power.allow_cancel == 2 ? power.continue_total_deposit_coin :
            (power.work_state != 0 ? power.raw_total_deposit :
            power.total_deposit) }}{{ power.pay_currency }}
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
                <p style="color:#595959;textAlign:center">算力构成</p>
                <p
                  style="color:#999999;textAlign:center"
                >{{ (power.computing_power * power.num).toFixed(2) }}T</p>
              </div>
              <div slot="content">
                <ul>
                  <li>
                    <span>基础算力</span>
                    <span>{{ power.basePower }}T</span>
                  </li>
                  <li>
                    <span>浮动算力</span>
                    <span>{{ power.floatPower }}T</span>
                  </li>
                  <li>
                    <span>达标算力</span>
                    <span>{{ power.pePower }}T</span>
                  </li>
                  <li>
                    <span>期货算力</span>
                    <span>{{ power.futuresPower }}T</span>
                  </li>
                  <li>
                    <span>定期算力</span>
                    <span>{{ power.regularPower }}T</span>
                  </li>
                  <li>
                    <span>邀请算力</span>
                    <span>{{ power.inviterPower }}T</span>
                  </li>
                  <li v-if="power.tdPower > 0">
                    <span>成长算力</span>
                    <span>{{ power.tdPower }}T</span>
                  </li>
                  <li v-if="power.couponPower > 0">
                    <span>优惠券算力</span>
                    <span>{{ power.couponPower }}T</span>
                  </li>
                </ul>
              </div>
              <span
                class="listTitleContent"
                style="color:#FFAB32;borderBottom: 1px solid #FFAB32;cursor:pointer"
              >720.00T</span>
            </a-popover>
          </span>
        </li>
        <li>
          <span>合约期限</span>
          <span class="listTitleContent">600天</span>
        </li>
        <li>
          <span>状态</span>
          <span class="listTitleContent">进行中</span>
        </li>
        <li>
          <span>开挖时间</span>
          <span class="listTitleContent">{{new Date().toString()}}</span>
        </li>
        <li>
          <span>下单时间</span>
          <span class="listTitleContent">{{new Date().toString()}}</span>
        </li>
        <li>
          <span>锁定时间</span>
          <span class="listTitleContent">{{new Date().toString()}}</span>
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
          defaultValue="1"
          :min="1"
          :max="1000"
          style="width:30%"
        />
      </p>
      <p style="marginTop:5px">拥有算力份数：200份</p>
      <p>
        <label for="fadeMethod">退单方式：</label>
        <a-radio checked>现金金额</a-radio>
      </p>
      <p>
        退单金额：
        <span style="color:#595959">3000 USDT</span>
      </p>
      <p>
        <a-button size="large">立即购买</a-button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      clicked: false, //点击气泡卡隐藏/显示
    };
  },
  created() {
    console.log(this.power);
  },
  computed: {
    ...mapGetters({ power: 'singleContract' }),
  },
  methods: {
    handleClickChange(visible) {
      //点击气泡卡隐藏/显示
      this.clicked = visible;
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
      flex-wrap: wrap;
      li {
        width: 12%;
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
    p {
      margin-bottom: 20px;
      .ant-btn {
        background-color: #ffab32;
        border-radius: 2px;
        color: #ffffff;
        width: 20%;
      }
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
      p {
        margin-bottom: 20px;
        .ant-btn {
          width: 100%;
        }
      }
    }
  }
}
</style>