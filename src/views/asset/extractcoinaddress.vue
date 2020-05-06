<template>
    <div id="extractcoinaddress">
        <header>
            <a-breadcrumb separator="">
            <a-breadcrumb-item href=""><router-link to="/asset/assetoverview" class="fontcolor">{{$t('asset.asset03')}}</router-link></a-breadcrumb-item>
            <a-breadcrumb-separator style="color:#ffab32">></a-breadcrumb-separator>
            <a-breadcrumb-item><router-link to="/asset/extractcoin" class="fontcolor">{{$t('extractcoin.extractcoin01')}}</router-link></a-breadcrumb-item>
            <a-breadcrumb-separator style="color:#ffab32">></a-breadcrumb-separator>
            <a-breadcrumb-item>{{$t('extractcoin.extractcoin16')}}</a-breadcrumb-item>
            </a-breadcrumb>  
        </header>
        <template>
            <a-form-model :model="form">
                <section>
                    <a-form-model-item :label="$t('extractcoin.extractcoin17')">
                        <a-dropdown>
                        <a-menu slot="overlay">
                            <a-menu-item :key="index" v-for="(item,index) in coin_list" @click="checkcurrency(index)"><a-icon type="user" />{{item.coin}}</a-menu-item>
                        </a-menu>
                        <a-button>{{form.coin}}<a-icon type="down" /> </a-button>
                        </a-dropdown>
                    </a-form-model-item>
                    <a-form-model-item :label="$t('extractcoin.extractcoin06')">
                        <a-input v-model="form.address" :placeholder="$t('extractcoin.extractcoin18')" />
                    </a-form-model-item>
                    <a-form-model-item :label="$t('extractcoin.extractcoin19')">
                        <a-input v-model="form.note" :placeholder="$t('extractcoin.extractcoin20')" />
                    </a-form-model-item>
                </section>
                <a-form-model-item>
                    <a-button type="primary" @click="showModal()">
                        {{$t('extractcoin.extractcoin21')}}
                    </a-button>
                    <a-modal
                        :title="$t('extractcoin.extractcoin22')"
                        style="top: 40%;"
                        :visible="visible"
                        @ok="handleOk"
                        @cancel="handleCancel"
                        >
                        <a-input v-model="tradersPassword" :placeholder="$t('extractcoin.extractcoin23')"/>
                        <a-button class="btn" @click="forgetPwd()">
                           {{$t('extractcoin.extractcoin24')}}
                        </a-button>
                    </a-modal>
                    <template>
                        <div class="cover" v-if="isDel">   
                            <a-result
                                class="result"
                                status="warning"
                                :title="$t('extractcoin.extractcoin25')"
                                :subTitle="$t('extractcoin.extractcoin26')"
                            >
                                <template v-slot:extra>
                                <a-button  key="cancel" @click="cancelConfirm('del')">{{$t('extractcoin.extractcoin27')}}</a-button>
                                <a-button type="primary" key="confirm" @click="okConfirm('del')">{{$t('extractcoin.extractcoin28')}}</a-button>
                                </template>
                            </a-result>
                        </div>
                    </template>
                    <template>
                        <div class="cover" v-if="isAdd">   
                            <a-result
                                class="result"
                                status="warning"
                                :title="$t('extractcoin.extractcoin29')"
                                :subTitle="$t('extractcoin.extractcoin30')"
                            >
                                <template v-slot:extra>
                                <a-button  key="cancel" @click="cancelConfirm('add')">{{$t('extractcoin.extractcoin27')}}</a-button>
                                <a-button type="primary" key="confirm" @click="okConfirm('add')">{{$t('extractcoin.extractcoin31')}}</a-button>
                                </template>
                            </a-result>
                        </div>
                    </template>
                </a-form-model-item>
            </a-form-model>
        </template>
        <a-table :columns="columns" :dataSource="data">
          <span slot="action">
           <a href = javascript:void(0) @click="goDel()" type="dashed">{{$t('extractcoin.extractcoin32')}}</a>
          </span>
        </a-table>
    </div>
</template>
<script>
import { setup } from '@/locales';
import { mapGetters } from 'vuex';
import { addAddress,delAddress } from '@/script/api';
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
            columns: [
                {
                    title: this.$t('extractcoin.extractcoin17'),
                    dataIndex: 'coin',
                    key: 'coin'
                },
                {
                    title: this.$t('extractcoin.extractcoin06'),
                    dataIndex: 'address',
                    key: 'address'
                },
                {
                    title: this.$t('extractcoin.extractcoin19'),
                    dataIndex: 'note',
                    key: 'note'
                },
                {
                    title: this.$t('assetoverview.assetoverview16'),
                    key: 'action',
                    scopedSlots: { customRender: 'action' },
                },
            ],
            ModalText: 'Content of the modal',
            visible: false,
            tradersPassword:'',
            isAdd:false,
            isDel:false
        }
    },
    created(){
        this.form.coin = this.coin;
    },
    computed:{
        ...mapGetters(['coin_list','coin']),
    },
    methods:{
        checkcurrency(index){
            this.form.coin =  this.coin_list[index].coin;
        },
        showModal() {
            this.visible = true;
        },
        forgetPwd(){
            
        },
        goDel(){
            this.isDel = true;
        },
        handleOk(e) {
            this.visible = false;
            this.isAdd = true;
        },
        handleCancel(e) {
            this.visible = false;
        },
        cancelConfirm(option){
            if(option == "add"){
                this.isAdd = false;
            }
            else if(option == "del"){
                this.isDel = false;
            }            
        },
        okConfirm(option){
            if(option == "add"){
                this.isAdd = false;
            }
            else if(option == "del"){
                this.isDel = false;
            }    
        }
    }
}
</script>
<style lang="scss" scoped>
    #extractcoinaddress{
        padding: 10px;
        font-size: 14px;
        header{
            margin: 0 0 10px;
            font-size: 16px;
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
    .btn{
        border: none;
        outline: none;
    }
</style>