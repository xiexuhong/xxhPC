<template>
  <div id="header">
    <div class="left">
      <div class="desktop" v-if="deviceType === 'desktop'">
        <div class="logo">logo展位</div>
        <ul class="menu">
          <li>首页</li>
          <!-- 算力市场路由跳转 -->
          <li @click="goPath('/hashrateMarket')">算力市场</li>
          <li>资讯</li>
          <li>帮助中心</li>
          <li>关于我们</li>
        </ul>
      </div>
      <a-button v-else type="primary" @click="toggleCollapsed">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
    </div>
    <div class="right">
      <a-button type="link" @click="goPath('login')">登录</a-button>
      <a-button type="link">注册</a-button>
      <a-button type="link">下载</a-button>
      <a-dropdown :trigger="['click']">
        <a-menu slot="overlay" @click="chooseLocale">
          <a-menu-item key="zh">简体</a-menu-item>
          <a-menu-item key="tw">繁体</a-menu-item>
          <a-menu-item key="en">EN</a-menu-item>
        </a-menu>
        <a-button type="link">
          {{localesEumn[local]}}
          <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>
    <a-drawer
      v-if="deviceType !== 'desktop'"
      placement="left"
      :closable="false"
      :visible="collapsed"
      @close="drawerClose"
      wrapClassName="menuDrawer"
    >
      <a-menu :defaultSelectedKeys="['1']" mode="inline" theme="dark" @click="chooseMenu">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>首页</span>
        </a-menu-item>
        <!-- 算力市场路由跳转 -->
        <a-menu-item key="2" @click="goPath('/hashrateMarket')">
          <a-icon type="desktop" />
          <span>算力市场</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="inbox" />
          <span>资讯</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="inbox" />
          <span>帮助中心</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="inbox" />
          <span>关于我们</span>
        </a-menu-item>
      </a-menu>
    </a-drawer>
  </div>
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
      _this: this,
    };
  },
  computed: {
    ...mapGetters(['deviceType', 'lang']),
  },
  methods: {
    goPath(path) {
      this.$router.push(path);
    },
    chooseLocale(val) {
      setup(val.key);
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

<style lang="scss">
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
        background: forestgreen;
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
.menuDrawer {
  .ant-drawer-wrapper-body {
    background: #001529;
    .ant-drawer-body {
      padding: 0;
    }
  }
}
</style>
