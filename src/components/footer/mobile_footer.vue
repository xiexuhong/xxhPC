<template lang="pug">
  #footer
    .top
        .title RR Mine
        .email 客服邮箱：support@rrmine.com
    .middle
        .img 
            img(src="@/assets/image/facebook.png")
            img(src="@/assets/image/twitter.png")
        .menu
            a-dropdown(:trigger="['click']")
                a.item(@click="e => e.preventDefault()") 产品
                a-menu(slot="overlay")
                    a-menu-item(key="0")
                        a 算力市场
            a-dropdown(:trigger="['click']")
                a.item(@click="e => e.preventDefault()") 信息
                a-menu(slot="overlay")
                    a-menu-item(key="0")
                        a 关于我们
                    a-menu-item(key="1")
                        a 联系我们
                    a-menu-item(key="2")
                        a 公告中心
                    a-menu-item(key="3")
                        a 资讯
            a-dropdown(:trigger="['click']")
                a.item(@click="e => e.preventDefault()") 支持
                a-menu(slot="overlay")
                    a-menu-item(key="0")
                        a 商务合作
                    a-menu-item(key="1")
                        a 帮助中心
                    a-menu-item(key="2")
                        a 提交工单
                    a-menu-item(key="3")
                        a 隐私条款
                    a-menu-item(key="4")
                        a 用户条款
            a-dropdown(:trigger="['click']")
                a.item(@click="e => e.preventDefault()") 主要汇率
                a-menu(slot="overlay")
                    a-menu-item(key="0")
                        a 1 BTC = 8924.71 美元
                    a-menu-item(key="1")
                        a 1 ETH = 2281 美元
                    a-menu-item(key="2")
                        a 1 LTC = 61.37 美元
                    a-menu-item(key="3")
                        a 1 BHP = 0.76 美元
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#footer {
  box-sizing: border-box;
  color: #fff;
  padding: 10px 20px;
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .middle {
    display: flex;
    justify-content: space-between;
    .img {
      display: flex;
      & > img {
        margin-right: 10px;
        display: block;
      }
    }
    .menu {
      display: flex;
      .item {
        margin-left: 20px;
      }
      a {
        color: #fff;
      }
    }
  }
}
</style>
