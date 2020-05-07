<template lang="pug">
  #header
    .left
      .desktop(v-if="deviceType === 'desktop'")
        .logo
          img(src="@/assets/image/logo.png")
        ul.menu
          router-link(to="/" :class="{actice:getActice('home')}")
            li 首页
          router-link(to="/hashrateMarket" :class="{actice:getActice('hashrateMarket')}")
            li 算力市场
          router-link(to="/" :class="{actice:getActice('')}")
            li 平台动态
          router-link(to="/" :class="{actice:getActice('')}")
            li 帮助中心
          router-link(to="/about" :class="{actice:getActice('about')}")
            li 关于我们
      a-button(v-else type="primary" @click="toggleCollapsed")
        a-icon(:type="collapsed ? 'menu-unfold' : 'menu-fold'" )
    .right
      router-link(to="/login/login" v-if="!user.token")
        a-button(type="link") 登录
      router-link(to="/login/login" v-else)
        img(src="@/assets/image/account/user.png")
      router-link(to="/login/register" v-if="!user.token")
        a-button(type="link") 注册
      router-link.message(to="/messageCenter" v-else)
        a-badge(:count="unread_sum" :overflowCount="99")
          a-popover(trigger="click" v-model="visible" v-if="deviceType==='desktop'")
            MessageCenter(slot="content" isComponent @close="visible=false")
            img(src="@/assets/image/account/notice.png")
          img(src="@/assets/image/account/notice.png" v-else)
      a-button(type="link") 下载
      a-dropdown(:trigger="['click']")
        a-menu(slot="overlay" @click="chooseLocale")
          a-menu-item(key="ZH-CN") 简体
          a-menu-item(key="ZH-TW") 繁体
          a-menu-item(key="EN-US") EN
        a-button(type="link") {{localesEumn[lang]}}
          a-icon(type="down")
    a-drawer(v-if="deviceType !== 'desktop'" placement="left" :closable="false" :visible="collapsed" @close="drawerClose" wrapClassName="menuDrawer")
      a-menu(:defaultSelectedKeys="['1']" mode="inline" theme="dark" @click="chooseMenu")
        a-menu-item(key="/")
          a-icon(type="pie-chart")
          span 首页
        a-menu-item(key="/hashrateMarket")
          a-icon(type="desktop")
          span 算力市场
        a-menu-item(key="3")
          a-icon(type="inbox")
          span 资讯
        a-menu-item(key="4")
          a-icon(type="pie-chart")
          span 帮助中心
        a-menu-item(key="/about")
          a-icon(type="pie-chart")
          span 关于我们
        a-sub-menu(key="assets")
          span(slot="title")
            a-icon(type="user")
            span 我的资产
          a-menu-item(key="/asset/assetoverview") 资产总览
          a-menu-item(key="/asset/available_assets") 可用资产
          a-menu-item(key="/asset/digiccy") 数字货币
          a-menu-item(key="/asset/assetbills") 资产账单
        a-sub-menu(key="hashrateContract")
          span(slot="title")
            a-icon(type="notification")
            span 我的账户
          a-menu-item(key="/hashrateContract/contractList") 我的合约
          a-menu-item(key="/hashrateContract/hashrateIncome") 算力收益
          a-menu-item(key="/hashrateContract/hashrateTransfer") 算力转让
        a-sub-menu(key="account")
          span(slot="title")
            a-icon(type="laptop")
            span 我的账户
          a-menu-item(key="/account/security") 账户&安全
          a-menu-item(key="/account/bank_card") 银行卡管理
          a-menu-item(key="/account/get_coin_addr") 提币地址管理
          a-menu-item(key="/account/power_age") 算龄
          a-menu-item(key="/invite") 推荐奖励
</template>

<script>
import { localesEumn } from '@/locales';
import { mapGetters } from 'vuex';
import { setup } from '@/locales';
import MessageCenter from '@/views/messageCenter';
export default {
  components: { MessageCenter },
  data() {
    return {
      visible: false,
      localesEumn: localesEumn,
      collapsed: false,
    };
  },
  computed: {
    ...mapGetters(['deviceType', 'lang', 'user', 'unread_sum']),
  },
  mounted() {},
  methods: {
    getActice(name) {
      return this.$route.name === name;
    },
    openMessage() {
      console.log(this.visible);
    },
    chooseLocale(val) {
      setup(val.key);
    },
    chooseMenu(val) {
      this.$router.push(val.key);
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
#header {
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  .left {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .desktop {
      height: 100%;
      display: flex;
      .logo {
        width: 120px;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-right: 20px;
        & > img {
          display: block;
          width: 100%;
        }
      }
      .menu {
        display: flex;
        a {
          color: #fff;
        }
        .actice {
          color: #1890ff;
        }
        li {
          padding: 0 10px;
          cursor: pointer;
        }
      }
    }
  }
  .right {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .message {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ant-btn-link {
      color: #fff;
    }
    img {
      display: block;
      padding: 0 15px;
    }
  }
}
</style>
