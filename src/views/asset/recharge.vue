<template>
    <div id="recharge">
        <header>
            <a-breadcrumb separator="">
            <a-breadcrumb-item href=""><router-link to="/asset/assetoverview" class="fontcolor">资产总览</router-link></a-breadcrumb-item>
            <a-breadcrumb-separator style="color:#ffab32">></a-breadcrumb-separator>
            <a-breadcrumb-item>充值</a-breadcrumb-item>
            </a-breadcrumb>  
        </header>
        <template v-if="!result">
            <a-form-model :model="form">
                <a-form-model-item>
                <a-radio-group v-model="rechargestyle">
                    <a-radio-button value="general">
                    余额充值
                    </a-radio-button>
                    <a-radio-button value="USDTCharge">
                    USDT充值
                    </a-radio-button>
                </a-radio-group>
                </a-form-model-item>
                <template v-if="rechargestyle == 'general'">
                    <a-form-model-item label="选择币种">
                        <a-dropdown>
                            <a-menu slot="overlay">
                                <a-menu-item :key="index" v-for="(item,index) in currency_list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
                            </a-menu>
                            <a-button style="margin-left: 8px" >{{defaultcurrency}}<a-icon type="down" /></a-button>
                        </a-dropdown>
                        <span class="ant-form-text"> 可用余额：{{available}}{{defaultcurrency}}</span>
                    </a-form-model-item>
                    <a-form-model-item label="充值金额">
                        <a-input v-model="form.amount" placeholder="请输入一个整数" />
                        <span class="ant-form-text">金额范围：{{amountrange}}{{defaultcurrency}}</span>
                    </a-form-model-item>
                    <a-form-model-item label="付款人姓名">
                        <a-input v-model="form.name" placeholder="请输入付款人姓名" />
                    </a-form-model-item>
                    <a-form-model-item label="支付方式">                            
                        <a-button><router-link to="/asset/publictransfer">对公转账</router-link></a-button>
                    </a-form-model-item>
                    <a-form-model-item>
                        <a-button type="primary" @click="goRecharge()">
                            立即充值
                        </a-button>
                    </a-form-model-item>
                </template>
                <template v-else>
                    <a-form-model-item label="选择币种">
                        <a-button> USDT(OMNI) </a-button>
                    </a-form-model-item>
                    <a-form-model-item label="充币地址">
                        <span id="foo">{{form.coinaddress}}</span> 
                        <a-button class="btn paste" data-clipboard-target="#foo" data-clipboard-action="copy">
                            复制地址                                           
                        </a-button>
                        <a-button class="btn">
                            二维码
                        </a-button>
                    </a-form-model-item>
                    <a-form-model-item>
                        <a-button class="btn">
                            查看账单
                        </a-button>
                    </a-form-model-item>
                </template>
            </a-form-model>
        </template>
        <template v-else>
            <a-result
                status="success"
                title="Successfully Purchased Cloud Server ECS!"
                subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            >
                <template v-slot:extra>
                    <a-button type="primary" key="console" @click="goReturn()">返回充值首页</a-button>
                </template>
            </a-result>
        </template>
    </div>
</template>
<script>
import { setup } from '@/locales'
import {mapGetters} from 'vuex'
import { changeCurrency } from '@/script/api';
import Clipboard from 'clipboard'
export default {
    data() {
        return {
            form: {
                coin:'',
                amount: '',
                name: '',
                coinaddress:'egegeefgege'
            },
            rechargestyle: 'general',
            available:'',
            amountrange:'400~1000000',
            result:false
        };
    },
    created(){
        for(let item of this.balance_list){
            if(item.coin == this.defaultcurrency){
                this.available = item.available;
                return
            }
        }
    },
    mounted() {
        var clipboard = new Clipboard('.paste');
        var _this = this;
        clipboard.on('success', function(e) {
            _this.success();
        });
        clipboard.on('error', function(e) {
            _this.error();
        });
    },
    computed:{
    ...mapGetters(['currency_list','defaultcurrency','lang','total','balance_list']),
  },
    methods: {
        checkcurrency(index) {
            this.$store.state.asset.defaultcurrency = this.currency_list[index];
            for(let item of this.balance_list){
                if(item.coin == this.defaultcurrency){
                    this.available = item.available;
                    return
                }
            } 
            changeCurrency({currency:this.defaultcurrency}).then((res) => {
                console.log(res);
            })
        }, 
        success() {
            this.$message.success('复制成功');
        },
        error() {
            this.$message.error('复制失败');
        },
        goRecharge(){
            this.result = true;
        },
        goReturn(){
            this.result = false;
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
            margin-right: 15px;
            color: #ffab32;
            background-color: #fff;
            border-color: #ffab32;
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
        #foo{
           font-size: 16px;
           ::selection {
                color: #fff;
                background: #ffab32;
                border-radius: 2px;
            }
        }
        .btn{
            border: none;
        }
    }
</style>