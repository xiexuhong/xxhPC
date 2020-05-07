<template>
    <div id="publictransfer">
      <header>
        <a-breadcrumb separator="">
        <a-breadcrumb-item href=""><router-link to="/asset/assetoverview" class="fontcolor">{{$t('asset.asset01')}}</router-link></a-breadcrumb-item>
        <a-breadcrumb-separator style="color:#ffab32">></a-breadcrumb-separator>
        <a-breadcrumb-item>{{$t('publictransfer.publictransfer02')}}</a-breadcrumb-item>
      </a-breadcrumb>  
      </header>
      <div v-if="!isSuccess">
        
        <section>
          <a-list class="transferorder">
            <a-list-item v-for="(item,index) of publicdata.bank_info" :key="index">
              <a class="paste" slot="actions" data-clipboard-action="copy" :data-clipboard-text="item.value">{{$t('publictransfer.publictransfer10')}}</a>
              <p>{{item.name}}</p>
              <p>{{item.value}}</p>
            </a-list-item>
            
            <a-list-item>
              <a class="paste" slot="actions" data-clipboard-action="copy" :data-clipboard-text="rechargeAmount+currency">{{$t('publictransfer.publictransfer10')}}</a>
              <p>{{$t('publictransfer.publictransfer09')}}</p>
              <p>{{rechargeAmount}}{{currency}}</p>
            </a-list-item>
          </a-list>
          <div class = "fontcolor">{{$t('publictransfer.publictransfer11')}}</div>
          <a-list :dataSource="$t('publictransfer.publictransfer12')">
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <p>{{ item }}</p>
            </a-list-item>
          </a-list>
          <a-form-model-item :label="publicdata.message">
            <a-input v-model="message" />
          </a-form-model-item>
        </section>
        <footer>
          <a-button type="primary" @click="confirmTransfer()">
           {{$t('publictransfer.publictransfer13')}}
          </a-button>
          <span class="ant-form-text">{{$t('publictransfer.publictransfer14')}}</span>
        </footer>
        <template>
          <div class="cover" v-if="isConfirmTransfer">   
            <a-result
              class="result"
              status="warning"
              :title="$t('publictransfer.publictransfer15')"
              :subTitle="$t('publictransfer.publictransfer16')"
            >
              <template v-slot:extra>         
                <a-button key="buy" @click="cancelConfirmTransfer()">{{$t('publictransfer.publictransfer17')}}</a-button>
                <a-button type="primary" key="console" @click="okConfirmTransfer()">{{$t('publictransfer.publictransfer18')}}</a-button>
              </template>
            </a-result>
          </div>  
        </template>
      </div>
      <div v-else>
            <a-result
              class="result"
              status="success"
              :title="$t('publictransfer.publictransfer19')"
              :subTitle="$t('publictransfer.publictransfer20')"
            >
              <template v-slot:extra> 
                <a-list class="transferorder" :dataSource="order">
                  <a-list-item slot="renderItem" slot-scope="item,index" :key="index">
                    <p>{{item.title}}</p>
                    <p>{{item.content}}</p>
                  </a-list-item>
                </a-list>
                <a-button type="primary" key="console"><router-link to="/asset/recharge">{{$t('publictransfer.publictransfer21')}}</router-link></a-button>
              </template>
            </a-result>
      </div>
    </div>
</template>
<script>
import Clipboard from 'clipboard'
import { mapGetters } from "vuex";
import {getPublicMess,getPublicOrder} from '@/script/api';

export default {
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      isConfirmTransfer: false,
      isSuccess:false,
      publicdata:{},
      rechargeAmount:'',
      message:"",
      order:[]
    };
  },
  created(){
    //获取对公转账信息
    getPublicMess({currency:this.currency}).then((res)=>{
      const {datas} = res;
      this.publicdata = datas;
    });
    this.rechargeAmount = this.$route.params.amount;
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("rechargeAmount", JSON.stringify(this.rechargeAmount));
        this.rechargeAmount = "";
    })
    if (sessionStorage.getItem("rechargeAmount")&&!this.rechargeAmount) {
        this.rechargeAmount = JSON.parse(sessionStorage.getItem("rechargeAmount"));
    }
  },
  destroyed(){
    sessionStorage.removeItem("rechargeAmount");
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
  computed:{
    ...mapGetters(['currency'])
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
      var data = {
        amount:this.rechargeAmount,
        message:this.message,
        currency:this.currency,
        client:"PC"
      }
      getPublicOrder(data).then((res)=>{
        for(var item in res.datas){
            this.order.push({title:item,content:res.datas[item]});
        }
        this.isSuccess = true;
      })
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
      .ant-form-item {
          margin: 12px 0;
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
      
    }
</style>