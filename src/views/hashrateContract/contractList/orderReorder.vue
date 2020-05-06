<template>
  <div class="contractListContainer">
    <div class="listTitle">
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>合约列表</a-breadcrumb-item>
        <a-breadcrumb-item>{{ power.regular_power == 0 ? '转期' : '续期' }}</a-breadcrumb-item>
      </a-breadcrumb>
      <ul>
        <li>
          <span>名称</span>
          <span class="listTitleContent">{{ power.name }}</span>
        </li>
        <li>
          <span>金额</span>
          <span class="listTitleContent">{{ power.totalDeposit }} {{ power.pay_currency }}</span>
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
        <label for="fadeAmount">定期方式：</label>
        <a-radio-group v-model="reorderMethods" @change="onTimeChange(reorderMethods)">
          <a-radio name="fadeAmount" :value="90">90天</a-radio>
          <a-radio name="fadeAmount" :value="180">180天</a-radio>
        </a-radio-group>
      </p>
      <p>{{ power.regular_power == 0 ? renewal.renewal1[0] : renewal.renewal2[0] }}</p>
      <div class="reorderInfo">
        <span class="reorderInfoItem">
          <span>{{ power.regular_power == 0 ? renewal.renewal1[2] : renewal.renewal2[2] }}</span>
          <span>{{ power.rawTotalDeposit }} {{ power.pay_currency }}</span>
        </span>
        <span class="reorderInfoItem">
          到手总算力
          <popover
            :power="reorderMethods == 90 ? renewalInfo_90 : renewalInfo_180"
            :num="power.num"
          >
            <span
              class="listTitleContent"
              style="color:#FFAB32;borderBottom: 1px solid #FFAB32;cursor:pointer"
            >
              {{
              reorderMethods == 90
              ?
              mult(renewalInfo_90.computing_power, power.num)
              :
              mult(renewalInfo_180.computing_power, power.num)
              }} T
            </span>
          </popover>
        </span>
        <span class="reorderInfoItem">
          <span>{{ power.regular_power == 0 ? renewal.renewal1[1] : renewal.renewal2[1] }}</span>
          <span>{{ reorderMethods }}天</span>
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
                  <span style="width:65%">{{ power.totalDeposit }} {{ power.pay_currency }}</span>
                </li>
                <li>
                  <span style="width:35%">现有金额</span>
                  <span style="width:65%">{{ power.rawTotalDeposit }} {{ power.pay_currency }}</span>
                </li>
              </ul>
            </div>
            <span
              class="listTitleContent"
              style="color:#FFAB32;borderBottom: 1px solid #FFAB32;cursor:pointer"
            >0.00 {{power.pay_currency}}</span>
          </a-popover>
        </span>
        <span class="reorderInfoItem lockTime">
          <span>锁定时间</span>
          <span>{{ time }} 00:00:00</span>
        </span>
      </div>
      <div>
        <a-button size="large" @click="onReOrder">{{ power.regular_power == 0 ? '转期' : '续期' }}</a-button>
        <div class="hashrateNodal">
          <a-modal
            title="提示"
            centered
            v-model="fadeVisible"
            okText="确认"
            cancelText="取消"
            width="350px"
            @ok="confirmReOrder"
          >
            <p>{{ reorderDatas }}</p>
          </a-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import popover from '@/components/popover';
import { getOrderInfo, reOrder } from '@/script/api';
import { mult } from '@/script/utils';
import { Base64 } from 'js-base64'
export default {
  // props: ['orderId'],
  components: {
    popover,
  },
  data() {
    return {
      reorderMethods: 90, //续期方式单选框值
      fadeVisible: false, //点击弹窗隐藏/显示
      reorderAmountDiff: false, //点击气泡卡隐藏/显示--续期订单信息--金额差价
      power: {}, //  续单数据
      renewalInfo_90: {}, //  不同续期方式的数据
      renewalInfo_180: {}, //  不同续期方式的数据
      renewal: {
        //  状态判断
        renewal1: ['转期订单信息', '转期期限', '转期合约金额'],
        renewal2: ['续期订单信息', '续期期限', '续期合约金额'],
      },
      time: '', //  到期时间
      reorderDatas: '', //  续期、转期提示信息
    };
  },
  created() {
    // console.log(Base64.decode(this.$route.query.orderId));
    getOrderInfo({ order_id: Base64.decode(this.$route.query.orderId) }).then(resp => {
      this.power = resp.datas.info;
      let renewalInfo = JSON.parse(JSON.stringify(resp.datas.info.renewal_info));
      this.renewalInfo_90 = renewalInfo.new_90;
      this.renewalInfo_180 = renewalInfo.new_180;
      // console.log(this.power);
      // console.log(renewalInfo);
    });
    this.gettime(this.reorderMethods);
  },
  computed: {
    mult: () => mult,
  },
  methods: {
    //点击气泡卡隐藏/显示--金额差价
    handleClickChangeReoderA(visible) {
      this.reorderAmountDiff = visible;
    },
    //  获取到期时间
    gettime(reorderMethods) {
      let time = reorderMethods;
      //活期
      let date1 = new Date();
      //定期未到期
      if (this.power.is_regular == '1') {
        date1 = new Date(this.power.regular_end_date.split(' ')[0]);
      }
      let date2 = new Date(date1);
      date2.setDate(date1.getDate() + Number(time));
      // console.log(date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate());
      this.time = date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate();
    },
    //  改变定期天数
    onTimeChange(reorderMethods) {
      this.gettime(reorderMethods);
    },
    //  打开弹窗
    onReOrder() {
      this.fadeVisible = true;
      let powers = 0,
        addLang,
        addPower = 0,
        oldPowers = this.mult(this.power.computing_power, this.power.num);
      powers =
        this.reorderMethods == 90
          ? this.mult(this.renewalInfo_90.computing_power, this.power.num)
          : this.mult(this.renewalInfo_180.computing_power, this.power.num);
      if (Number(powers) >= Number(oldPowers)) {
        addPower = this.mult(powers - oldPowers);
        addLang = '增加';
      } else {
        addPower = this.mult(oldPowers - powers);
        addLang = '减少';
      }
      this.reorderDatas = `续单后，您的合约包锁定到期日为${this.time}
        (延长${this.reorderMethods}天)到手算力为${powers}"T("
        ${addLang}${addPower}T)，即时生效。
        确定要续单吗？`;
    },
    //  确认转期、续期
    confirmReOrder() {
      reOrder({
        order_id: Base64.decode(this.$route.query.orderId),
        regular_date_num: this.reorderMethods,
      })
        .then(resp => {
          this.$message.info('操作成功！！！');
          // console.log(resp);
          //  操作成功，隐藏交易框
          this.fadeVisible = false;
          //提交成功之后，返回到上个页面
          this.$router.go(-1);
        })
        .catch(() => {
          //  操作失败，隐藏交易框
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
    div .ant-btn {
      background-color: #ffab32;
      border-radius: 2px;
      color: #ffffff;
      width: 20%;
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