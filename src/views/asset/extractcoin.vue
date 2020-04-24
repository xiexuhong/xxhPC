<template>
    <div id="extractcoin">
        <header>
            <a-breadcrumb separator="">
            <a-breadcrumb-item href=""><router-link to="/asset/assetoverview" class="fontcolor">{{$t('asset.asset03')}}</router-link></a-breadcrumb-item>
            <a-breadcrumb-separator style="color:#ffab32">></a-breadcrumb-separator>
            <a-breadcrumb-item>{{$t('extractcoin.extractcoin01')}}</a-breadcrumb-item>
            </a-breadcrumb>  
        </header>
        <template>
        <a-form-model  :form="form">
            <a-form-model-item :label="$t('extractcoin.extractcoin02')">
                <a-radio-group buttonStyle="solid" :defaultValue="coin_list[0].coin">
                    <a-radio-button v-for="item of coin_list" :key="item.id" @click="checkcoin(item.id)" :value="item.coin">{{item.coin}}</a-radio-button>
                </a-radio-group>
            </a-form-model-item>

            <a-form-model-item :label="$t('extractcoin.extractcoin03')">
                <a-input-number v-model="form.amount" :min='0' :max='10000' />
                <span class="ant-form-text">
                    {{$t('extractcoin.extractcoin04')}}
                </span>
                <span class="ant-form-text">
                   {{available}}
                </span>
                <span class="ant-form-text">
                   {{form.coin}}
                </span>
                <span class="ant-form-text fontcolor">
                    {{$t('extractcoin.extractcoin05')}}
                </span>
            </a-form-model-item>
            <a-form-model-item :label="$t('extractcoin.extractcoin06')">
                <a-select
                    v-model="form.address"
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
                   <router-link to="/asset/extractcoin/extractcoinaddress" class="fontcolor">{{$t('extractcoin.extractcoin07')}}</router-link>
                </span>
            </a-form-model-item>

            <a-form-model-item :label="$t('extractcoin.extractcoin08')">
                <div class="components-input-demo-presuffix">
                    <a-input readOnly :value="form.fee" :suffix="form.coin" />
                </div>
            </a-form-model-item>

            <a-form-model-item :label="$t('extractcoin.extractcoin09')">
                <a-radio-group v-model="form.type">
                    <a-radio value="BHPay">
                    {{$t('extractcoin.extractcoin10')}}<span class="fontcolor">{{$t('extractcoin.extractcoin11')}}</span>
                    </a-radio>
                    <a-radio value="other">
                    {{$t('extractcoin.extractcoin12')}}
                    </a-radio>
                </a-radio-group>
            </a-form-model-item>            
            <a-form-model-item :label="$t('extractcoin.extractcoin13')">
                <p class="text" v-for="(item,index) of $t('extractcoin.extractcoin14')" :key="index">{{item}}</p>
            </a-form-model-item>
            <a-form-model-item>
                <a-button type="primary">
                    {{$t('extractcoin.extractcoin15')}}
                </a-button>
            </a-form-model-item>
        </a-form-model>
        </template>
        
    </div>
</template>

<script>
import { setup } from '@/locales';
import { mapGetters } from 'vuex';
export default {
    data(){
        return  {
            form: {
                coin:'',
                amount: '1',
                address:'red',
                fee:'0.0008',
                type: 'BHPay',
            },
            available:""
        }
    },
    created(){
        this.form.coin = this.coin_list[0].coin;
        this.available= this.coin_list[0].available;
    },
    computed:{
        ...mapGetters(['coin_list']),
    },
    methods: {
        checkcoin(index) {
            this.form.coin = this.coin_list[index].coin;
            this.available = this.coin_list[index].available;
            console.log(this.available)
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
        max-width: 400px;
        padding: 10px;
        font-size: 14px;
        header{
            margin: 0 0 10px;
            font-size: 16px;
        }
        .ant-select{
            width: 50%;
            margin-right: 8px;
        }
        
        .text{
            margin: 0;
            line-height: 2;
            color:#999999
        }
    
        .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
            color: #ffab32;
        }
    }
</style>
