<template>
    <div id="extractcoin">
        <header>
            <a-breadcrumb separator=">">
            <a-breadcrumb-item href=""><router-link to="/asset/assetoverview">资产总览</router-link></a-breadcrumb-item>
            <a-breadcrumb-item>提币</a-breadcrumb-item>
            </a-breadcrumb>
        </header>
        <template>
        <a-form
            id="components-form-demo-validate-other"
            :form="form"
            @submit="handleSubmit"
        >
            <a-form-item label="选择提币类型">
                <a-radio-group v-decorator="['radio-button']">
                    <a-radio-button value="a">
                    BTC
                    </a-radio-button>
                    <a-radio-button value="b">
                    BHP
                    </a-radio-button>
                    <a-radio-button value="c">
                    USDT
                    </a-radio-button>
                </a-radio-group>
            </a-form-item>

            <a-form-item label="提币数量">
                <a-input-number v-decorator="['input-number', { initialValue: '' }]" :min="1" :max="10" />
                <span class="ant-form-text">
                    可用余额
                </span>
                <a-radio-button value="c">
                    全部
                </a-radio-button>
            </a-form-item>
            <a-form-item label="提币地址">
                <a-select
                    v-decorator="[
                    'select-multiple',
                    {
                        rules: [
                        { required: true, message: 'Please select your favourite colors!', type: 'array' },
                        ],
                    },
                    ]"
                    mode="multiple"
                    placeholder="Please select favourite colors"
                >
                    <a-select-option value="red">
                    Red
                    </a-select-option>
                    <a-select-option value="green">
                    Green
                    </a-select-option>
                    <a-select-option value="blue">
                    Blue
                    </a-select-option>
                </a-select>
                 <a-radio-button value="c">
                   <router-link to="/asset/extractcoin/extractcoinaddress">提币地址管理</router-link>
                </a-radio-button>
            </a-form-item>

            <a-form-item label="手续费">
                <a-input-number readOnly v-model="fee"/>
            </a-form-item>

            <a-form-item label="选择提币方式">
                <a-radio-group v-decorator="['radio-group']">
                    <a-radio value="a">
                    我的BHPay钱包（无需手续费）
                    </a-radio>
                    <a-radio value="b">
                    其他数字钱包
                    </a-radio>
                </a-radio-group>
            </a-form-item>

            
            <a-form-item label="提示">
                <p>信息1</p>
                <p>信息2</p>
                <p>信息3</p>
                <p>信息4</p>
            </a-form-item>

            <a-form-item label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
                <a-upload
                    v-decorator="[
                    'upload',
                    {
                        valuePropName: 'fileList',
                        getValueFromEvent: normFile,
                    },
                    ]"
                    name="logo"
                    action="/upload.do"
                    list-type="picture"
                >
                    <a-button> <a-icon type="upload" /> Click to upload </a-button>
                </a-upload>
            </a-form-item>

            <a-form-item label="Dragger">
                <div class="dropbox">
                    <a-upload-dragger
                    v-decorator="[
                        'dragger',
                        {
                        valuePropName: 'fileList',
                        getValueFromEvent: normFile,
                        },
                    ]"
                    name="files"
                    action="/upload.do"
                    >
                    <p class="ant-upload-drag-icon">
                        <a-icon type="inbox" />
                    </p>
                    <p class="ant-upload-text">
                        Click or drag file to this area to upload
                    </p>
                    <p class="ant-upload-hint">
                        Support for a single or bulk upload.
                    </p>
                    </a-upload-dragger>
                </div>
            </a-form-item>

            <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
            <a-button type="primary" html-type="submit">
                Submit
            </a-button>
            </a-form-item>
        </a-form>
        </template>
        
    </div>
</template>

<script>
import { setup } from '@/locales';
export default {
    data(){
        return  {
            fee:'0.0008BTC'
        }
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'validate_other' });
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                }
            });
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
        max-width: 360px;
        header{
            margin: 10px 0;
        }
    }
</style>
