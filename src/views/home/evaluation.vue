<template lang="pug">
  #evaluation
    .title
        img(src="@/assets/image/recommend_title_left.png")
        span 用户、合作伙伴赠言
        img(src="@/assets/image/recommend_title_right.png")
    .contain
        .item
            .top
                .avatar
                .name
                    span TokenInsight
                    span 全球领先的数字通证评级与研究机构
            .bottom
                .text 人人矿场的算力合约将算力分摊到各大矿池、矿场，保证了算力的稳定供应，同时不受单一矿机性能的影响，从风控角度看配置也更加合理稳健。
        .item
            .top
                .avatar
                .name
                    span 兰洪明
                    span 知名互联网和区块链行业投资人，人气创业导师
            .bottom
                .text 人人矿场的“算力资产管理”其实是在合约销售完成之后的长期资产价值维护的过程。包括合约费用覆盖电费、运营成本风控管理；每日分币管理；合约的可交易转让，这些特性都可以看出“资产管理”所诉求的阻抗风险的设计。
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['deviceType']),
  },
  created() {},
};
</script>

<style lang="scss" scoped>
#evaluation {
  background: rgba(249, 249, 250, 1);
  padding: 76px 0 80px;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 72px;
    & > img {
      display: block;
    }
    & > span {
      margin: 0 25px;
      font-size: 36px;
      font-weight: 500;
      color: rgba(38, 38, 38, 1);
    }
  }
  .contain {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      box-sizing: border-box;
      width: 100%;
      max-width: 588px;
      min-height: 406px;
      background: #333;
      border-radius: 6px;
      color: #fff;
      padding: 30px;
      .top {
        display: flex;
        align-items: center;
        margin-bottom: 54px;
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #000;
          overflow: hidden;
        }
        .name {
          max-width: calc(100% - 60px);
          margin-left: 10px;
          display: flex;
          flex-direction: column;
        }
      }
      .bottom {
        max-width: 498px;
        font-size: 20px;
        font-weight: 400;
        line-height: 44px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
    .title {
      margin-bottom: 20px;
      & > span {
        font-size: 18px;
      }
    }
    .contain {
      .item {
        margin-bottom: 10px;
        .bottom {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
