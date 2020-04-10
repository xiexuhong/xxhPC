<template lang="pug">
  #footer
    .contain
        .item
            .title RR Mine
            .text 客服邮箱：support@rrmine.com
            .img
                img(src="../../assets/image/facebook.png")
                img(src="../../assets/image/twitter.png")
        .links
            .title  产品
            a.text 算力市场
        .links
            .title  信息
            a.text 关于我们
            a.text 联系我们
            a.text 公告中心
            a.text 资讯
        .links
            .title  支持
            a.text 商务合作
            a.text 帮助中心
            a.text 提交工单
            a.text 隐私条款
            a.text 用户条款
        .links
            .title  主要汇率
            a.text 1 BTC = 8924.71 美元
            a.text 1 ETH = 2281 美元
            a.text 1 LTC = 61.37 美元
            a.text 1 BHP = 0.76 美元
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

<style lang="scss">
#footer {
  height: 286px;
  padding-top: 68px;
  box-sizing: border-box;
  .contain {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .links {
      display: flex;
      flex-direction: column;
      margin-left: 120px;
      .title {
        font-size: 16px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 48px;
      }
      .text {
        font-size: 14px;
        font-weight: 400;
        color: rgba(160, 165, 172, 1);
        opacity: 0.87;
        line-height: 29px;
      }
    }
    .item {
      .title {
        font-size: 24px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 48px;
      }
      .text {
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        opacity: 0.46;
        line-height: 29px;
      }
      .img {
        display: flex;
        margin-top: 29px;
        & > img {
          display: block;
          &:first-child {
            margin-right: 17px;
          }
        }
      }
    }
  }
}
</style>
