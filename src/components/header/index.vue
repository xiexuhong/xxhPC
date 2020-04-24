<template lang="pug">
  #header
    .left
      .desktop(v-if="deviceType === 'desktop'")
        .logo
          img(src="@/assets/image/logo.png")
        ul.menu
          router-link(to="/")
            li 首页
          router-link(to="/hashrateMarket")
            li 算力市场
          li 平台动态
          router-link(to="/helpCenter")
            li 帮助中心
          router-link(to="/about")
            li 关于我们
      a-button(v-else type="primary" @click="toggleCollapsed")
        a-icon(:type="collapsed ? 'menu-unfold' : 'menu-fold'" )
    .right
      router-link(to="/login/login" v-if="!user.token")
        a-button(type="link") 登录
      router-link(to="/asset/assetoverview" v-else)
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
        a-menu-item(key="2")
          a-icon(type="desktop")
          span 
            router-link(to="/hashrateMarket") 算力市场
        a-menu-item(key="3")
          a-icon(type="inbox")
          span 资讯
        a-menu-item(key="4")
          a-icon(type="pie-chart")
          span 帮助中心
        a-menu-item(key="/about")
          a-icon(type="pie-chart")
          span 关于我们
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
    img {
      display: block;
      padding: 0 15px;
    }
  }
}
</style>
