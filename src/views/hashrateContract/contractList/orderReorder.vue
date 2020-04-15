<template>
  <div class="contractListContainer">
    <div class="listTitle">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>合约列表</a-breadcrumb-item>
        <a-breadcrumb-item>续单</a-breadcrumb-item>
      </a-breadcrumb>
      <ul>
        <li>
          <span>名称</span>
          <span class="listTitleContent">BTC新手专享30天算力包</span>
        </li>
        <li>
          <span>金额</span>
          <span class="listTitleContent">2312.00 USDT</span>
        </li>
        <li>
          <span>
            到手总算力
            <a-popover
              trigger="click"
              :visible="clicked"
              @visibleChange="handleClickChangeTit"
              placement="rightTop"
            >
              <div slot="title">
                <p style="color:#595959;textAlign:center">算力构成</p>
                <p style="color:#999999;textAlign:center">720T=200.00+520.00</p>
              </div>
              <div slot="content">
                <ul>
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
        <label for="fadeAmount">续期方式：</label>
        <a-radio-group v-model="reorderMethods">
          <a-radio name="fadeAmount" :value="90">90天</a-radio>
          <a-radio name="fadeAmount" :value="180">180天</a-radio>
        </a-radio-group>
      </p>
      <p>续期订单信息</p>
      <div class="reorderInfo">
        <span class="reorderInfoItem">
          <span>续期金额</span>
          <span>6000.00 USDT</span>
        </span>
        <span class="reorderInfoItem">
          <span>到手总算力</span>
          <a-popover
            trigger="click"
            :visible="reorderTotalHash"
            @visibleChange="handleClickChangeReoderT"
            placement="rightTop"
          >
            <div slot="title">
              <p style="color:#595959;textAlign:center">算力构成</p>
              <p style="color:#999999;textAlign:center">720T=200.00+520.00</p>
            </div>
            <div slot="content">
              <ul>
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
            <span
              class="listTitleContent"
              style="color:#FFAB32;borderBottom: 1px solid #FFAB32;cursor:pointer"
            >600.00T</span>
          </a-popover>
        </span>
        <span class="reorderInfoItem">
          <span>合约期限</span>
          <span>90天</span>
        </span>
        <span class="reorderInfoItem">
          <span>金额差价</span>
          <a-popover
            trigger="click"
            :visible="reorderAmountDiff"
            @visibleChange="handleClickChangeReoderA"
            placement="rightTop"
          >
            <div slot="content" style="width:200px">
              <ul>
                <li>
                  <span style="width:35%">原有金额</span>
                  <span style="width:65%">6000000.00 CNY</span>
                </li>
                <li>
                  <span style="width:35%">现有金额</span>
                  <span style="width:65%">6000000.00 CNY</span>
                </li>
              </ul>
            </div>
            <span
              class="listTitleContent"
              style="color:#FFAB32;borderBottom: 1px solid #FFAB32;cursor:pointer"
            >0.00 CNY</span>
          </a-popover>
        </span>
        <span class="reorderInfoItem lockTime">
          <span>锁定时间</span>
          <span>{{new Date().toString()}}</span>
        </span>
      </div>
      <p>
        <a-button size="large">立即续期</a-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reorderMethods: 90, //续期方式单选框值
      clicked: false, //点击气泡卡隐藏/显示--title--到手总算力
      reorderTotalHash: false, //点击气泡卡隐藏/显示--续期订单信息--到手总算力
      reorderAmountDiff: false, //点击气泡卡隐藏/显示--续期订单信息--金额差价
    };
  },
  methods: {
    handleClickChangeTit(visible) {
      //点击气泡卡隐藏/显示--title--到手总算力
      this.clicked = visible;
    },
    handleClickChangeReoderT(visible) {
      //点击气泡卡隐藏/显示--续期订单信息--到手总算力
      this.reorderTotalHash = visible;
    },
    handleClickChangeReoderA(visible) {
      //点击气泡卡隐藏/显示--续期订单信息--金额差价
      this.reorderAmountDiff = visible;
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
    .reorderInfo {
      margin: 0 auto 20px;
      padding: 20px;
      background-color: #f8f8f8;
      display: flex;
      justify-content: space-between;
      .reorderInfoItem {
        display: inline-block;
        margin-right: 2px;
        &.lockTime {
          width: 30%;
        }
        span {
          display: block;
          width: 100%;
          text-align: center;
          margin-bottom: 10px;
        }
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
      .reorderInfo {
        padding: 5px;
        .reorderInfoItem {
          margin-right: 2px;
          &.lockTime {
            width: 25%;
          }
          span {
            display: block;
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>