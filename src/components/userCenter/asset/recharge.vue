<template>
    <div id="recharge">
        <template>
            <div>
                <a-breadcrumb separator=">">
                <a-breadcrumb-item href=""><router-link to="/asset/assetoverview">资产总览</router-link></a-breadcrumb-item>
                <a-breadcrumb-item>充值</a-breadcrumb-item>
                </a-breadcrumb>
            </div>
        </template>
        <template>
            <a-form-model :layout="form.layout" :model="form" v-bind="formItemLayout">
                <a-form-model-item label="Form Layout">
                <a-radio-group v-model="form.layout">
                    <a-radio-button value="horizontal">
                    余额充值
                    </a-radio-button>
                    <a-radio-button value="vertical">
                    USDT充值
                    </a-radio-button>
                </a-radio-group>
                </a-form-model-item>
                <a-form-model-item label="选择币种">
                    <a-dropdown>
                    <a-menu slot="overlay" @click="handleMenuClick">
                        <a-menu-item key="1"><a-icon type="user" />USD</a-menu-item>
                        <a-menu-item key="2"><a-icon type="user" />CNY</a-menu-item>
                        <a-menu-item key="3"><a-icon type="user" />other</a-menu-item>
                    </a-menu>
                    <a-button style="margin-left: 8px"> USD <a-icon type="down" /> </a-button>
                    </a-dropdown>
                </a-form-model-item>
                <a-form-model-item label="充值金额">
                    <a-input v-model="form.fieldA" placeholder="请输入一个整数" />
                </a-form-model-item>
                <a-form-model-item label="付款人姓名">
                    <a-input v-model="form.fieldB" placeholder="请输入付款人姓名" />
                </a-form-model-item>
                <a-form-model-item label="支付方式">                            
                    <a-button><router-link to="/asset/publictransfer">对公转账</router-link></a-button>
                </a-form-model-item>
                <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
                <a-button type="primary">
                    立即充值
                </a-button>
                </a-form-model-item>
            </a-form-model>
        </template>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                layout: 'horizontal',
                fieldA: '',
                fieldB: '',
            }
        };
    },
    computed: {
        formItemLayout() {
        const { layout } = this.form;
        return layout === 'horizontal'
            ? {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
            : {};
        },
        buttonItemLayout() {
        const { layout } = this.form;
        return layout === 'horizontal'
            ? {
                wrapperCol: { span: 14, offset: 4 },
            }
            : {};
        },
    },
    methods: {
        handleButtonClick(e) {
            console.log('click left button', e);
        },
        handleMenuClick(e) {
            console.log('click', e);
        },
    },
};
</script>

<style scoped>
    #recharge{
        padding:10px;
    }
</style>