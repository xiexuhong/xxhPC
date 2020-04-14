<template>
    <div id="extractcoin">
        <header>
            <a-breadcrumb separator=">">
            <a-breadcrumb-item href=""><router-link to="/asset/assetoverview">资产总览</router-link></a-breadcrumb-item>
            <a-breadcrumb-item><router-link to="/asset/extractcoin">提币</router-link></a-breadcrumb-item>
            <a-breadcrumb-item>提币地址管理</a-breadcrumb-item>
            </a-breadcrumb>
        </header>
    </div>
</template>
<script>
import { setup } from '@/locales';
export default {
    data(){
        return {
            
        }
    }
}
</script>