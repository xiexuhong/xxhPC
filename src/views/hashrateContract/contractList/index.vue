<template>
  <div class="contractListContainer">
    <div class="listTitle">
      <p>合约列表</p>
      <ul>
        <li>
          <span>基础算力</span>
          <span class="listTitleContent">{{ powerCount.base_power }}T</span>
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
                <p
                  style="color:#999999;textAlign:center"
                >{{ powerCount.computing_power }}T = {{ powerCount.base_power }} + {{ powerCount.additional_power }}</p>
              </div>
              <div slot="content">
                <ul>
                  <li>
                    <span>浮动算力</span>
                    <span>{{ powerCount.float_power }}T</span>
                  </li>
                  <li>
                    <span>达标算力</span>
                    <span>{{ powerCount.pe_power }}T</span>
                  </li>
                  <li>
                    <span>期货算力</span>
                    <span>{{ powerCount.futures_power }}T</span>
                  </li>
                  <li>
                    <span>定期算力</span>
                    <span>{{ powerCount.regular_power }}T</span>
                  </li>
                  <li>
                    <span>邀请算力</span>
                    <span>{{ powerCount.inviter_power }}T</span>
                  </li>
                  <li v-if="powerCount.td_power > 0">
                    <span>成长算力</span>
                    <span>{{ powerCount.td_power }}T</span>
                  </li>
                  <li v-if="powerCount.coupon_power > 0">
                    <span>优惠券算力</span>
                    <span>{{ powerCount.coupon_power }}T</span>
                  </li>
                </ul>
              </div>
              <span class="infoIcon">!</span>
            </a-popover>
          </span>
          <span class="listTitleContent">{{ powerCount.computing_power }}T</span>
        </li>
        <li>
          <span>总收益</span>
          <span class="listTitleContent">{{ powerCount.income_num }}</span>
        </li>
        <li style="border:none">
          <span>算龄</span>
          <span class="listTitleContent">{{ powerCount.my_td }}T*天</span>
        </li>
      </ul>
    </div>
    <div class="listContent">
      <a-tabs
        defaultActiveKey="1"
        size="large"
        :tabBarStyle="{ width: '100%', background: '#FFFFFF', margin: 0 }"
      >
        <a-tab-pane tab="算力合约" key="1">
          <HashrateContractItem :rentedList="rentedList"></HashrateContractItem>
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
import { getContractList } from '@/script/api';
export default {
  data() {
    return {
      clicked: false, //点击气泡卡隐藏/显示
      powerCount: {}, //  当前用户算力相关信息
      rentedList: [], //  当前用户算力合约信息
    };
  },
  async created() {
    //  获取合约算力列表
    getContractList().then(resp => {
      // console.log(resp.datas);
      //  算力总览
      this.powerCount = resp.datas.power_count;
      //  算力详情
      this.rentedList = resp.datas.rented_list;
      // console.log(this.powerCount);
      // console.log(this.rentedList);
    });
    // const { datas } = await getContractList({
    //   page: '1',
    //   coin: 'BTC',
    //   type: 'ALL',
    //   work_type: 'ALL',
    //   date_type: 'ALL',
    //   pay_type: 'ALL',
    // });
    // this.powerCount = datas.power_count;
    // this.rentedList = datas.rented_list;
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
