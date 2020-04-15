<template>
    <div id="extractcoinaddress">
        <header>
            <a-breadcrumb separator=">">
            <a-breadcrumb-item href=""><router-link to="/asset/assetoverview">资产总览</router-link></a-breadcrumb-item>
            <a-breadcrumb-item><router-link to="/asset/extractcoin">提币</router-link></a-breadcrumb-item>
            <a-breadcrumb-item>提币地址管理</a-breadcrumb-item>
            </a-breadcrumb>
        </header>
        <template>
            <a-form-model :model="form">
                <section>
                    <a-form-model-item label="币种">
                        <a-dropdown>
                        <a-menu slot="overlay">
                            <a-menu-item :key="index" v-for="(item,index) in list" @click="checkcurrency(index)"><a-icon type="user" />{{item}}</a-menu-item>
                        </a-menu>
                        <a-button>{{coin==''?defaultcurrency:coin}}<a-icon type="down" /> </a-button>
                        </a-dropdown>
                    </a-form-model-item>
                    <a-form-model-item label="提币地址">
                        <a-input v-model="form.address" placeholder="请输入一个整数" />
                    </a-form-model-item>
                    <a-form-model-item label="备注">
                        <a-input v-model="form.note" placeholder="请输入付款人姓名" />
                    </a-form-model-item>
                </section>
                <a-form-model-item>
                    <a-button type="primary">
                        添加
                    </a-button>
                </a-form-model-item>
            </a-form-model>
        </template>
        <a-table :columns="columns" :dataSource="data">
          <!-- <a slot="name" slot-scope="text">{{ text }}</a> -->
          <!-- <span slot="customTitle"><a-icon type="smile-o" /> Name</span> -->
          <span slot="action">
            <a>Delete</a>
          </span>
        </a-table>
    </div>
</template>
<script>
import { setup } from '@/locales';
import {mapState} from 'vuex'
export default {
    data(){
        return {
            form: {
                coin:'',
                address:'',
                note: ''
            },
             data: [
                {
                key: '1',
                coin: 'John Brown',
                address: 32,
                note: 'New York No. 1 Lake Park',
                },
            ],
            coin:"",
            columns: [
        {
          title: '币种',
          dataIndex: 'coin',
          key: 'coin',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.coin
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          },
        },
        {
          title: '提币地址',
          dataIndex: 'address',
          key: 'address',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.address
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: '备注',
          dataIndex: 'note',
          key: 'note',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
            record.note
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
        }
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
}
</script>
<style lang="scss" scoped>
    #extractcoinaddress{
        .fontcolor{
            color: #FFAB32;
        }
        padding: 10px;
        header{
            margin: 10px 0;
        }
    }
    form{
        section{
            display: flex;
            .ant-form-item{
                margin-right: 15px;
                :last-of-type{
                    margin: 0;
                }
            }
        }
    }
</style>