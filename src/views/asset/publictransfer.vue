<template>
    <div id="publictransfer">
      <header>
        <a-breadcrumb separator="">
        <a-breadcrumb-item href=""><router-link to="/asset/assetoverview" class="fontcolor">资产总览</router-link></a-breadcrumb-item>
        <a-breadcrumb-separator style="color:#ffab32">></a-breadcrumb-separator>
        <a-breadcrumb-item>充值</a-breadcrumb-item>
      </a-breadcrumb>  
      </header>
      <div v-if="!isSuccess">
        
        <section>
          <a-list class="transferorder" :dataSource="data">
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <a class="paste" slot="actions" data-clipboard-action="copy" :data-clipboard-text="item.content">复制地址</a>
              <p>{{ item.title }}</p>
              <p>{{ item.content }}</p>
            </a-list-item>
          </a-list>
          <div class = "fontcolor">请按提示信息向商家付款</div>
          <a-list :dataSource="tip">
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <p>{{ item }}</p>
            </a-list-item>
          </a-list>
        </section>
        <footer>
          <a-button type="primary" @click="confirmTransfer()">
            我已确认付款
          </a-button>
          <span class="ant-form-text">温馨提示：如有任何疑问请联系在线客服（请在工作日9：00~21：00之间完成充值）</span>
        </footer>
        <template>
          <div class="cover" v-if="isConfirmTransfer">   
            <a-result
              class="result"
              status="warning"
              title="確認提醒"
              subTitle="如您在未支付的情况下点击“确认已转账”，有可能导致您的帐户被冻结"
            >
              <template v-slot:extra>         
                <a-button key="buy" @click="cancelConfirmTransfer()">取消</a-button>
                <a-button type="primary" key="console" @click="okConfirmTransfer()">确认已转账</a-button>
              </template>
            </a-result>
          </div>  
        </template>
      </div>
      <div v-else>
            <a-result
              class="result"
              status="success"
              title="操作成功"
              subTitle="平臺確認到賬後，您購買的貨幣將支付到商戶帳戶並自動完成充值"
            >
              <template v-slot:extra> 
                <a-list class="transferorder" :dataSource="order">
                  <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
                    <p>{{ item.title }}</p>
                    <p>{{ item.content }}</p>
                  </a-list-item>
                </a-list>
                <a-button type="primary" key="console"><router-link to="/asset/recharge">返回充值首页</router-link></a-button>
              </template>
            </a-result>
      </div>
    </div>
</template>
<<script>
import Clipboard from 'clipboard'
const data = [
  {title:'收款方户名',content:'Racing car sprays burning fuel into crowd.'},
  {title:'收款方卡号',content:'Japanese princess to wed commoner.'},
  {title:'收款人地址',content:'Australian walks 100km after outback crash.'},
  {title:'收款方开户行',content:'Man charged over missing wedding girl.'},
  {title:'银行地址',content:'Los Angeles battles huge wildfires.'},
  {title:'WIFT号',content:'Los Angeles battles huge wildfires.'},
  {title:'转账金额',content:'Los Angeles battles huge wildfires.'},
];
const order = [
  {title:'订单号',content:'Racing car sprays burning fuel into crowd.'},
  {title:'充值方式',content:'Japanese princess to wed commoner.'},
  {title:'充值金额',content:'Australian walks 100km after outback crash.'},
  {title:'充值账户',content:'Man charged over missing wedding girl.'}
];
const tip = [
  '1、请向指定银行账户汇款','2、请用第三方网银或者银行柜台转款','3、超过10分钟未确认，请联系客服核查','4、周末充值到账速度较慢，顺延至工作日处理'
]
export default {
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      isConfirmTransfer: false,
      isSuccess:false,
      data,
      order,
      tip
    };
  },
  mounted() {
      var clipboard = new Clipboard('.paste');
      clipboard.on('success', function(e) {
          console.log('复制成功')
      });
      clipboard.on('error', function(e) {
          console.log('复制失败')
      });
  },
  methods: {
    confirmTransfer(){
      this.isConfirmTransfer = true;
    },
    cancelConfirmTransfer(){
      this.isConfirmTransfer = false;
    },
    okConfirmTransfer(){
      this.isConfirmTransfer = false;
      this.isSuccess = true;
    }
  },
};
</script>
<style scoped lang="scss">
    #publictransfer{
      section{  
        padding: 3vw;
        .transferorder{
          background-color: #f8f8f8;
          padding: 2vw;
          margin-bottom: 2vw;
        }
        p{
          margin: 0;
        }
      }
      .ant-list-split .ant-list-item {
        border:none;
      }
      .ant-list-split .ant-list-header {
        border:none;
      }
      footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2vw 0;
        .ant-form-text{
          margin: 2vw 0;
        }
      }
      .cover{
        position: fixed;
        background-color: rgba(0,0,0,0.5);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .result{
          width: 320px;
          height: 270px;
          padding: 10px;
          background-color: #fff;
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          margin: auto;
          border-radius: 4px;
        }
      }
      .result{
        .transferorder{
          width: 500px;
          margin: 0 auto;
          background-color: #f8f8f8;
          padding: 2vw;
          margin-bottom: 2vw;
        }
      }
    }
</style>