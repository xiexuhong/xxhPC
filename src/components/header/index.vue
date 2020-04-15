<template lang="pug">
  #header
    .left
      .desktop(v-if="deviceType === 'desktop'")
        .logo
          img(src="@/assets/image/logo.png")
        ul.menu
          router-link(to="/")
            li 首页
          li 算力市场
          li 平台动态
          li 帮助中心
          router-link(to="/about")
            li 关于我们
      a-button(v-else type="primary" @click="toggleCollapsed")
        a-icon(:type="collapsed ? 'menu-unfold' : 'menu-fold'" )
    .right
      router-link(to="/login/login")
        a-button(type="link") 登录
      router-link(to="/login/register")
        a-button(type="link") 注册
      a-button(type="link") 下载
      a-dropdown(:trigger="['click']")
        a-menu(slot="overlay" @click="chooseLocale")
          a-menu-item(key="zh_cn") 简体
          a-menu-item(key="zh_tw") 繁体
          a-menu-item(key="en_us") EN
        a-button(type="link") {{localesEumn[lang]}}
          a-icon(type="down")
    a-drawer(v-if="deviceType !== 'desktop'" placement="left" :closable="false" :visible="collapsed" @close="drawerClose" wrapClassName="menuDrawer")
      a-menu(:defaultSelectedKeys="['1']" mode="inline" theme="dark" @click="chooseMenu")
        a-menu-item(key="/")
          a-icon(type="pie-chart")
          span 首页
        a-menu-item(key="2")
          a-icon(type="desktop")
          span 算力市场
        a-menu-item(key="3")
          a-icon(type="inbox")
          span 资讯
        a-menu-item(key="4")
          a-icon(type="pie-chart")
          span 帮助中心
        a-menu-item(key="5")
          a-icon(type="pie-chart")
          span 关于我们
</template>

<script>
import { localesEumn } from '@/locales';
import { mapGetters } from 'vuex';
import { setup } from '@/locales';
export default {
  data() {
    return {
      localesEumn: localesEumn,
      collapsed: false,
    };
  },
  computed: {
    ...mapGetters(['deviceType', 'lang']),
  },
  methods: {
    chooseLocale(val) {
      setup(val.key);
    },
    chooseMenu(val) {
      console.log(val);
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
        & > li {
          padding: 0 10px;
          cursor: pointer;
        }
      }
    }
  }
  .right {
    height: 100%;
  }
}
</style>
