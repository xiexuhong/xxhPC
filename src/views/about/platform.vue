<template lang="pug">
  #platform
    .top
        .left
            .title 去中心化全球算力资产管理及交易平台
            .text 
                span RRMine是香港superb grace limited 優采有限公司旗下的全球算力资产管理及交易平台，基于区块链技术向全球客户提供公开透明、去中心化的算力管理、算力交割、算力交易等各种在线服务。 
                span 目前平台管理算力规模位居全球前列，业务遍及中国、日本、韩国、新加坡、德国、澳洲等国家和地区。
        .right
            .item
                .title 愿景
                .text 持续完善RRMine的全球布局，让更多国家和地区的人们都能享受到标准化的算力服务。
            .item
                .title 使命
                .text 构筑去中心化全球算力基础设施，实现算力资产自由流动，人人轻松拥有算力资产。
    .bottom
        .contain
            .title 香港superb grace limited 優采有限公司
            .text SuperB Grace Limited（優采有限公司）是世界领先的算力交易平台运营者，专注于区块链技术和产品的创新。 旗下平台包括全球算力资产管理及交易平台RRMine及全球首个跨链算力清算系统-RRP平台，并参与发起全球Top100的算力公链-BHP。算力交易相关的完整的公链节点记录和维护于全球前100公链BHP，拥有对冲算力交易市场风险的内在稳定机制。
            .partner
                .title 合作伙伴
                .imgs
                    img(src="@/assets/image/partner1.png")
                    img(src="@/assets/image/partner2.png")
                    img(src="@/assets/image/partner3.png")
                    img(src="@/assets/image/partner4.png")
                    img(src="@/assets/image/partner5.png")
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
  methods: {
    changeTab(val) {
      console.log(val);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
#platform {
  .top {
    background: rgba(249, 249, 250, 1);
    padding: 70px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .left {
      background: #fff;
      box-sizing: border-box;
      width: 100%;
      max-width: 600px;
      min-height: 370px;
      padding: 56px;
      .title {
        font-size: 24px;
        font-weight: bold;
        color: rgba(38, 38, 38, 1);
        margin-bottom: 30px;
      }
      .text {
        font-size: 16px;
        font-weight: 400;
        color: rgba(89, 89, 89, 1);
        & > span {
          display: block;
          &:first-child {
            margin-bottom: 20px;
          }
        }
      }
    }
    .right {
      box-sizing: border-box;
      width: 100%;
      max-width: 600px;
      min-height: 370px;
      background: rgba(38, 38, 38, 1);
      padding: 56px;
      .item {
        .title {
          display: inline-block;
          font-size: 24px;
          padding: 10px 0;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          border-bottom: 4px solid #ffab32;
          margin-bottom: 20px;
        }
        .text {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  .bottom {
    background: #fff;
    padding: 70px 0;
    .contain {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      .title {
        font-size: 24px;
        font-weight: bold;
        color: rgba(38, 38, 38, 1);
        margin-bottom: 30px;
      }
      .text {
        font-size: 16px;
        font-weight: 400;
        color: rgba(89, 89, 89, 1);
        max-width: 900px;
        margin-bottom: 80px;
      }
      .partner {
        .title {
          margin-bottom: 20px;
        }
        .imgs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          & > img {
            display: block;
            border: 1px dashed #ccc;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .top {
      padding: 0;
      .left {
        padding: 20px;
        min-height: 0px;
        .title {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .text {
          font-size: 14px;
          & > span {
            &:first-child {
              margin-bottom: 10px;
            }
          }
        }
      }
      .right {
        padding: 20px;
        min-height: 0px;
        .item {
          .title {
            font-size: 18px;
            border-bottom: 4px solid #ffab32;
            margin-bottom: 20px;
          }
          .text {
            font-size: 14px;
          }
        }
      }
    }
    .bottom {
      padding: 20px;
      .contain {
        .title {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .text {
          font-size: 14px;
          margin-bottom: 20px;
        }
        .partner {
          .title {
            margin-bottom: 10px;
          }
          .imgs {
            & > img {
              flex: 1;
            }
          }
        }
      }
    }
  }
}
</style>
