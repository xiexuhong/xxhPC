<template>
    <div id="recharge">
        <header>
            <a-breadcrumb separator="">
            <a-breadcrumb-item href=""><router-link to="/asset/assetoverview" class="fontcolor">{{$t('asset.asset01')}}</router-link></a-breadcrumb-item>
            <a-breadcrumb-separator style="color:#ffab32">></a-breadcrumb-separator>
            <a-breadcrumb-item>{{$t('recharge.recharge01')}}</a-breadcrumb-item>
            </a-breadcrumb>  
        </header>
        <template>
            <a-form-model :model="form">
                <a-form-model-item>
                <a-radio-group v-model="rechargestyle">
                    <a-radio-button value="general">
                    {{$t('recharge.recharge02')}}
                    </a-radio-button>
                    <a-radio-button value="USDTCharge">
                    {{$t('recharge.recharge03')}}
                    </a-radio-button>
                </a-radio-group>
                </a-form-model-item>
                <template v-if="rechargestyle == 'general'">
                    <a-form-model-item :label="$t('recharge.recharge04')">
                        <a-dropdown>
                            <a-menu slot="overlay">
                                <a-menu-item :key="index" v-for="(item,index) in currency_list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
                            </a-menu>
                            <a-button >{{form.currency}}<a-icon type="down" /></a-button>
                        </a-dropdown>
                        <span class="ant-form-text">{{$t('recharge.recharge05')}}{{available}}{{form.currency}}</span>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('recharge.recharge06')">
                        <a-input v-model="form.amount" :placeholder="$t('recharge.recharge07')" />
                        <span class="ant-form-text">{{$t('recharge.recharge08')}}{{amountrange}}{{form.currency}}</span>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('recharge.recharge09')">
                        <a-input v-model="form.name" :placeholder="$t('recharge.recharge10')" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('recharge.recharge11')">                            
                        <a-button>{{$t('recharge.recharge12')}}</a-button>
                    </a-form-model-item>
                    <a-form-model-item>
                        <a-button type="primary" @click="goPublic()">
                            {{$t('recharge.recharge13')}}
                        </a-button>
                    </a-form-model-item>
                </template>
                <template v-else>
                    <a-form-model-item :label="$t('recharge.recharge04')">
                        <a-button> USDT(OMNI) </a-button>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('recharge.recharge14')">
                        <span class="address">{{form.coinaddress}}</span>
                        <a-button class="btn paste" data-clipboard-action="copy" :data-clipboard-text="form.coinaddress">{{$t('recharge.recharge15')}} </a-button>
                        <a-button class="btn">
                            {{$t('recharge.recharge16')}}
                        </a-button>
                    </a-form-model-item>
                    <a-form-model-item>
                        <a-button class="btn">
                            <router-link to="/asset/assetbills">{{$t('assetoption.assetoption04')}}</router-link>
                        </a-button>
                    </a-form-model-item>
                    <div>{{$t('recharge.recharge17')}}</div>
                    <a-list :dataSource="$t('recharge.recharge18')">
                        <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
                        <p>{{ item }}</p>
                        </a-list-item>
                    </a-list>
                </template>
            </a-form-model>
        </template>
    </div>
</template>
<script>
import { setup } from '@/locales'
import {mapGetters} from 'vuex'
import { changeCurrency,getCoinAddress,recharge,payment } from '@/script/api';
import Clipboard from 'clipboard'
export default {
    data() {
        return {
            form: {
                currency:'',
                amount: '',
                name: '',
                coinaddress:''
            },
            rechargeCoin:'',
            rechargestyle: 'general',            
            amountrange:'400~1000000',
            is_support:''
        };
    },
    created(){
        this.form.currency = this.currency;
        getCoinAddress({coin:'USDT_OMNI'}).then((res)=>{
            const {datas} = res;
            if(datas.hasOwnProperty('error')){
                this.form.coinaddress = '48845sfre7ef4ef4efs';
            }
            else{                
                this.form.coinaddress = datas;
            }
        }).catch((err)=>{
            console.log(err);
        });
    },
    mounted() {
        var clipboard = new Clipboard('.paste');
        var _this = this;
        var timeout = null;    
        clipboard.on('success', function(e) {
            console.log(_this.$message);
           if(timeout !== null){
                clearTimeout(timeout);   
           }       
            timeout = setTimeout(()=>{
               _this.$message.success('copy success', 1.5)
            },500);  
        });
        clipboard.on('error', function(e) {
            if(timeout !== null){
                clearTimeout(timeout);   
           }       
            timeout = setTimeout(()=>{
                _this.$message.success('copy failed', [1]);
                _this.message.destroy();
            },1000);  
        });
    },
    computed:{
    ...mapGetters(['currency_list','currency','lang','total','balance_list','available']),
  },
    methods: {
        checkcurrency(index) {
            this.form.currency = this.currency_list[index];
            this.$store.state.asset.currency = this.form.currency;
        }, 
        testNum() {
            var reg = /^\d$/;
            var input = $("input[type='number']").val();
            if (reg.test(input)) {
              this.value = input;
            }
        },
        // goRecharge(){
        //     if (this.is_support == true) {
        //         var thiz = this;
        //         var amount = this.form.amount;
        //         var reg = /^\d$/;
        //         if (reg.test(amount)) {
        //             this.value = input;
        //         }
        //         var min, max, no_fee
        //         if (this.isLimitShow) {
        //             min = Number(this.limitData[this.selected]['min_amount'])
        //             max = Number(this.limitData[this.selected]['max_amount'])
        //             if (amount < min || amount > max) {
        //                 app.toast(thiz.langArr.recharge21);
        //                 return false
        //             }
        //             no_fee = this.limitData[this.selected]['no_fee_amount']
        //         }
        //         $radio = $('input[type="radio"]:checked');
        //         var thiz = this;
        //         if (amount !== '') {
        //             if ($radio.attr("id") == "pertopub") {
        //             app.goWin("transferOrder", {
        //                 animation: {
        //                 type: "push",
        //                 subType: "from_right"
        //                 },
        //                 pageParam: {
        //                 coin: this.selected,
        //                 amount: amount,
        //                 no_fee: no_fee
        //                 }
        //             });
        //             return false;
        //             }
        //             var data = {
        //                 currency: thiz.defaultcurrency,
        //                 amount: amount,
        //                 payment_code: $radio.attr("id")
        //             };
        //             recharge(data).then((res)=>{
        //                 if (data.datas.create_order) {
        //                     this.$router.push('/asset/publictransfer');
        //                 }else {
        //                 // console.log("未生成订单");
        //                 }
        //             })
        //         }
        //     }
        // },
        goPublic(){
            this.$router.push({name:'Publictransfer',params:{amount:this.form.amount}});     
        }
    },
};
</script>

<style scoped lang="scss">
    #recharge{
        padding:10px;       
        font-size: 14px;
        header{
            margin: 0 0 10px;
            font-size: 16px;
        }
        .ant-btn{
            color: #ffab32;
            background-color: #fff;
            border-color: #ffab32;
            margin-right: 15px;
        }
        .ant-btn-primary {
            color: #fff;
        }
        .ant-radio-button-wrapper {
            background-color: #fff;
            margin-right: 10px;
            border-radius: 5px;
            color: #262626;
        }
        .address{
           font-size: 20px;
           color: #262626;
        }
        .btn{
            border: none;
        }
    }
</style>