<template>
    <div id="publictransfer">
        <template>
            <header>
              <a-breadcrumb separator="">
                <a-breadcrumb-item href=""><router-link to="/asset/assetoverview" class="fontcolor">资产总览</router-link></a-breadcrumb-item>
                <a-breadcrumb-separator style="color:#ffab32">></a-breadcrumb-separator>
                <a-breadcrumb-item>提现</a-breadcrumb-item>
              </a-breadcrumb>  
            </header>
        </template>
         <template>
            <div>
                <template>
                    <a-form :form="form">
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
                       <a-form-model-item label="提现金额">
                            <a-input v-model="form.fieldA" placeholder="请输入一个整数" />
                        </a-form-model-item>
                        <a-form-item label="提现方式">
                        <a-select
                            v-decorator="[
                            'gender',
                            { rules: [{ required: true, message: 'Please select your gender!' }] },
                            ]"
                            placeholder="Select a option and change input text above"
                            @change="handleSelectChange"
                        >
                            <a-select-option value="male">
                            male
                            </a-select-option>
                            <a-select-option value="female">
                            female
                            </a-select-option>
                        </a-select>
                        </a-form-item>
                        <a-form-item>
                        <a-button type="primary" html-type="submit">
                            申请提现
                        </a-button>
                        </a-form-item>
                    </a-form>
                    </template>
            </div>
        </template>
    </div>
</template>
  
<script>
import { setup } from '@/locales';
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
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
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
    handleMenuClick(e) {
      console.log('click', e);
    },
  },
};
</script>
<style scoped lang="scss">
  #publictransfer{  
        padding:10px;        
        max-width: 400px;
        font-size: 14px;
        header{
            margin: 0 0 10px;
            font-size: 16px;
        }
    }
  #components-table-demo-size h4 {
    margin-bottom: 16px;
  }
</style>