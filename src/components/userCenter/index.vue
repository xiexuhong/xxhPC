<template>
  <div id="assetmenu">
    <a-menu mode="inline" :openKeys="openKeys" @openChange="onOpenChange" :class="{mobileHeader: deviceType !== 'desktop'}">
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="user" />我的资产</span>
            <a-menu-item key="1"><router-link to="/asset/assetoverview">资产总览</router-link></a-menu-item>
            <a-menu-item key="2"><router-link to="/asset/available_assets">可用资产</router-link></a-menu-item>
            <a-menu-item key="3"><router-link to="/asset/digiccy">数字货币</router-link></a-menu-item>
            <a-menu-item key="4"><router-link to="/asset/assetbills">资产账单</router-link></a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="laptop" />算力合约</span>
            <a-menu-item key="5"><router-link to="apple">我的合约</router-link></a-menu-item>
            <a-menu-item key="6"><router-link to="apple">算力收益</router-link></a-menu-item>
            <a-menu-item key="7"><router-link to="apple">算力转让</router-link></a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title"><a-icon type="notification" />我的账户</span>
            <a-menu-item key="9"><router-link to="apple">账户&安全</router-link></a-menu-item>
            <a-menu-item key="10"><router-link to="apple">银行卡管理</router-link></a-menu-item>
            <a-menu-item key="11"><router-link to="apple">提币地址管理</router-link></a-menu-item>
            <a-menu-item key="12"><router-link to="apple">算龄</router-link></a-menu-item>
            <a-menu-item key="13"><router-link to="apple">推荐奖励</router-link></a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { localesEumn } from '@/locales';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      local: 'zh',
      localesEumn: localesEumn,
      collapsed: false,
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1', 'sub2', 'sub4'],
    };
  },
  computed: {
    ...mapGetters(['deviceType']),
  },
  methods: {
    onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      },
    goPath(path) {
      this.$router.push(path);
    },
    chooseLocale(val) {
      this.local = val.key;
    },
    chooseMenu(val) {
      console.log(val);
      this.collapsed = false;
    },
    drawerClose() {
      this.collapsed = false;
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
<style lang="scss" scoped>
#assetmenu{
 .mobileHeader{
    display:none;
    padding: 0;
}
}
</style>