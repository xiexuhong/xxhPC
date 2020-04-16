<template lang="pug">
  #recommend
    .title
        img(src="@/assets/image/recommend_title_left.png")
        span 业务模式
        img(src="@/assets/image/recommend_title_right.png")
    .des 去中心化可信算力资产管理
    .tips
        .line
            span 行业内率先实现算力资产基于公链的
            span.color_y 去中心化管理
        .line
            span 人人可监督人人可参与的
            span.color_y 全球算力
            span 基础设施
    .contain
        .top
            .item
                img(src="@/assets/image/mode11.png")
                span 下单算力合约
            .arrow
                img(src="@/assets/image/arrowRight.png")
            .item
                img(src="@/assets/image/mode12.png")
                span 人人矿场算力资产管理
            .arrow
                img(src="@/assets/image/arrowRight.png")
            .item
                img(src="@/assets/image/mode13.png")
                span 依照规则分配算力产出
            .arrow
                img(src="@/assets/image/arrowRight.png")
            .item
                img(src="@/assets/image/mode14.png")
                span 用户收到产出
        .middle
            img(src="@/assets/image/arrowTop.png")
        .bottom
            .item
                img(src="@/assets/image/mode21.png")
                span.item_title 实体矿场
                span.des 全球分布式算力供应商 的大规模实体矿场
            .arrow
                img(src="@/assets/image/arrowRight.png")
            .item
                img(src="@/assets/image/mode22.png")
                span.item_title 主流矿池
                span.des 全球top10矿池
            .arrow
                img(src="@/assets/image/arrowRight.png")
            .item
                img(src="@/assets/image/mode23.png")
                span.item_title 算力产出
                span.des 依照规则分配算力产出
            .arrow
                img(src="@/assets/image/arrowRight.png")
            .item
                img(src="@/assets/image/mode24.png")
                span.item_title RRP算力清算与交割系统
                span.des 实现对平台算力供应链全流程，包括算力交割、算力产出和算力清算的链上记录与鉴证
            .arrow
                img(src="@/assets/image/arrowRight.png")
            .item
                img(src="@/assets/image/mode25.png")
                span.item_title BHP公链
                span.des 每一笔算力交易数据实 时写入
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
#recommend {
  padding: 76px 0 80px;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 26px;
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
  .des {
    font-size: 18px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    text-align: center;
    margin-bottom: 30px;
  }
  .tips {
    font-size: 20px;
    font-weight: 400;
    color: rgba(38, 38, 38, 1);
    text-align: center;
    margin-bottom: 70px;
    .line {
      &:first-child {
        margin-bottom: 16px;
      }
      .color_y {
        color: #ff8e13;
      }
    }
  }
  .contain {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .top {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 400;
        color: rgba(38, 38, 38, 1);
      }
    }
    .bottom {
      width: 100%;
      background: rgba(250, 250, 250, 1);
      border: 1px solid rgba(229, 229, 229, 1);
      border-radius: 9px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 15%;
        .item_title {
          font-size: 14px;
          font-weight: 400;
          color: rgba(38, 38, 38, 1);
        }
        .des {
          font-size: 14px;
          font-weight: 400;
          color: rgba(137, 137, 137, 1);
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
      font-size: 14px;
      margin-bottom: 20px;
    }
    .contain {
      flex-direction: row;
      .top {
        width: 40%;
        flex-direction: column;
        .item {
          font-size: 14px;
        }
        .arrow {
          transform: rotate(90deg);
          margin: 10px 0;
        }
      }
      .middle {
        transform: rotate(90deg);
        margin: 0 10px;
      }
      .bottom {
        width: 60%;
        flex-direction: column;
        .item {
          width: 100%;
          .item_title {
            font-size: 14px;
          }
          .des {
            font-size: 12px;
          }
        }
        .arrow {
          transform: rotate(90deg);
          margin: 10px 0;
        }
      }
    }
  }
}
</style>
