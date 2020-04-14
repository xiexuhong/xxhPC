<template>
    <div id="recharge">
        <header>
            <a-breadcrumb separator=">">
            <a-breadcrumb-item href=""><router-link to="/asset/assetoverview">资产总览</router-link></a-breadcrumb-item>
            <a-breadcrumb-item>充值</a-breadcrumb-item>
            </a-breadcrumb>
        </header>
        <template>
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
                            <a-menu-item :key="index" v-for="(item,index) in list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
                        </a-menu>
                        <a-button style="margin-left: 8px" >{{coin==''?defaultcurrency:coin}}<a-icon type="down" /> </a-button>
                        </a-dropdown>
                    </a-form-model-item>
                    <a-form-model-item label="充值金额">
                        <a-input v-model="form.amount" placeholder="请输入一个整数" />
                    </a-form-model-item>
                    <a-form-model-item label="付款人姓名">
                        <a-input v-model="form.name" placeholder="请输入付款人姓名" />
                    </a-form-model-item>
                    <a-form-model-item label="支付方式">                            
                        <a-button><router-link to="/asset/publictransfer">对公转账</router-link></a-button>
                    </a-form-model-item>
                    <a-form-model-item>
                        <a-button type="primary">
                            立即充值
                        </a-button>
                    </a-form-model-item>
                </template>
                <template v-else>
                    <a-form-model-item label="选择币种">
                        <a-button style="margin-left: 8px"> USDT(OMNI) </a-button>
                    </a-form-model-item>
                    <a-form-model-item label="充币地址">
                        <a-input v-model="form.coinaddress" readOnly placeholder="hifhsfosfsifsoiso" />
                    </a-form-model-item>
                    <a-form-model-item>
                        <a-button>
                            查看账单
                        </a-button>
                    </a-form-model-item>
                </template>
            </a-form-model>
        </template>
    </div>
</template>
<script>
import { setup } from '@/locales';
import {mapState} from 'vuex'
export default {
    data() {
        return {
            form: {
                coin:'',
                amount: '',
                name: '',
            },
            coin:"",
            rechargestyle: 'general',
        };
    },
    computed: 
        mapState({
            list(e){
                return e.asset.currencylist;
            },
            defaultcurrency(e){
                return e.asset.defaultcurrency;
            },
         }),
    methods: {
        handleButtonClick(e) {
            console.log('click left button', e);
        },        
        checkcurrency(index) {
            console.log('click left button',index);
            this.coin = this.list[index];
            // this.defaultcurrency = '';
        }, 
    },
};
</script>

<style scoped lang="scss">
    #recharge{
        padding:10px;        
        max-width: 360px;
        header{
            margin: 10px 0;
        }
    }
</style>