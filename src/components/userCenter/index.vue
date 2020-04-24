<template>
  <div id="assetmenu">
    <a-menu
      mode="inline"
      :openKeys="openKeys"
      @openChange="onOpenChange"
      :defaultSelectedKeys="['1']"
      :class="{mobileHeader: deviceType !== 'desktop'}"
    >
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="user" />{{$t('asset.asset02')}}
        </span>
        <a-menu-item key="1">
          <router-link to="/asset/assetoverview">{{$t('asset.asset01')}}</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/asset/available_assets">{{$t('asset.asset03')}}</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/asset/digiccy">{{$t('asset.asset04')}}</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/asset/assetbills">{{$t('asset.asset05')}}</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="laptop" />{{$t('asset.asset06')}}
        </span>
        <a-menu-item key="5">
          <router-link to="/hashrateContract/contractList">{{$t('asset.asset07')}}</router-link>
        </a-menu-item>
        <a-menu-item key="6">
          <router-link to="/hashrateContract/hashrateIncome">{{$t('asset.asset08')}}</router-link>
        </a-menu-item>
        <a-menu-item key="7">
          <router-link to="/hashrateContract/hashrateTransfer">{{$t('asset.asset09')}}</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title">
          <a-icon type="notification" />{{$t('asset.asset10')}}
        </span>
        <a-menu-item key="9">
          <router-link to="/account/security">{{$t('asset.asset11')}}</router-link>
        </a-menu-item>
        <a-menu-item key="10">
          <router-link to="/account/bank_card">{{$t('asset.asset12')}}</router-link>
        </a-menu-item>
        <a-menu-item key="11">
          <router-link to="/account/get_coin_addr">{{$t('asset.asset13')}}</router-link>
        </a-menu-item>
        <a-menu-item key="12">
          <router-link to="/account/power_age">{{$t('asset.asset14')}}</router-link>
        </a-menu-item>
        <a-menu-item key="13">
          <router-link to="/account/invite">{{$t('asset.asset15')}}</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { localesEumn } from '@/locales';
import { mapGetters, mapMutations } from 'vuex';
import { getAssetList,ownCurrency,changeCurrency } from '@/script/api';
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
#assetmenu {
  .mobileHeader {
    display: none;
    padding: 0;
  }
}
</style>