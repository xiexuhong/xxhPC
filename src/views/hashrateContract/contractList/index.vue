<template>
  <div class="contractListContainer">
    <div class="listTitle">
      <p>合约列表</p>
      <ul>
        <li>
          <span>基础算力</span>
          <span class="listTitleContent">200T</span>
        </li>
        <li>
          <span>
            总算力
            <a-popover
              trigger="click"
              :visible="clicked"
              @visibleChange="handleClickChange"
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
              <span class="infoIcon">!</span>
            </a-popover>
          </span>
          <span class="listTitleContent">720.00T</span>
        </li>
        <li>
          <span>总收益</span>
          <span class="listTitleContent">12315123112</span>
        </li>
        <li style="border:none">
          <span>算龄</span>
          <span class="listTitleContent">5200*D</span>
        </li>
      </ul>
    </div>
    <div class="listContent">
      <a-tabs
        defaultActiveKey="1"
        size="large"
        :tabBarStyle="{width: '100%', background: '#FFFFFF', 
    margin: 0}"
      >
        <a-tab-pane tab="算力合约" key="1">
          <HashrateContractItem></HashrateContractItem>
        </a-tab-pane>
        <a-tab-pane tab="增值服务" key="2">
          <MoreServiceItem></MoreServiceItem>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import HashrateContractItem from './hashrateContractItem';
import MoreServiceItem from './moreServiceItem';
export default {
  data() {
    return {
      clicked: false, //点击气泡卡隐藏/显示
    };
  },
  methods: {
    handleClickChange(visible) {
      //点击气泡卡隐藏/显示
      this.clicked = visible;
    },
  },
  components: {
    HashrateContractItem,
    MoreServiceItem,
  },
};
</script>

<style lang="scss" scoped>
.contractListContainer {
  width: 100%;
  .listTitle {
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
    margin-bottom: 15px;
    p {
      color: #262626;
      font-size: 24px;
    }
    ul {
      width: 100%;
      li {
        display: inline-block;
        width: 25%;
        color: #999999;
        text-align: center;
        border-right: 1px solid #999999;
        span {
          font-size: 18px;
          display: inline-block;
          width: 100%;
        }
        span.listTitleContent {
          font-size: 22px;
          color: #595959;
          font-weight: 500;
          margin-top: 10px;
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
        }
      }
    }
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
.listContent {
  /deep/.ant-tabs-nav {
    color: #999999;
    /deep/.ant-tabs-tab-active {
      color: #262626;
    }
    /deep/.ant-tabs-tab:hover {
      color: #ffab32;
    }
  }
  /deep/.ant-tabs-ink-bar {
    background-color: #ffab32;
  }
}

@media screen and (max-width: 500px) {
  .contractListContainer {
    .listTitle {
      padding: 10px;
      margin-bottom: 10px;
      p {
        font-size: 15px;
      }
      ul {
        li {
          width: 50%;
          border-right: none;
          span {
            font-size: 10px;
          }
          span.listTitleContent {
            font-size: 10px;
            margin-top: 5px;
          }
          .infoIcon {
            display: inline-block;
            width: 15px;
            height: 19px;
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>