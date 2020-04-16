<template lang="pug">
  #advantage
    .title
        img(src="@/assets/image/advantage_left.png")
        span 平台优势
        img(src="@/assets/image/advantage_right.png")
    .des 全球前列的算力资产管理及交易平台
    .tips
        span 全球
        span.big 10万
        span +用户得信任之选
    .contain
        .item
            img(src="@/assets/image/advantage2.png")
            .itemTitle 全球分布式算力中心庞大算力供给
            .des
                span 平台算力充裕，约占全球算力
                span.color_y 3%
                span ，来源于全球近20个算力中心真实稳定供给
        .item
            img(src="@/assets/image/advantage3.png")
            .itemTitle 算力产品多样丰富，满足不同需求
            .des
                span 多样化算力产品自由选择，长达
                span.color_y 3年
                span 的长期合约及差异化自选短期服务，满足用户不同需求
        .item
            img(src="@/assets/image/advantage4.png")
            .itemTitle 规模化平台管理：降低用户成本，抗击风险
            .des
                span 大规模电力供应合作伙伴，稳定供应
                span.color_y 3亿kwh/月
                span ； 规模化风控：标准算力供应商管理，全天候高效能监控系统平台标准化风险控制
        .item
            img(src="@/assets/image/advantage5.png")
            .itemTitle 真实可信的去中心化算力资产管理
            .des
                span 基于公链的
                span.color_y 去中心化管理
                span ，供应链全流程链上记录与鉴证，保证算力在每一个环节的实时交割，整个过程公开透明，可追溯、可审计、不可篡改
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
#advantage {
  background-image: url('../../assets/image/advantage1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 76px 0 80px;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    & > img {
      display: block;
    }
    & > span {
      margin: 0 25px;
      font-size: 36px;
      font-weight: 500;
      color: #fff;
    }
  }
  .des {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    opacity: 0.41;
    text-align: center;
    margin-bottom: 41px;
  }
  .tips {
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    color: rgba(255, 164, 65, 1);
    margin-bottom: 74px;
    & > .big {
      font-size: 36px;
    }
  }
  .contain {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    .item {
      width: 100%;
      max-width: 421px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 20px;
      & > img {
        display: block;
        margin-bottom: 28px;
      }
      .itemTitle {
        font-size: 20px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 20px;
      }
      .des {
        font-size: 16px;
        font-weight: 400;
        color: rgba(160, 165, 172, 1);
        .color_y {
          color: #ffa441;
        }
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
    .des {
      font-size: 16px;
      margin-bottom: 10px;
    }
    .tips {
      font-size: 16px;
      margin-bottom: 20px;
      & > .big {
        font-size: 18px;
      }
    }
    .contain {
      .item {
        .itemTitle {
          font-size: 16px;
        }
        .des {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
