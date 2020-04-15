<template>
    <div id="extractcoin">
        <header>
            <a-breadcrumb separator=">">
            <a-breadcrumb-item href=""><router-link to="/asset/assetoverview">资产总览</router-link></a-breadcrumb-item>
            <a-breadcrumb-item>提币</a-breadcrumb-item>
            </a-breadcrumb>
        </header>
        <template>
        <a-form-model  :form="form">
            <a-form-model-item label="选择提币类型">
                <a-radio-group v-model="form.coin" buttonStyle="solid">
                    <a-radio-button value="BTC">BTC</a-radio-button>
                    <a-radio-button value="BHP">BHP</a-radio-button>
                    <a-radio-button value="USDT">USDT</a-radio-button>
                </a-radio-group>
            </a-form-model-item>

            <a-form-model-item label="提币数量">
                <a-input-number v-model="form.amount" :min='0' :max='10000' />
                <span class="ant-form-text">
                    可用余额:
                </span>
                <span class="ant-form-text">
                   {{form.coin}}
                </span>
                <span class="ant-form-text fontcolor">
                    全部
                </span>
            </a-form-model-item>
            <a-form-model-item label="提币地址">
                <a-select
                    v-model="form.address"
                    placeholder="Please select favourite colors"
                >
                    <a-select-option value="red" >
                    Red
                    </a-select-option>
                    <a-select-option value="green">
                    Green
                    </a-select-option>
                    <a-select-option value="blue">
                    Blue
                    </a-select-option>
                </a-select>
                <span class="ant-form-text">
                   <router-link to="/asset/extractcoin/extractcoinaddress" class="fontcolor">提币地址管理</router-link>
                </span>
            </a-form-model-item>

            <a-form-model-item label="手续费">
                <a-input readOnly :value="form.fee"/>
                <span class="ant-form-text">
                   {{form.coin}}
                </span>
            </a-form-model-item>

            <a-form-model-item label="选择提币方式">
                <a-radio-group v-model="form.type">
                    <a-radio value="BHPay">
                    我的BHPay钱包（无需手续费）
                    </a-radio>
                    <a-radio value="other">
                    其他数字钱包
                    </a-radio>
                </a-radio-group>
            </a-form-model-item>

            
            <a-form-model-item label="提示">
                <p>信息1</p>
                <p>信息2</p>
                <p>信息3</p>
                <p>信息4</p>
            </a-form-model-item>

            
             <a-form-model-item>
                <a-button type="primary">
                    申请提币
                </a-button>
            </a-form-model-item>
        </a-form-model>
        </template>
        
    </div>
</template>

<script>
import { setup } from '@/locales';
export default {
    data(){
        return  {
            form: {
                coin:'BTC',
                amount: '1',
                address:'red',
                fee:'0.0008',
                type: 'BHPay',
            },
        }
    },
    methods: {
        changeCoin(coin){
            this.form.coin = coin;
        },
        normFile(e) {
            console.log('Upload event:', e);
            if (Array.isArray(e)) {
                return e;
            }
            return e && e.fileList;
        },
    }
};
</script>
<style lang="scss" scoped>
    #extractcoin{
        padding: 10px;
        header{
            margin: 10px 0;
        }
        form{
            .ant-select{
                width: 50%;
                margin-right: 8px;
            }
            .ant-input{
                width: 120px;
                margin-right: 8px;
            }
            .ant-radio-button-wrapper{
                background-color:#F8F8F8;
                margin-right: 10px;
                border-radius: 5px;
            }
            .ant-radio-button-wrapper:hover{
                color: #000
            }
            .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {                
                border-color: #FFAB32;
                color: #FFAB32;
                box-shadow: -1px 0 0 0 #FFAB32;
            }
            .ant-input-number:hover {
                border-color: #ffab32;
            }
            .ant-select-selection:hover {
                border-color: #ffab32;
                border-right-width: 1px !important;
            }
        }
    }
</style>
