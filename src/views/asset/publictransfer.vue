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
            <a-list-item>
              <a class="paste" slot="actions" data-clipboard-action="copy" :data-clipboard-text="publicdata.name">{{$t('publictransfer.publictransfer10')}}</a>
              <p>{{$t('publictransfer.publictransfer03')}}</p>
              <p>{{publicdata.name}}</p>
            </a-list-item>
            <a-list-item>
              <a class="paste" slot="actions" data-clipboard-action="copy" :data-clipboard-text="publicdata.card_num">{{$t('publictransfer.publictransfer10')}}</a>
              <p>{{$t('publictransfer.publictransfer04')}}</p>
              <p>{{publicdata.card_num}}</p>
            </a-list-item>
            <a-list-item>
              <a class="paste" slot="actions" data-clipboard-action="copy" :data-clipboard-text="publicdata.company_adress">{{$t('publictransfer.publictransfer10')}}</a>
              <p>{{$t('publictransfer.publictransfer05')}}</p>
              <p>{{publicdata.company_adress}}</p>
            </a-list-item>
            <a-list-item>
              <a class="paste" slot="actions" data-clipboard-action="copy" :data-clipboard-text="publicdata.bank_name">{{$t('publictransfer.publictransfer10')}}</a>
              <p>{{$t('publictransfer.publictransfer06')}}</p>
              <p>{{publicdata.bank_name}}</p>
            </a-list-item>
            <a-list-item>
              <a class="paste" slot="actions" data-clipboard-action="copy" :data-clipboard-text="publicdata.address">{{$t('publictransfer.publictransfer10')}}</a>
              <p>{{$t('publictransfer.publictransfer07')}}</p>
              <p>{{publicdata.address}}</p>
            </a-list-item>
            <a-list-item>
              <a class="paste" slot="actions" data-clipboard-action="copy" :data-clipboard-text="publicdata.code">{{$t('publictransfer.publictransfer10')}}</a>
              <p>{{$t('publictransfer.publictransfer08')}}</p>
              <p>{{publicdata.code}}</p>
            </a-list-item>
            <a-list-item>
              <a class="paste" slot="actions" data-clipboard-action="copy" :data-clipboard-text="amount">{{$t('publictransfer.publictransfer10')}}</a>
              <p>{{$t('publictransfer.publictransfer09')}}</p>
              <p>{{amount}}{{defaultcurrency}}</p>
            </a-list-item>
          </a-list>
          <div class = "fontcolor">{{$t('publictransfer.publictransfer11')}}</div>
          <a-list :dataSource="$t('publictransfer.publictransfer12')">
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
              <p>{{ item }}</p>
            </a-list-item>
          </a-list>
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
                  <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
                    <p>{{ item.title }}</p>
                    <p>{{ item.content }}</p>
                  </a-list-item>
                </a-list>
                <a-button type="primary" key="console"><router-link to="/asset/recharge">{{$t('publictransfer.publictransfer21')}}</router-link></a-button>
              </template>
            </a-result>
      </div>
    </div>
</template>
<<script>
import Clipboard from 'clipboard'
import {getPublicMess} from '@/script/api'
import { mapGetters } from "vuex";

const order = [
  {title:'订单号',content:'Racing car sprays burning fuel into crowd.'},
  {title:'充值方式',content:'Japanese princess to wed commoner.'},
  {title:'充值金额',content:'Australian walks 100km after outback crash.'},
  {title:'充值账户',content:'Man charged over missing wedding girl.'}
];
export default {
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      isConfirmTransfer: false,
      isSuccess:false,
      publicdata:{},
      amount:'',
      order
    };
  },
  created(){
    this.amount = this.$route.params.amount;
    getPublicMess({currency:this.defaultcurrency}).then((res)=>{
      const {datas} = res;
      this.publicdata=datas.bank_info;
    })
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
    ...mapGetters(['defaultcurrency'])
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