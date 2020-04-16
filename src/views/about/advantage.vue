<template lang="pug">
  #platform
    .top
        .imgs
            a-carousel
                .item
        .des
            .title 全球分布式算力中心庞大算力供给
            .text 人人矿场算力来自全球分布式算力供应商的大规模实体矿场，近20个算力中心，分布在中国、美国、加拿大、俄罗斯及欧洲其它国家、其它地区，总机位超100,000台，提供数千PH/s真实稳定算力，形成全球分布式算力供给网络，并透过全球TOP10矿池接入RRMine/人人矿场平台。
    .bottom
        .contain
            .item
                img(src="@/assets/image/about21.png")
                .title 构筑去中心化算力基础设施
                .text RRMine通过接入全球算力智能网络BHP公链，实现对平台算力供应链全流程，包括算力交割、算力产出和算力清算的链上记录与鉴证。并将每一笔算力交易数据实时写入BHP公链，可追溯、可审计、不可篡改。
            .item
                img(src="@/assets/image/about22.png")
                .title 打造可信算力资产
                .text 改变终端算力用户和算力平台之间信息不对等的现状。解决根本的信任问题。
            .item
                img(src="@/assets/image/about23.png")
                .title 解决矿业市场痛点
                .text 行业内首次出现算力资产基于公链的去中心化管理，解决矿业市场长期存在痛点：算力鉴权认证能力。
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
  async created() {},
};
</script>

<style lang="scss" scoped>
#platform {
  .top {
    background: rgba(249, 249, 250, 1);
    padding: 70px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .imgs {
      width: 100%;
      max-width: 680px;
      .item {
        width: 100%;
        min-height: 430px;
        background: #333;
      }
    }
    .des {
      width: 100%;
      max-width: 520px;
      box-sizing: border-box;
      min-height: 430px;
      padding: 70px;
      background: #fff;
      .title {
        font-size: 24px;
        font-weight: bold;
        color: rgba(38, 38, 38, 1);
        margin-bottom: 20px;
      }
      .text {
        font-size: 16px;
        font-weight: 400;
        color: rgba(89, 89, 89, 1);
      }
    }
  }
  .bottom {
    background: #fff;
    padding: 70px 0;
    .contain {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        width: 100%;
        max-width: 319px;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > img {
          display: block;
          margin-bottom: 30px;
        }
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
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .top {
      padding: 0;
      .imgs {
        .item {
          min-height: 234px;
        }
      }
      .des {
        min-height: 0;
        padding: 20px;
        .title {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .text {
          font-size: 14px;
        }
      }
    }
    .bottom {
      padding: 0;
      .contain {
        justify-content: center;
        .item {
          min-height: 0;
          margin-bottom: 20px;
          & > img {
            margin-bottom: 20px;
          }
          .title {
            font-size: 18px;
            margin-bottom: 10px;
          }
          .text {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
